import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import { Footer } from "@/components/Footer"
import Map from "@/components/Map"
import { Heart, MapPin, Phone, Mail, Clock, UsersRound } from "lucide-react"
import { getContact } from "@/sanity/lib/client"

export default async function Page() {
  const contact = await getContact()

  return (
    <div>
      <Navbar background={true} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"Get in Touch"} icon={Heart} />
        <h1 className="text-foreground sm:text-5xl md:text-6xl text-4xl font-bold font-serif tracking-tight">{contact?.header1}</h1>
        <p className="text-center text-foreground/70 text-lg md:px-0 px-5">
          {contact?.subheader1}
        </p>
      </header>

      <section className="flex lg:flex-row flex-col gap-10 bg-accent/95 justify-center w-full lg:p-18 py-18 px-3">
        <div className="flex flex-col gap-5 lg:max-w-xl w-full">
          <h1 className="text-foreground text-4xl lg:max-w-md font-bold font-serif tracking-tight">{contact?.header2}</h1>
          <p className="text-foreground/70 text-md">
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
                  <p key={line} className="text-sm leading-relaxed text-muted-foreground">
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
                <p className="mt-1 text-sm text-muted-foreground">
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
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {contact?.email1[0]}
                    <span className="ml-2 text-xs text-muted-foreground/60">
                      ({contact?.email1[1]})
                    </span>
                  </a>
                  <a
                    href={`mailto:${contact?.email2[0]}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {contact?.email2[0]}
                    <span className="ml-2 text-xs text-muted-foreground/60">
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
                <div className="mt-1 text-sm text-muted-foreground">
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
        <div className="relative lg:aspect-square aspect-4/2 lg:w-[500px] lg:min-w-[400px] w-full">
          <div className="border-2 h-full w-full rounded-2xl bg-primary/10 flex flex-col gap-1 items-center justify-center">
            <Map />
          </div>
        </div>
      </section >

      <section className="flex flex-col gap-8 bg-[#efebe1] justify-center items-center w-full sm:pb-20 pb-13 pt-18">
        <Label text={"Meet the Team"} icon={UsersRound} />
        <h1 className="text-foreground text-center text-4xl max-w-xl font-bold font-serif tracking-tight">{contact?.header3}</h1>
        <p className="max-w-3xl text-center text-foreground/70 text-md md:px-0 px-3">
          {contact?.subheader3}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 sm:px-17 px-3 pt-8 sm:pb-0 pb-5 max-w-7xl items-stretch">
          {/* Cards */}
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-accent/95 justify-center items-center w-full sm:pb-20 pb-13 pt-18">
        <Label text={"Our Supporters"} icon={Heart} className={"text-orange-700"} />
        <h1 className="text-foreground text-center text-4xl max-w-xl font-bold font-serif tracking-tight">{contact?.header4}</h1>
        <p className="max-w-3xl text-center text-foreground/70 text-md md:px-0 px-3">
          {contact?.subheader4}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 sm:px-17 px-3 pt-2 sm:pb-0 pb-5 max-w-7xl items-stretch">
          {contact?.sponsors.map((sponsor: string) => (
            <p key={sponsor} className="text-center text-foreground/70 text-md md:px-0 px-3">
              {sponsor}
            </p>
          ))}
        </div>

        <p className="max-w-3xl text-center text-foreground/50 text-sm md:px-0 px-3">
          {contact?.footer}
        </p>
      </section>

      <Footer />
    </div >
  )
}