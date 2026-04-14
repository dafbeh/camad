import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const RECIPIENT_EMAIL = "admin@camad.org.uk"
const MAX_CONTENT_LENGTH = 10_000
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

type ContactPayload = {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
  website?: unknown
}

type RateLimitRecord = {
  count: number
  resetAt: number
}

const globalForRateLimit = globalThis as typeof globalThis & {
  contactFormRateLimit?: Map<string, RateLimitRecord>
}

const rateLimitStore =
  globalForRateLimit.contactFormRateLimit ??
  (globalForRateLimit.contactFormRateLimit = new Map<string, RateLimitRecord>())

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }

  return request.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || record.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return false
  }

  record.count += 1
  return record.count > RATE_LIMIT_MAX_REQUESTS
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim().replace(/\0/g, "").slice(0, maxLength)
}

function cleanHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim()
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function validatePayload(payload: ContactPayload) {
  const name = cleanText(payload.name, 120)
  const email = cleanText(payload.email, 254).toLowerCase()
  const subject = cleanText(payload.subject, 160)
  const message = cleanText(payload.message, 3_000)
  const website = cleanText(payload.website, 200)

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (website) {
    return { ok: false as const, reason: "Spam detected." }
  }

  if (!name || !email || !subject || !message) {
    return { ok: false as const, reason: "Please complete all fields." }
  }

  if (!emailPattern.test(email)) {
    return { ok: false as const, reason: "Please enter a valid email address." }
  }

  if (message.length < 10) {
    return { ok: false as const, reason: "Please enter a longer message." }
  }

  return {
    ok: true as const,
    data: {
      name,
      email,
      subject: cleanHeader(subject),
      message,
    },
  }
}

function getMailConfig() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER, and SMTP_PASS must be configured.")
  }

  const fromAddress = process.env.SMTP_FROM || user

  return {
    fromAddress,
    transport: nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    }),
  }
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0)

  if (contentLength > MAX_CONTENT_LENGTH) {
    return NextResponse.json({ error: "Message is too large." }, { status: 413 })
  }

  const ip = getClientIp(request)

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    )
  }

  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const validation = validatePayload(payload)

  if (!validation.ok) {
    return NextResponse.json({ error: validation.reason }, { status: 400 })
  }

  const { name, email, subject, message } = validation.data
  const submittedAt = new Date().toISOString()
  const safeName = cleanHeader(name)
  const mailSubject = `Contact Us Form Enquiry: ${subject}`

  const phishingWarning =
    "Security notice: This message was submitted through the website contact form. Be careful with links, attachments, payment requests, password requests, and any urgent or unusual instructions. Verify the sender before taking action."

  const textBody = `${phishingWarning}

New contact form submission

Name: ${safeName}
Email: ${email}
Subject: ${subject}
Submitted: ${submittedAt}
IP address: ${ip}

Message:
${message}
`

  const htmlBody = `
    <p><strong>Security notice:</strong> This message was submitted through the website contact form. Be careful with links, attachments, payment requests, password requests, and any urgent or unusual instructions. Verify the sender before taking action.</p>
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>IP address:</strong> ${escapeHtml(ip)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `

  try {
    const { fromAddress, transport } = getMailConfig()

    await transport.sendMail({
      to: RECIPIENT_EMAIL,
      from: {
        name: "CAMAD Website",
        address: fromAddress,
      },
      replyTo: {
        name: safeName,
        address: email,
      },
      subject: mailSubject,
      text: textBody,
      html: htmlBody,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form email failed:", error)

    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    )
  }
}
