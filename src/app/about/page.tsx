import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import { Footer } from "@/components/Footer"
import { urlFor } from "@/sanity/lib/image"
import { Heart, RefreshCw, HandHelping, UsersRound, 
  Coffee, MessageCircle, ArrowRight, Briefcase, Smile } from "lucide-react";
import { getAbout } from "@/sanity/lib/client"
import { SmallCard, SmallerCard } from "@/components/SmallCard"

export default async function About() {
  const about = await getAbout()

  return (
    <>
      <Navbar background={true} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"Since 1998"} icon={Heart} />
        <h1 className="text-foreground text-6xl font-bold font-serif tracking-tight">{about?.header1}</h1>
        <p className="max-w-xl text-center text-foreground/70 text-lg md:px-0 px-5">
          {about?.subheader1}
        </p>
      </header>

      <section className="flex lg:flex-row flex-col gap-10 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-10">
        <div className="flex flex-col gap-4 lg:max-w-xl w-full">
          <h1 className="text-foreground text-4xl lg:max-w-md font-bold font-serif tracking-tight pb-3">
            {about?.header2}</h1>

          <p className="text-foreground/70">{about?.subheader2}</p>

          <p className="text-foreground/70">{about?.subheader3}</p>
        </div>
        <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full">
          <Image
            src={
              about?.header2Image
                ? urlFor(about.header2Image).width(600).url()
                : "/images/15.jpg"
            }
            alt="image"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-[#efebe1] justify-center items-center w-full sm:pb-20 pb-5 pt-20">
        <Label text={"A cycle of giving"} icon={RefreshCw} />
        <h1 className="text-foreground text-center text-4xl max-w-lg font-bold font-serif tracking-tight">{about?.header3}</h1>
        <p className="max-w-3xl text-center text-foreground/70 text-md md:px-0 px-5">
          {about?.subheader4}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 sm:px-17 px-5 pt-8 max-w-7xl items-stretch">
          <SmallCard
            title={about?.cardT1}
            body={about?.cardB1}
            icon={HandHelping}
          />
          <SmallCard
            title={about?.cardT2}
            body={about?.cardB2}
            icon={UsersRound}
          />
          <SmallCard
            title={about?.cardT3}
            body={about?.cardB3}
            icon={Heart}
          />
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-15 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-10">
        <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full">
          <Image
            src={
              about?.header4Image
                ? urlFor(about.header4Image).width(600).url()
                : "/images/camadOffice.png"
            }
            alt="image"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-4 lg:max-w-xl w-full">
          <div className="self-start mb-4">
            <Label text={"Come say hello"} icon={Coffee} className={"text-orange-700"} />
          </div>
          <h1 className="text-foreground text-4xl lg:max-w-lg font-bold font-serif tracking-tight pb-3">
            {about?.header4}</h1>

          <p className="text-foreground/70">{about?.subheader5}</p>

          <p className="text-foreground/70">{about?.subheader6}</p>
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full sm:pb-20 pb-5 pt-20">
        <h1 className="text-foreground text-center text-4xl max-w-2xl font-bold font-serif tracking-tight">{about?.header5}</h1>
        <p className="max-w-3xl text-center text-foreground/70 text-md md:px-0 px-5">
          {about?.subheader7}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-3 sm:px-17 px-5 pt-8 max-w-7xl items-stretch">
          <SmallerCard
            title={about?.miniCardT1}
            body={about?.miniCardB1}
            icon={Heart}
          />
          <SmallerCard
            title={about?.miniCardT2}
            body={about?.miniCardB2}
            icon={RefreshCw}
          />
          <SmallerCard
            title={about?.miniCardT3}
            body={about?.miniCardB3}
            icon={Briefcase}
          />
          <SmallerCard
            title={about?.miniCardT4}
            body={about?.miniCardB2}
            icon={Smile}
          />
        </div>
      </section>

      <section>
        <div className="flex w-full bg-accent/95 lg:p-18 p-3">
          <div className="text-center mx-auto max-w-5xl bg-primary rounded-2xl pt-15 pb-15 sm:px-18 px-3">
            <div className="flex flex-col gap-5">
              <MessageCircle className="mx-auto text-card/80" size={40} />
              <h1 className="text-card font-serif font-semibold tracking-tight sm:text-4xl text-3xl">Not sure where to start? Neither are most people.</h1>
              <p className="text-accent/80 font-sans sm:text-md text-sm mx-auto max-w-xl">Pop in, have a cup of tea, and let us know what is going on with you and where
                you want to go. We will do our best to get you there.</p>

              <div className="flex sm:flex-row flex-col mt-5 mx-auto items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-card/90 sm:px-8 sm:py-3.5 px-10 py-3 text-base font-base text-foreground font-semibold
                  shadow-lg transition-all hover:bg-card/80 hover:shadow-xl flex gap-2 items-center"
                >
                  Get in Touch <ArrowRight size={18} className="text-foreground/90" />
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-card/30 bg-card/10 sm:px-8 sm:py-3.5 px-5 py-3 text-base font-base 
                  text-card backdrop-blur-sm transition-all hover:bg-card/20"
                >
                  Browse Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}