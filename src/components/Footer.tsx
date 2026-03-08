import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer>
      <div className="w-full bg-foreground">
        <div className="max-w-7xl px-5 lg:px-15 py-2 mx-auto">
          <div className="grid gap-11 md:grid-cols-3 pt-16 pb-10">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-3 text-card select-none">
                <div className="bg-primary rounded-full w-5 h-5 p-5 flex items-center justify-center">
                  <span className="text-lg font-bold tracking-tight text-primary-foreground">C</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight">CAMAD</span>
                </div>
              </Link>
              <p className="text-card/60 text-sm">
                Community Action Machynlleth & District. Volunteering and community support since 1998.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-card/40 tracking-wider">QUICK LINKS</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Volunteer", href: "/volunteer" },
                  { label: "Contact", href: "/contact" },
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
                Get in Touch
              </h3>
              <div className="flex flex-col">
                <p className="text-sm leading-relaxed text-background/60">
                  Pop in for a cup of tea and a chat. We would love to hear from you.
                </p>
                <div className="flex flex-col gap-2 mt-3 text-sm text-background/30">
                  <p>Tuesday — Thursday: 9:30am - 3:00pm</p>
                  <p>Friday: 9:30am - 2:00pm</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full h-[1px] mx-auto border-background/10" />

          <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 w-full sm:justify-between text-card/40 text-sm pt-8 pb-12">
            <p>2026 CAMAD. All rights reserved.</p>
            <p className="flex gap-2 items-center">Made with <Heart size={15} className="text-red-500" />in Machynlleth</p>
          </div>

        </div>
      </div>
    </footer>
  )
}