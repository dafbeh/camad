import Image from "next/image"
import Link from "next/link"
import { Heart, Users, HandHelping } from "lucide-react"
import Navbar from "@/components/Navbar"
import { getHome } from "@/sanity/lib/client"

import { Plus_Jakarta_Sans } from "next/font/google"
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
})

export const revalidate = 60

export default async function Home({ welsh }: { welsh?: boolean }) {
  const language = welsh ? 'cy' : 'en'
  const home = await getHome(language)

  return (
    <>
      <section>
        <Navbar welsh={welsh} />
      </section>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 select-none">
          <Image
            src="/images/machynlleth-hero.png"
            alt="The charming high street of Machynlleth, Wales, with its colorful buildings and iconic clock tower"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-24 pb-16 lg:px-12">
          <div className="mx-auto w-full max-w-5xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full 
              border border-card/20 bg-card/10 px-4 py-2 backdrop-blur-sm select-none">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-sm font-medium text-card/90">{home?.label}</span>
            </div>

            {/* Heading */}
            <h1
              className={`${jakarta.className} max-w-3xl text-4xl font-bold leading-tight 
                tracking-tight text-card sm:text-5xl md:text-6xl lg:text-7xl text-balance`}
            >
              {home?.header1}
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-card/90 md:text-2xl">
              {home?.subheader1}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={welsh ? "/cy/services" : "/services"}
                className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground 
                  shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl text-center"
              >
                {home?.button1}
              </Link>
              <Link
                href={welsh ? "/cy/contact" : "/contact"}
                className="rounded-full border border-card/30 bg-card/10 px-8 py-3.5 text-base font-semibold 
                  text-card backdrop-blur-sm transition-all hover:bg-card/20"
              >
                {home?.button2}
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-16 grid sm:max-w-2xl grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
              <StatCard
                icon={<Users className="h-5 w-5" />}
                value={home?.card1H}
                label={home?.card1B}
              />
              <StatCard
                icon={<HandHelping className="h-5 w-5" />}
                value={home?.card2H}
                label={home?.card2B}
              />
              <StatCard
                icon={<Heart className="h-5 w-5" />}
                value={home?.card3H}
                label={home?.card3B}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-card/10 bg-card/10
        px-5 py-4 backdrop-blur-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full 
          bg-primary/20 text-primary-foreground">
        {icon}
      </div>
      <div>
        <p className="text-xl font-bold text-card">{value}</p>
        <p className="text-sm w-[100px] text-card/70">{label}</p>
      </div>
    </div>
  )
}