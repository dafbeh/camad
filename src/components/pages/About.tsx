import Image from "next/image"
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import { Footer } from "@/components/Footer"
import { urlFor } from "@/sanity/lib/image"
import * as Icons from "lucide-react";
import { getAbout } from "@/sanity/lib/client"
import { SmallCard, SmallerCard } from "@/components/SmallCard"
import Cta from "@/components/Cta"
import ImageWithSkeleton from "@/components/ImageSkeleton"
import Reveal from "@/components/Reveal"

export const revalidate = 60

export default async function About({ welsh }: { welsh?: boolean }) {
  const language = welsh ? 'cy' : 'en'
  const about = await getAbout(language)

  return (
    <>
      <Navbar background={true} welsh={welsh} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={about?.label1} icon={Icons.Heart} />
        <h1 className="text-foreground text-6xl font-bold font-serif tracking-tight text-center">{about?.header1}</h1>
        <p className="max-w-xl text-center text-foreground/75 text-lg md:px-0 px-5">
          {about?.subheader1}
        </p>
      </header>

      <section className="flex lg:flex-row flex-col gap-10 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-3">
        <div className="flex flex-col gap-4 lg:max-w-xl w-full">
          <h1 className="text-foreground text-4xl lg:max-w-md font-bold font-serif tracking-tight pb-3">
            {about?.header2}</h1>

          <p className="text-foreground/75">{about?.subheader2}</p>

          <p className="text-foreground/75">{about?.subheader3}</p>
        </div>
        <div className="relative aspect-square lg:w-[550px] lg:min-w-[400px] w-full">
          <ImageWithSkeleton
            src={
              urlFor(about.header2Image).width(600).url()
            }
            alt={about?.header2 + " image"}
            fill
            className="object-cover rounded-lg z-2"
          />
          <div className="lg:block hidden absolute -bottom-3 -left-3 z-1 h-full w-full rounded-2xl bg-primary/10 z-0" />
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-[#e6ece8] justify-center items-center w-full sm:pb-20 pb-13 pt-18">
        <Reveal className="flex flex-col gap-8 items-center justify-center w-full">
          <Label text={about?.label2} icon={Icons.RefreshCw} />
          <h1 className="text-foreground text-center text-4xl max-w-lg font-bold font-serif tracking-tight">{about?.header3}</h1>
          <p className="max-w-3xl text-center text-foreground/75 text-md md:px-0 px-3">
            {about?.subheader4}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 sm:px-17 px-3 pt-8 sm:pb-0 pb-5 max-w-7xl items-stretch">

          {about?.cards1.map((card: any, index: number) => (
            <Reveal key={index} delay={index * 0.1}>
              <SmallCard
                title={card.title}
                body={card.body}
                icon={Icons[card.icon as keyof typeof Icons] as any}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-15 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-3">
        <Reveal className="relative aspect-square lg:w-[550px] lg:min-w-[400px] w-full">
          <ImageWithSkeleton
            src={
              urlFor(about.header4Image).width(600).url()
            }
            alt={about?.header4 + " image"}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </Reveal>
        <Reveal className="flex flex-col gap-4 lg:max-w-xl w-full" delay={0.1}>
          <div className="self-start mb-4">
            <Label text={about?.label3} icon={Icons.Coffee} className={"text-orange-700"} />
          </div>
          <h1 className="text-foreground text-4xl lg:max-w-lg font-bold font-serif tracking-tight pb-3">
            {about?.header4}</h1>

          <p className="text-foreground/75">{about?.subheader5}</p>

          <p className="text-foreground/75">{about?.subheader6}</p>
        </Reveal>
      </section>

      <section className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full py-18">
        <Reveal className="flex flex-col gap-8 items-center justify-center w-full">
          <h1 className="text-foreground text-center text-4xl max-w-2xl font-bold font-serif tracking-tight">{about?.header5}</h1>
          <p className="max-w-3xl text-center text-foreground/75 text-md md:px-0 px-5">
            {about?.subheader7}
          </p>
        </Reveal>

        <div className="grid h-full md:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-3 sm:px-17 px-3 pt-8 max-w-7xl items-stretch">
          {about?.cards2.map((card: any, index: number) => (
            <Reveal key={index} delay={index * 0.1}>
              <SmallerCard
                title={card.title}
                body={card.body}
                icon={Icons[card.icon as keyof typeof Icons] as any}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <Cta
        Icon={Icons.MessageCircle}
        header={about?.header6}
        body={about?.subheader8}
        button1={about?.ctaButton?.[0]?.text}
        button2={about?.ctaButton?.[1]?.text}
        button1Link={about?.ctaButton?.[0]?.link}
        button2Link={about?.ctaButton?.[1]?.link}
      />

      <Footer welsh={welsh} />
    </>
  )
}