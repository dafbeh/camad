import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"

interface CtaProps {
  Icon?: LucideIcon,
  header: string,
  body: string,
  button1: string,
  button2: string,
  button1Link: string,
  button2Link: string,
}

export default function Cta({ Icon, header, body, button1, button2, button1Link, button2Link } : CtaProps) {
  return (
    <section>
      <div className="flex w-full bg-accent/95 lg:p-18 p-3 py-18">
        <div className="text-center mx-auto max-w-5xl bg-primary rounded-2xl pt-18 pb-18 sm:px-18 px-3 xl:min-w-4xl">
          <div className="flex flex-col gap-5">
            {Icon && <Icon className="mx-auto text-card/80" size={40} /> }
            <h1 className="text-card font-serif font-semibold tracking-tight sm:text-4xl text-3xl">{ header }</h1>
            <p className="text-accent/80 font-sans sm:text-md text-sm mx-auto max-w-xl">{ body }</p>

            <div className="flex sm:flex-row flex-col mt-5 mx-auto items-center gap-4">
              <Link
                href={ button1Link }
                className="rounded-full bg-card/90 sm:px-8 sm:py-3.5 px-10 py-3 text-base font-base text-foreground font-semibold
                  shadow-lg transition-all hover:bg-card/80 hover:shadow-xl flex gap-2 items-center"
              >
                { button1 } <ArrowRight size={18} className="text-foreground/90" />
              </Link>
              <Link
                href={ button2Link }
                className="rounded-full border border-card/30 bg-card/10 sm:px-8 sm:py-3.5 px-5 py-3 text-base font-base 
                  text-card backdrop-blur-sm transition-all hover:bg-card/20"
              >
                { button2 }
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}