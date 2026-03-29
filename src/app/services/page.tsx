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

export const revalidate = 60

export default async function Services() {
  const service = await getService()

  return (
    <>
      <Navbar background={true} />
      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"Our Services"} icon={Icons.Heart} />
        <h1 className="text-foreground sm:text-5xl md:text-6xl text-4xl text-center font-bold font-serif tracking-tight">{service?.header1}</h1>
        <p className="max-w-2xl text-center text-foreground/70 text-lg md:px-0 px-5">
          {service?.subheader1}
        </p>
      </header>

      <section className="sticky top-[83px] z-40 border-b border-border bg-accent/95 px-6 backdrop-blur-md lg:px-12">
        <div className="mx-auto max-w-6xl md:px-10 px-0">
          <nav className="scrollbar-hide flex gap-1 overflow-x-auto py-3">
            {[
              { label: "Transport", href: "#transport" },
              { label: "Health & Wellbeing", href: "#health" },
              { label: "Community Support", href: "#community" }
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

      <section id="transport" className="flex flex-col bg-accent/95 lg:p-18 pt-18 lg:pb-0 px-3">
        <div className="flex lg:flex-row flex-col gap-15 justify-center items-center w-full">
          <div className="start-self flex flex-col gap-4">
            <Label text={"Transport Services"} icon={Icons.Heart} />
            <div className="flex flex-col gap-4 lg:max-w-lg w-full">
              <h1 className="text-foreground text-4xl lg:max-w-[330px] font-bold font-serif tracking-tight pb-3">
                {service?.header2}</h1>

              <p className="text-foreground/70">{service?.subheader2}</p>

            </div>
          </div>
          <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full z-2">
            <ImageWithSkeleton
              src={urlFor(service?.header2Image).width(600).url()}
              alt="image"
              fill
              className="object-cover rounded-lg z-2"
            />
            <div className="lg:block hidden absolute -bottom-3 -left-3 z-1 h-full w-full rounded-2xl bg-primary/10 z-0" />
          </div>
        </div>

        <div className="flex max-w-6xl w-full mx-auto py-18 grid gap-6 md:grid-cols-2">
          <ServiceCard
            icon={service?.cards1[0].icon}
            title={service?.cards1[0].title}
            description={service?.cards1[0].body}
          />

          <ServiceCard
            icon={service?.cards1[1].icon}
            title={service?.cards1[1].title}
            description={service?.cards1[1].body}
            details={[
              { icon: "PoundSterling", text: service?.cards1[1].price },
              { icon: "Heart", text: service?.cards1[1].extra },
            ]}
          />
        </div>
      </section>

      <section id="health" className="flex flex-col bg-[#e6ece8] w-full lg:p-18 py-18 px-3">
        <div className="flex lg:flex-row flex-col gap-15 justify-center items-center">
          <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full">
            <ImageWithSkeleton
              src={urlFor(service?.header3Image).width(600).url()}
              alt="image"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 lg:max-w-xl w-full">
            <div className="self-start mb-4">
              <Label text={"Health & Wellbeing"} icon={Icons.Heart} />
            </div>
            <h1 className="text-foreground text-4xl lg:max-w-lg font-bold font-serif tracking-tight pb-3">
              {service?.header3}</h1>

            <p className="text-foreground/70">{service?.subheader3}</p>

          </div>
        </div>
        <div className="flex max-w-6xl w-full mx-auto pt-18">
          <div className="grid gap-6 lg:grid-cols-3">
            <ServiceCard
              icon={service?.cards2[0].icon}
              title={service?.cards2[0].title}
              description={service?.cards2[0].body}
              details={[
                { icon: "PoundSterling", text: service?.cards2[0].price },
                { icon: "Clock", text: service?.cards2[0].date },
                { icon: "Phone", text: service?.cards2[0].phone },
              ]}
            />

            <ServiceCard
              icon={service?.cards2[1].icon}
              title={service?.cards2[1].title}
              description={service?.cards2[1].body}
              details={[
                { icon: "Clock", text: service?.cards2[1].date },
                { icon: "Heart", text: service?.cards2[1].extra },
              ]}
              accent
            />

            <ServiceCard
              icon={service?.cards2[2].icon}
              title={service?.cards2[2].title}
              description={service?.cards2[2].body}
              details={[
                { icon: "Clock", text: service?.cards2[2].date },
                { icon: "MapPin", text: service?.cards2[2].location },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="community" className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full sm:pb-20 pb-5 pt-18 lg:px-18">
        <Label text={"Community Support Services"} icon={Icons.UtensilsCrossed} />
        <h1 className="text-foreground text-center text-4xl max-w-2xl font-bold font-serif tracking-tight">{service?.header4}</h1>
        <p className="max-w-3xl text-center text-foreground/70 text-md md:px-0 px-5">
          {service?.subheader4}
        </p>

        <div className="grid gap-3 lg:grid-cols-2 max-w-6xl px-3 xl:px-0">
          <div className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icons.UtensilsCrossed />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {service?.cards3[0].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service?.cards3[0].body}
            </p>

            <div className="mt-6 space-y-3">
              <DetailRow icon={<Icons.PoundSterling className="h-4 w-4" />}>
                {service?.cards3[0].price}
              </DetailRow>
              <DetailRow icon={<Icons.Clock className="h-4 w-4" />}>
                {service?.cards3[0].date}
              </DetailRow>
              <DetailRow icon={<Icons.MapPin className="h-4 w-4" />}>
                {service?.cards3[0].location}
              </DetailRow>
              <DetailRow icon={<Icons.Heart className="h-4 w-4" />}>
                {service?.cards3[0].extra}
              </DetailRow>
            </div>

            <div className="mt-6 rounded-xl bg-muted p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Eligibility includes:
              </p>
              <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
                {service?.cards3?.[0]?.eligibility?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col h-full justify-between gap-3">
            <ServiceCard
              icon={service?.cards3[1].icon}
              title={service?.cards3[1].title}
              description={service?.cards3[1].body}
            />

            <ServiceCard
              icon={service?.cards3[2].icon}
              title={service?.cards3[2].title}
              description={service?.cards3[2].body}
              accent
              grid
              details={[
                { icon: "Users", text: service?.cards3[2].extra },
                { icon: "Clock", text: service?.cards3[2].date },
                { icon: "MapPin", text: service?.cards3[2].location },
                { icon: "PoundSterling", text: service?.cards3[2].price },
              ]}
            />
          </div>
        </div>
      </section>

      <Cta
        Icon={Icons.Phone}
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