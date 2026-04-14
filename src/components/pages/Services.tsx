import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Label from "@/components/Label"
import * as Icons from "lucide-react";
import Cta from "@/components/Cta"
import { ServiceCard, DetailRow } from "@/components/ServiceCard"
import { getService } from "@/sanity/lib/client"
import ImageWithSkeleton from "@/components/ImageSkeleton"
import { urlFor } from "@/sanity/lib/image"
import Reveal from "@/components/Reveal"
import { SupportCard } from "@/components/SupportCard"

export const revalidate = 60

export default async function Services({ welsh } : {welsh?: boolean}) {
  const language = welsh ? 'cy' : 'en'
  const service = await getService(language)

  return (
    <>
      <Navbar background={true} welsh={welsh} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={service?.label1} icon={Icons.Heart} />
        <h1 className="text-foreground md:text-6xl text-5xl text-center font-bold font-serif tracking-tight p-3 text-center">{service?.header1}</h1>
        <p className="max-w-2xl text-center text-foreground/75 text-lg md:px-0 px-5">
          {service?.subheader1}
        </p>
      </header>

      <section className="sticky sm:top-[95px] top-[83px] z-40 border-b border-border bg-accent/95 px-6 backdrop-blur-md lg:px-12">
        <div className="mx-auto max-w-6xl md:px-10 px-0">
          <nav className="scrollbar-hide flex gap-1 overflow-x-auto py-3">
            {[
              { label: "Transport", href: "#transport" },
              { label: "Health & Wellbeing", href: "#health" },
              { label: "Community Support", href: "#community" },
              { label: "Local Support", href: "#localsupport" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-foreground/65 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="transport" className="flex flex-col bg-accent/95 lg:p-18 pt-8 lg:pb-0 px-3">
        <div className="flex lg:flex-row flex-col lg:gap-15 gap-6 justify-center items-center w-full">
          <div className="start-self flex flex-col lg:gap-4 gap-8">
            <Label text={service?.label2} icon={Icons.Heart} />
            <div className="flex flex-col lg:gap-3 gap-8 lg:max-w-xl w-full">
              <h1 className="text-foreground text-4xl lg:max-w-[450px] font-bold font-serif tracking-tight lg:pb-3">
                {service?.header2}</h1>

              <p className="text-foreground/75 lg:pb-5 pb-2">{service?.subheader2}</p>
              {service?.cards1.length < 2 && service?.cards1.map((card: {
                icon: string, title: string, body: string, details?:
                { icon: string, text: string }[]
              }, index: number) => (
                <ServiceCard key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.body}
                  details={card.details}
                />
              ))}

            </div>
          </div>
          <div className="relative aspect-square lg:w-[550px] lg:min-w-[400px] w-full z-2">
            <ImageWithSkeleton
              src={urlFor(service?.header2Image).width(600).url()}
              alt="transport service image"
              fill
              className="object-cover rounded-lg z-2"
            />
            <div className="lg:block hidden absolute -bottom-3 -left-3 z-1 h-full w-full rounded-2xl bg-primary/10 z-0" />
          </div>
        </div>

        <div className="flex pb-18">
          {service?.cards1.length >= 2 &&
            <div className="flex max-w-6xl w-full mx-auto pt-18 grid gap-6 md:grid-cols-2">
              {service?.cards1.map((card: {
                icon: string, title: string, body: string, details?:
                { icon: string, text: string }[]
              }, index: number) => (
                <ServiceCard key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.body}
                  details={card.details}
                />
              ))}
            </div>
          }
        </div>
      </section>

      <section id="health" className="flex flex-col bg-[#e6ece8] w-full lg:p-18 py-18 px-3">
        <Reveal className="flex lg:flex-row flex-col lg:gap-15 gap-8 justify-center items-center">
          <div className="relative aspect-square lg:w-[550px] lg:min-w-[400px] w-full">
            <ImageWithSkeleton
              src={urlFor(service?.header3Image).width(600).url()}
              alt="health and wellbeing service image"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col lg:gap-4 gap-8 lg:max-w-xl w-full">
            <div className="self-start lg:mb-4">
              <Label text={service?.label3} icon={Icons.Heart} />
            </div>
            <h1 className="text-foreground text-4xl lg:max-w-lg font-bold font-serif tracking-tight lg:pb-3">
              {service?.header3}</h1>

            <p className="text-foreground/75">{service?.subheader3}</p>

          </div>
        </Reveal>
        <div className="flex max-w-[1285px] w-full mx-auto lg:pt-18 pt-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {service?.cards2.map((card: {
              icon: string, title: string, body: string, details?:
              { icon: string, text: string }[]
            }, index: number) => (
              <Reveal key={index} className="flex h-full" delay={index * 0.1}>
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  description={card.body}
                  details={card.details}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="flex flex-col gap-8 bg-accent/95 justify-center items-center w-full sm:pb-20 pb-18 pt-18 lg:px-18">
        <Reveal className="flex flex-col gap-8 justify-center items-center w-full">
          <Label text={service?.label4} icon={Icons.UtensilsCrossed} />
          <h1 className="text-foreground text-center text-4xl max-w-2xl font-bold font-serif tracking-tight">{service?.header4}</h1>
          <p className="max-w-3xl text-center text-foreground/75 text-md md:px-0 px-5">
            {service?.subheader4}
          </p>
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-2 max-w-[1285px] px-3 xl:px-0">
          <Reveal className="flex h-full" delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icons.UtensilsCrossed />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {service?.cards3[0].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                {service?.cards3[0].body}
              </p>

              <div className="mt-6 space-y-3">
                {service?.cards3[0].details?.map((detail: { icon: string, text: string }, index: number) => {
                  const IconComponent =
                    (Icons as unknown as Record<string, React.ComponentType<any>>)[detail.icon] || Icons.Heart;

                  return (
                    <DetailRow key={index} icon={<IconComponent className="h-4 w-4" />}>
                      {detail.text}
                    </DetailRow>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl bg-muted p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/65">
                  Eligibility includes:
                </p>
                <ul className="mt-2 grid gap-1 text-sm text-foreground/65">
                  {service?.eligibility?.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col h-full justify-between gap-3">
            {service?.cards3.splice(1).map((card: {
              icon: string, title: string, body: string, details?:
              { icon: string, text: string }[]
            }, index: number) => (
              <Reveal key={index} className="flex h-full" delay={index * 0.1}>
                <ServiceCard key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.body}
                  details={card.details}
                  grid
                />
              </Reveal>
            ))}
          </div>

        </div>
        {service.cards3.length > 3 &&
          <div className="grid gap-3 -mt-4 lg:grid-cols-2 max-w-6xl px-3 xl:px-0">
            {service?.cards3.splice(3).map((card: {
              icon: string, title: string, body: string, details?:
              { icon: string, text: string }[]
            }, index: number) => (
              <Reveal key={index} className="flex h-full" delay={index * 0.1}>
                <ServiceCard key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.body}
                  details={card.details}
                  grid
                />
              </Reveal>
            ))}
          </div>
        }
      </section>

      <section id="localsupport" className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full sm:pb-20 pb-18 pt-18 lg:px-18 px-3">
        <Reveal className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full">
          <Label text={service?.label5} icon={Icons.Handshake} />
          <h1 className="text-foreground text-center text-4xl max-w-2xl font-bold font-serif tracking-tight">{service?.header5}</h1>
          <p className="max-w-3xl text-center text-foreground/75 text-md md:px-0 px-5">
            {service?.subheader5}
          </p>
        </Reveal>

        <div className="flex w-full mx-auto max-w-[1285px]">
          <div className="grid gap-6 xl:grid-cols-3 md:grid-cols-2">
            {service.cards4 && service?.cards4.map((card: {
              image: string, name: string, about: string, isLink?: boolean, details?:
              { icon: string, text: string, isLink?: boolean }[]
            }, index: number) => (
              <Reveal key={index} delay={index * 0.1}>
                <SupportCard
                  image={urlFor(card.image).width(600).url()}
                  title={card.name}
                  description={card.about}
                  details={card.details}
                  isLink={card.isLink}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta
        Icon={Icons.Phone}
        header={service?.header6}
        body={service?.subheader6}
        button1={service?.ctaButton?.[0]?.text}
        button2={service?.ctaButton?.[1]?.text}
        button1Link={service?.ctaButton?.[0]?.link}
        button2Link={service?.ctaButton?.[1]?.link}
      />

      <Footer welsh={welsh} />
    </>
  )
}