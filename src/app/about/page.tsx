import Image from "next/image"
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import { Footer } from "@/components/Footer"
import { urlFor } from "@/sanity/lib/image"
import { Heart, RefreshCw } from "lucide-react";
import { getAbout } from "@/sanity/lib/client"

export default async function About() {
  const about = await getAbout()

  return (
    <>
      <Navbar background={true} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"Since 1998"} icon={Heart} />
        <h1 className="text-foreground text-6xl font-bold font-serif tracking-tight">{about?.header1}</h1>
        <p className="max-w-xl text-center font-sans text-foreground/70 text-lg md:px-0 px-5">
          {about?.subheader1}
        </p>
      </header>

      <section className="flex lg:flex-row flex-col gap-10 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-10">
        <div className="flex flex-col gap-4 lg:max-w-lg w-full">
          <h1 className="text-foreground text-4xl lg:max-w-md font-bold font-serif tracking-tight pb-3">
            {about?.header2}</h1>

          <p className="font-sans text-foreground/70">{about?.subheader2}</p>

          <p className="font-sans text-foreground/70">{about?.subheader3}</p>
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

      <section>
        <header className="flex flex-col gap-8 bg-[#efebe1] justify-center items-center w-full pb-20 pt-20">
          <Label text={"A cycle of giving"} icon={RefreshCw} />
          <h1 className="text-foreground text-center text-4xl max-w-lg font-bold font-serif tracking-tight">{about?.header3}</h1>
          <p className="max-w-3xl text-center font-sans text-foreground/70 text-md md:px-0 px-5">
            {about?.subheader4}
          </p>
        </header>
      </section>

      <Footer />
    </>
  )
}