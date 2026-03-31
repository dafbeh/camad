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

export const revalidate = 60

export default async function About({ welsh } : {welsh?: boolean}) {
  const language = welsh ? 'cy' : 'en'
  const about = await getAbout(language)

  return (
    <>
      <Navbar background={true} welsh={welsh} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"Since 1998"} icon={Icons.Heart} />
        <h1 className="text-foreground text-6xl font-bold font-serif tracking-tight">{about?.header1}</h1>
        <p className="max-w-xl text-center text-foreground/70 text-lg md:px-0 px-5">
          {about?.subheader1}
        </p>
      </header>

      <section className="flex lg:flex-row flex-col gap-10 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-3">
        <div className="flex flex-col gap-4 lg:max-w-xl w-full">
          <h1 className="text-foreground text-4xl lg:max-w-md font-bold font-serif tracking-tight pb-3">
            {about?.header2}</h1>

          <p className="text-foreground/70">{about?.subheader2}</p>

          <p className="text-foreground/70">{about?.subheader3}</p>
        </div>
        <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full">
          <ImageWithSkeleton
            src={
              urlFor(about.header2Image).width(600).url()
            }
            alt="image"
            fill
            className="object-cover rounded-lg z-2"
          />
          <div className="lg:block hidden absolute -bottom-3 -left-3 z-1 h-full w-full rounded-2xl bg-primary/10 z-0" />
        </div>
      </section>
      
      <section className="flex flex-col gap-8 bg-[#e6ece8] justify-center items-center w-full sm:pb-20 pb-13 pt-18">
        <Label text={"A cycle of giving"} icon={Icons.RefreshCw} />
        <h1 className="text-foreground text-center text-4xl max-w-lg font-bold font-serif tracking-tight">{about?.header3}</h1>
        <p className="max-w-3xl text-center text-foreground/70 text-md md:px-0 px-3">
          {about?.subheader4}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 sm:px-17 px-3 pt-8 sm:pb-0 pb-5 max-w-7xl items-stretch">
          <SmallCard
            title={about?.cards1[0].title}
            body={about?.cards1[0].body}
            icon={Icons[about?.cards1[0].icon as keyof typeof Icons] as any}
          />
          <SmallCard
            title={about?.cards1[1].title}
            body={about?.cards1[1].body}
            icon={Icons[about?.cards1[1].icon as keyof typeof Icons] as any}
          />
          <SmallCard
            title={about?.cards1[2].title}
            body={about?.cards1[2].body}
            icon={Icons[about?.cards1[2].icon as keyof typeof Icons] as any}
          />
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-15 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-3">
        <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full">
          <ImageWithSkeleton
            src={
              urlFor(about.header4Image).width(600).url()
            }
            alt="image"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-4 lg:max-w-xl w-full">
          <div className="self-start mb-4">
            <Label text={"Come say hello"} icon={Icons.Coffee} className={"text-orange-700"} />
          </div>
          <h1 className="text-foreground text-4xl lg:max-w-lg font-bold font-serif tracking-tight pb-3">
            {about?.header4}</h1>

          <p className="text-foreground/70">{about?.subheader5}</p>

          <p className="text-foreground/70">{about?.subheader6}</p>
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full sm:pb-20 pb-5 pt-18">
        <h1 className="text-foreground text-center text-4xl max-w-2xl font-bold font-serif tracking-tight">{about?.header5}</h1>
        <p className="max-w-3xl text-center text-foreground/70 text-md md:px-0 px-5">
          {about?.subheader7}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-3 sm:px-17 px-3 pt-8 max-w-7xl items-stretch">
          <SmallerCard
            title={about?.cards2[0].title}
            body={about?.cards2[0].body}
            icon={Icons[about?.cards2[0].icon as keyof typeof Icons] as any}
          />
          <SmallerCard
            title={about?.cards2[1].title}
            body={about?.cards2[1].body}
            icon={Icons[about?.cards2[1].icon as keyof typeof Icons] as any}
          />
          <SmallerCard
            title={about?.cards2[2].title}
            body={about?.cards2[2].body}
            icon={Icons[about?.cards2[2].icon as keyof typeof Icons] as any}
          />
          <SmallerCard
            title={about?.cards2[3].title}
            body={about?.cards2[3].body}
            icon={Icons[about?.cards2[3].icon as keyof typeof Icons] as any}
          />
        </div>
      </section>

      <Cta
        Icon={Icons.MessageCircle}
        header={"Not sure where to start? Neither are most people."}
        body={"Pop in, have a cup of tea, and let us know what is going on with you and where you want to go. We will do our best to get you there."}
        button1={"Get in Touch"}
        button2={"Browse Opportunities"}
        button1Link={"/contact"}
        button2Link={"/services"}
      />

      <Footer />
    </>
  )
}