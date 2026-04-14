"use client"

import { FormEvent, useState } from "react"
import { Send } from "lucide-react"

export function ContactForm({ welsh }: { welsh?: boolean }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const copy = welsh
    ? {
        nameLabel: "Enw Llawn",
        namePlaceholder: "Eich enw",
        emailLabel: "Cyfeiriad E-bost",
        emailPlaceholder: "eich.ebost@example.com",
        subjectLabel: "Pwnc",
        subjectPlaceholder: "Sut gallwn ni helpu?",
        messageLabel: "Neges",
        messagePlaceholder: "Dywedwch fwy wrthym am eich ymholiad...",
        websiteLabel: "Gwefan",
        success:
          "Diolch! Rydym wedi derbyn eich neges a byddwn yn cysylltu cyn gynted â phosibl.",
        error: "Mae'n ddrwg gennym, nid oedd modd anfon eich neges. Rhowch gynnig arall arni.",
        sending: "Yn anfon... gall hyn gymryd hyd at funud",
        send: "Anfon Neges",
        responseTime: "Rydym fel arfer yn ymateb o fewn un diwrnod gwaith",
      }
    : {
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        emailLabel: "Email Address",
        emailPlaceholder: "your.email@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "How can we help?",
        messageLabel: "Message",
        messagePlaceholder: "Tell us more about your enquiry...",
        websiteLabel: "Website",
        success:
          "Thank you! We've received your message and will get back to you as soon as possible.",
        error: "Sorry, we could not send your message. Please try again.",
        sending: "Sending... this can take up to a minute",
        send: "Send Message",
        responseTime: "We typically respond within one business day",
      }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Get form data
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        ;(e.target as HTMLFormElement).reset()
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        const result = await response.json().catch(() => null)
        setError(result?.error || copy.error)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setError(copy.error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          {copy.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={120}
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
          placeholder={copy.namePlaceholder}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          {copy.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
          placeholder={copy.emailPlaceholder}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          {copy.subjectLabel}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          maxLength={160}
          className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
          placeholder={copy.subjectPlaceholder}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          {copy.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={3000}
          rows={5}
          className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
          placeholder={copy.messagePlaceholder}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">{copy.websiteLabel}</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {isSubmitted && (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
          <p className="text-sm font-medium text-green-900">
            {copy.success}
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-900">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            {copy.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {copy.send}
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {copy.responseTime}
      </p>
    </form>
  )
}
