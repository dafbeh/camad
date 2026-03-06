import Image from "next/image"
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import { Heart, RefreshCw } from "lucide-react";


export default function About() {
  return (
    <>
      <Navbar background={true} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"Since 1998"} icon={Heart} />
        <h1 className="text-foreground text-6xl font-bold font-serif tracking-tight">What We Do</h1>
        <p className="max-w-xl text-center font-sans text-foreground/70 text-lg md:px-0 px-5">
          Providing community support and acting as a hub for volunteering in Machynlleth and district.
        </p>
      </header>

      <section className="flex lg:flex-row flex-col gap-10 bg-accent/95 justify-center items-center w-full lg:p-18 py-18 px-10">
        <div className="flex flex-col gap-4 lg:max-w-lg w-full">
          <h1 className="text-foreground text-4xl lg:max-w-md font-bold font-serif tracking-tight pb-3">
            Nurturing a strong, healthy and inclusive community</h1>

          <p className="font-sans text-foreground/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu orci nunc. Vestibulum in nulla id libero faucibus elementum at non metus. Quisque elementum magna vitae ipsum porta, vitae molestie nisl dictum. Vestibulum mauris libero, aliquam sed diam sit.</p>

          <p className="font-sans text-foreground/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae tortor vel quam semper sodales at sodales metus. Maecenas in eleifend purus. Aliquam molestie nunc id massa commodo interdum. Mauris sodales maximus pellentesque. Ut hendrerit risus quam, non ornare.</p>
        </div>
        <div className="relative aspect-square lg:w-[500px] lg:min-w-[400px] w-full">
          <Image
            src="/images/15.jpg"
            alt="image"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section>
        <header className="flex flex-col gap-8 bg-[#efebe1] justify-center items-center w-full pb-20 pt-20">
          <Label text={"A cycle of giving"} icon={RefreshCw} />
          <h1 className="text-foreground text-center text-4xl max-w-lg font-bold font-serif tracking-tight">Community work and volunteering, hand in hand</h1>
          <p className="max-w-3xl text-center font-sans text-foreground/70 text-md md:px-0 px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus eros tortor, vel commodo risus commodo eu. Nunc suscipit nulla non odio posuere tincidunt. Cras sit amet.
          </p>
        </header>
      </section>

    </>
  )
}