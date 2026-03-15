import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Label from "@/components/Label"
import { Heart, Phone } from "lucide-react"
import Cta from "@/components/Cta"

export default function Services() {
  return (
    <>
      <Navbar background={true} />
      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"Our Services"} icon={Heart} />
        <h1 className="text-foreground sm:text-5xl md:text-6xl text-4xl text-center font-bold font-serif tracking-tight">Supporting our community</h1>
        <p className="max-w-2xl text-center text-foreground/70 text-lg md:px-0 px-5">
          We offer a range of services designed to support wellbeing, independence, and social connection for people living in Machynlleth and the surrounding areas.
        </p>
      </header>

      <section className="sticky top-[83px] z-40 border-b border-border bg-accent/95 px-6 backdrop-blur-md lg:px-12">
        <div className="mx-auto max-w-6xl md:px-10 px-0">
          <nav className="scrollbar-hide flex gap-1 overflow-x-auto py-3">
            {[
              { label: "Transport", href: "#transport" },
              { label: "Health & Wellbeing", href: "#health" },
              { label: "Community Support", href: "#community" },
              { label: "Social Activities", href: "#social" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="transport" className="flex lg:flex-row flex-col gap-15 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-3">
        <div className="start-self flex flex-col gap-4">
          <Label text={"Transport Services"} icon={Heart} />
          <div className="flex flex-col gap-4 lg:max-w-lg w-full">
            <h1 className="text-foreground text-4xl lg:max-w-[330px] font-bold font-serif tracking-tight pb-3">
              Helping you get where you need to go</h1>

            <p className="text-foreground/70">These transport schemes help ensure that living in a rural area does not limit independence or access to services.</p>

          </div>
        </div>
        <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full z-2">
          <Image
            src={
              "/images/camadOffice.png"
            }
            alt="image"
            fill
            className="object-cover rounded-lg"
          />
          <div className="lg:block hidden absolute -bottom-3 -left-3 z-1 h-full w-full rounded-2xl bg-primary/10" />
        </div>
      </section>

      <Cta
        Icon={Phone}
        header={"Need one of our services?"}
        body={"Give us a call or pop in to our office. We are always happy to help and can talk you through how each service works."}
        button1={"Get in Touch"}
        button2={"Learn About CAMAD"}
        button1Link={"/contact"}
        button2Link={"/about"}
      />

      <Footer />
    </>
  )
}