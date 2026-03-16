import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Label from "@/components/Label"
import { Heart, Phone, Car, CreditCard, PoundSterling, Footprints, Clock, Users, MapPin, Coffee } from "lucide-react"
import Cta from "@/components/Cta"
import { ServiceCard, DetailRow } from "@/components/ServiceCard"

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
              className="object-cover rounded-lg z-2"
            />
            <div className="lg:block hidden absolute -bottom-3 -left-3 z-1 h-full w-full rounded-2xl bg-primary/10 z-0" />
          </div>
        </div>

        <div className="flex max-w-6xl w-full mx-auto py-18 grid gap-6 md:grid-cols-2">
          <ServiceCard
            icon={<Car className="h-6 w-6" />}
            title="Community Car"
            description="Volunteer drivers use their own vehicles to transport people who do not have access to suitable transport. This service is primarily for health-related appointments, such as hospital visits, eye tests, and other essential journeys."
          />
          <ServiceCard
            icon={<CreditCard className="h-6 w-6" />}
            title="Taxi Card Scheme"
            description="The Taxi Card Scheme provides subsidised taxi fares for older people and those living with disabilities."
            details={[
              { icon: <PoundSterling className="h-4 w-4" />, text: "Annual membership: £9" },
              { icon: <Heart className="h-4 w-4" />, text: "Members receive £50 worth of taxi vouchers" },
            ]}
          />
        </div>
      </section>

      <section id="health" className="flex flex-col bg-[#efebe1] w-full lg:p-18 py-18 px-3">
        <div className="flex lg:flex-row flex-col gap-15 justify-center items-center">
          <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full">
            <Image
              src={"/images/camadOffice.png"}
              alt="image"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 lg:max-w-xl w-full">
            <div className="self-start mb-4">
              <Label text={"Health & Wellbeing"} icon={Heart} />
            </div>
            <h1 className="text-foreground text-4xl lg:max-w-lg font-bold font-serif tracking-tight pb-3">
              Caring for body and mind</h1>

            <p className="text-foreground/70">From foot care to mental health support, we offer services that nurture the whole person.</p>

          </div>
        </div>
        <div className="flex max-w-6xl w-full mx-auto pt-18">
          <div className="grid gap-6 lg:grid-cols-3">
            <ServiceCard
              icon={<Footprints className="h-6 w-6" />}
              title="Foot Care Clinic"
              description="Run by trained volunteers, the clinic provides basic foot care, nail cutting, and advice on suitable footwear. Healthy feet help reduce the risk of falls and mobility problems."
              details={[
                { icon: <PoundSterling className="h-4 w-4" />, text: "Small charge per session" },
                { icon: <Clock className="h-4 w-4" />, text: "Every second Thursday, 9:30am – 12:00pm" },
                { icon: <Phone className="h-4 w-4" />, text: "Appointment required" },
              ]}
            />
            <ServiceCard
              icon={<Coffee className="h-6 w-6" />}
              title="Tuesday Drop-In"
              description="A supportive drop-in session for anyone experiencing mental health or wellbeing challenges including anxiety, depression, OCD, or addiction. A relaxed lounge environment with tea, biscuits, soft music, and informal activities like art and music."
              details={[
                { icon: <Clock className="h-4 w-4" />, text: "Tuesdays: 1:00pm – 3:00pm" },
                { icon: <Heart className="h-4 w-4" />, text: "Funded by The Tudor Trust" },
              ]}
              accent
            />
            <ServiceCard
              icon={<Users className="h-6 w-6" />}
              title="Women's Support Group"
              description="A weekly group providing a welcoming space for local women to meet, talk and support one another. The group offers the chance to meet others, share knowledge and skills, and enjoy conversation over tea or coffee."
              details={[
                { icon: <Clock className="h-4 w-4" />, text: "Wednesdays: 10:00am – 12:00pm" },
                { icon: <MapPin className="h-4 w-4" />, text: "The Warren Room, Care Centre" },
              ]}
            />
          </div>
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