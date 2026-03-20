import Image from "next/image"
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import { Footer } from "@/components/Footer"
import { Heart, Calendar, ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <>
      <Navbar background={true} />

      <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
        <Label text={"News & Stories"} icon={Heart} />
        <h1 className="text-foreground text-6xl font-bold font-serif tracking-tight">Community Updates</h1>
        <p className="max-w-2xl text-center text-foreground/70 text-lg md:px-0 px-5">
          Stories, events, and news from CAMAD and the Machynlleth community.
        </p>
      </header>

      <section className="flex bg-accent/95 justify-center w-full lg:p-18 py-18 px-3">
        <div className="select-none h-full flex lg:flex-row flex-col gap-10 cursor-pointer group">
          <div className="my-auto relative aspect-[6/4] lg:w-[500px] lg:min-w-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src={
                "/images/15.jpg"
              }
              alt="image"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                EVENTS
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                March 20th 2026
              </span>
            </div>
            <div className="lg:max-w-lg max-w-full flex flex-col h-full gap-2">
              <h2 className="text-foreground group-hover:text-primary text-5xl font-bold font-serif tracking-tight leading-14">
                Nunc ac erat
              </h2>
              <p className="text-foreground/70 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rhoncus mollis. Etiam semper mauris et tortor lobortis euismod. Fusce sollicitudin ultrices justo, ut faucibus ligula consectetur id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rhoncus mollis. Etiam semper mauris et tortor lobortis euismod. Fusce sollicitudin ultrices justo, ut faucibus ligula consectetur id. </p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary">
              Read full story
              <ArrowRight className="h-4 w-4 mt-px transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efebe1] w-full sm:pb-20 pb-13 pt-18">
        <div className="flex max-w-6xl mx-auto">
          <h1 className="text-foreground text-center text-4xl max-w-lg font-bold font-serif tracking-tight">Recent Stories</h1>
        </div>
      </section >

      <Footer />
    </>
  )
}