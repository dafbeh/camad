import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import { Footer } from "@/components/Footer"
import Map from "@/components/Map"
import { Heart, MapPin, Phone, Mail, Clock, UsersRound } from "lucide-react"
import { getContact } from "@/sanity/lib/client"
import Reveal from "@/components/Reveal"

export const revalidate = 60

export default async function Contact({ welsh }: { welsh?: boolean }) {
  const language = welsh ? 'cy' : 'en'
  const contact = await getContact(language)

  return (
    <div>
      <Navbar background={true} welsh={welsh} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={contact?.label1} icon={Heart} />
        <h1 className="text-foreground sm:text-5xl md:text-6xl text-4xl font-bold font-serif tracking-tight">{contact?.header1}</h1>
        <p className="text-center text-foreground/75 text-lg md:px-0 px-5">
          {contact?.subheader1}
        </p>
      </header>

      <section className="flex lg:flex-row flex-col gap-10 bg-accent/95 justify-center w-full lg:p-18 py-18 px-3">
        <div className="flex flex-col gap-5 lg:max-w-xl w-full">
          <h1 className="text-foreground text-4xl lg:max-w-md font-bold font-serif tracking-tight">{contact?.header2}</h1>
          <p className="text-foreground/75 text-md">
            {contact?.subheader2}
          </p>

          <div className="mt-2 flex flex-col gap-6">
            {/* Location */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-col gap-0">
                <h3 className="font-semibold text-foreground">Our Office</h3>
                {contact.ourOffice.map((line: string) => (
                  <p key={line} className="text-sm leading-relaxed text-foreground/65">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="mt-1 text-sm text-foreground/65">
                  {contact?.phone}
                </p>
              </div>
            </div>

            {/* Emails */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <div className="mt-1 flex flex-col gap-1">
                  <a
                    href={`mailto:${contact?.email1[0]}`}
                    className="text-sm text-foreground/65 transition-colors hover:text-primary"
                  >
                    {contact?.email1[0]}
                    <span className="ml-2 text-xs text-foreground/65/60">
                      ({contact?.email1[1]})
                    </span>
                  </a>
                  <a
                    href={`mailto:${contact?.email2[0]}`}
                    className="text-sm text-foreground/65 transition-colors hover:text-primary"
                  >
                    {contact?.email2[0]}
                    <span className="ml-2 text-xs text-foreground/65/60">
                      ({contact?.email2[1]})
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Opening Hours</h3>
                <div className="mt-1 text-sm text-foreground/65">
                  {contact?.openinghours.map((line: string) => (
                    <p key={line} className="mt-px">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="relative lg:aspect-square aspect-4/2 lg:w-[550px] lg:min-w-[400px] w-full overflow-hidden">
          <div className="border-2 h-full w-full rounded-2xl bg-primary/10 flex flex-col gap-1 items-center justify-center">
            <Map />
          </div>
        </div>
      </section >

      {contact.team &&
        <section className="flex flex-col gap-8 bg-[#e6ece8] justify-center items-center w-full sm:pb-20 pb-13 pt-18">
          <Reveal className="flex flex-col gap-8 items-center justify-center w-full">
            <Label text={contact?.label2} icon={UsersRound} />
            <h1 className="text-foreground text-center text-4xl max-w-xl font-bold font-serif tracking-tight">{contact?.header3}</h1>
            <p className="max-w-3xl text-center text-foreground/75 text-md md:px-0 px-3">
              {contact?.subheader3}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-3 sm:px-20 px-3 pt-8 sm:pb-0 pb-5 max-w-7xl items-stretch">
            {contact.team.map((user: any, index: number) => (
              <Reveal key={user._key} delay={index * 0.1}>
                <div className="group h-full bg-card/90 rounded-2xl border-1 border-primary/20 transition-shadow hover:shadow-md">
                  <div className="flex flex-col gap-2 pb-5">
                    <div className="aspect-[4/5] overflow-hidden rounded-t-2xl">
                      <Image
                        src={urlFor(user.picture).width(600).url()}
                        alt="image"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col px-4 pb-4 gap-1">
                      <div className="my-3">
                        <h3 className="font-semibold text-foreground">{user?.name}</h3>
                        <p className="text-sm font-medium text-primary">{user?.role}</p>
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/75">
                        {user?.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      }

      <section className={`flex flex-col gap-8 justify-center items-center w-full sm:pb-20 pb-13 pt-18 ${contact.team ? "bg-accent/95 " : "bg-[#e6ece8]"}`}>
        <Reveal className="flex flex-col gap-8 items-center justify-center w-full">
          <Label text={contact?.label3} icon={Heart} className={"text-orange-700"} />
          <h1 className="text-foreground text-center text-4xl max-w-xl font-bold font-serif tracking-tight">{contact?.header4}</h1>
          <p className="max-w-3xl text-center text-foreground/75 text-md md:px-0 px-3">
            {contact?.subheader4}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 lg:px-30 md:px-18 px-3 pt-2 sm:pb-0 pb-5 max-w-6xl items-stretch">
          {contact?.sponsors.map((sponsor: any, index: number) => (
            <Reveal key={sponsor._key} delay={index * 0.1}>
              <div className="group h-full bg-card/90 rounded-2xl border-1 border-primary/20 transition-shadow hover:shadow-md">
                <div className="flex flex-col gap-2 pb-5">
                  <div className="aspect-square overflow-hidden rounded-t-2xl">
                    <Image
                      src={
                        sponsor.picture
                          ? urlFor(sponsor.picture).width(600).url()
                          : "/images/camadOffice.png"
                      }
                      alt="image"
                      width={500}
                      height={500}
                      className="h-full w-full object-scale-down transition-transform duration-300 max-w-4/6 mx-auto my-auto select-none"
                    />
                  </div>
                  <div className="flex flex-col px-4 gap-1">
                    <div className="mx-auto">
                      <h3 className="font-medium text-foreground text-center">{sponsor.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="max-w-3xl text-center text-foreground/50 text-sm md:px-0 px-3">
            {contact?.footer}
          </p>
        </Reveal>
      </section>

      <Footer welsh={welsh} />
    </div >
  )
}