import Image from "next/image"
import Link from "next/link"
import { Heart, Users, HandHelping } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
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
              <span className="text-sm font-medium text-card/90">Serving Machynlleth since 1998</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight 
              tracking-tight text-card sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Strengthening Our Community, Together
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-card/90 md:text-2xl">
              {/* CAMAD connects volunteers with those who need support across
            Machynlleth and the surrounding district. Whether you want to lend a hand
            or need a little help, we are here for you. */}
              Website refresh coming soon...
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/volunteer"
                className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground 
                  shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
              >
                Become a Volunteer
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-card/30 bg-card/10 px-8 py-3.5 text-base font-semibold 
                  text-card backdrop-blur-sm transition-all hover:bg-card/20"
              >
                Our Services
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-16 grid sm:max-w-2xl grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
              <StatCard
                icon={<Users className="h-5 w-5" />}
                value="200+"
                label="Active Volunteers"
              />
              <StatCard
                icon={<HandHelping className="h-5 w-5" />}
                value="1,500+"
                label="People Supported"
              />
              <StatCard
                icon={<Heart className="h-5 w-5" />}
                value="25+"
                label="Years of Service"
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