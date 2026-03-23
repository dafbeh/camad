import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import { Footer } from "@/components/Footer"
import Map from "@/components/Map"
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Page() {
  return (
    <div>
      <Navbar background={true} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"Get in Touch"} icon={Heart} />
        <h1 className="text-foreground sm:text-5xl md:text-6xl text-4xl font-bold font-serif tracking-tight">Contact Us</h1>
        <p className="text-center text-foreground/70 text-lg md:px-0 px-5">
          Pop in for a cup of tea and a chat. We would love to hear from you.
        </p>
      </header>

      <section className="flex lg:flex-row flex-col gap-10 bg-accent/95 justify-center w-full lg:p-18 py-18 px-3">
        <div className="flex flex-col gap-5 lg:max-w-xl w-full">
          <h1 className="text-foreground text-4xl lg:max-w-md font-bold font-serif tracking-tight">How to reach us</h1>
          <p className="text-foreground/70 text-md">Whether you want to volunteer, need support, or just fancy a chat, we are here for you. Pop in, give us a call, or send an email.</p>

          <div className="mt-2 flex flex-col gap-6">
            {/* Location */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Our Office</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Camad Office<br />
                  Care Centre<br />
                  Machynlleth, Powys<br />
                  SY20 8EQ
                </p>
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
                  01654 700071
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
                    href="mailto:info@camad.org.uk"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    info@camad.org.uk
                    <span className="ml-2 text-xs text-muted-foreground/60">
                      (General enquiries)
                    </span>
                  </a>
                  <a
                    href="mailto:transport@camad.org.uk"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    office@camad.org.uk
                    <span className="ml-2 text-xs text-muted-foreground/60">
                      (Office enquiries)
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
                  <p>Monday to Friday: 9:00am - 4:30pm</p>
                  <p className="mt-1 text-muted-foreground">
                    Closed on weekends and bank holidays
                  </p>
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

      <Footer />
    </div >
  )
}