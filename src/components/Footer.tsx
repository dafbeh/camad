import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

export function Footer({ welsh }: { welsh?: boolean }) {
  return (
    <footer>
      <div className="w-full bg-foreground">
        <div className="max-w-7xl px-5 lg:px-15 py-2 mx-auto">
          <div className="grid gap-11 md:grid-cols-3 pt-16 pb-10">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <Link href={welsh ? "/cy" : "/"} className="flex w-full h-full items-center justify-center group">
                <div className="lg:w-5/6 h-full w-full flex items-center justify-center bg-gray-800/10 shadow-xl rounded-lg">
                  <Image
                    src="/CAMAD/WhiteLogo.svg"
                    alt="The charming high street of Machynlleth, Wales, with its colorful buildings and iconic clock tower"
                    width={500}
                    height={500}
                    priority
                    className="object-contain w-5/6 lg:-translate-x-3 md:-translate-x-2 sm:-translate-x-4 -translate-x-2 group-hover:scale-105 duration-200 "
                  />
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-card/40 tracking-wider">{welsh ? "DOLENNI CYNNYDD" : "QUICK LINKS"}</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: welsh ? "Amdanom" : "About", href: "/about" },
                  { label: welsh ? "Gwasanaethau" : "Services", href: "/services" },
                  { label: welsh ? "Newyddion" : "News", href: "/news" },
                  { label: welsh ? "Cyswllt" : "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background/40">
                {welsh ? "CYSWLLTWCH Â NI" : "GET IN TOUCH"}
              </h3>
              <div className="flex flex-col">
                <p className="text-sm leading-relaxed text-background/60 font-semibold">
                  {welsh ? "Drysau ar agor o ddydd Mawrth i ddydd Gwener." :
                    "Doors open Tuesday to Friday."}
                </p>
                <div className="flex flex-col gap-2 mt-3 text-sm text-background/60">
                  {welsh ? (
                    <>
                      <p>Dydd Mawrth — Dydd Iau: 9:30am - 3:00pm</p>
                      <p>Dydd Gwener: 9:30am - 2:00pm</p>
                    </>
                  ) : (
                    <>
                      <p>Tuesday — Thursday: 9:30am - 3:00pm</p>
                      <p>Friday: 9:30am - 2:00pm</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full h-[1px] mx-auto border-background/10" />

          <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 w-full sm:justify-between text-card/40 text-sm pt-8 pb-12">
            <p>{new Date().getFullYear()} {welsh ? "CAMAD. Pob hawl wedi’i harchebu." : "CAMAD. All rights reserved."}</p>
            {welsh ? (
              <>
                <p className="flex gap-2 items-center">
                  Wedi greu gyda <Heart size={15} className="text-red-500" />yn Machynlleth
                </p>
              </>
            ) :
              (
                <>
                  <p className="flex gap-2 items-center">
                    Made with <Heart size={15} className="text-red-500" />in Machynlleth
                  </p>
                </>
              )}
          </div>
        </div>
      </div>
    </footer>
  )
}