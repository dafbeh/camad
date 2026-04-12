"use client";

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar({ background = false, welsh = false }: {
  background?: boolean
  welsh?: boolean
}) {
  const navLinks = welsh ? [
    { label: "Amdanom", href: "/cy/about" },
    { label: "Gwasanaethau", href: "/cy/services" },
    { label: "Newyddion", href: "/cy/news" },
    { label: "Cyswllt", href: "/cy/contact" },
  ] : [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ]

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const pathname = usePathname();

  const englishPath = pathname.startsWith("/cy")
    ? pathname.replace(/^\/cy/, "") || "/"
    : pathname;

  const welshPath = pathname.startsWith("/cy")
    ? pathname
    : `/cy${pathname === "/" ? "" : pathname}`;

  return (
    <div className={`top-0 left-0 w-full z-50 
        ${background ? "sticky top-0 z-50 border-b border-border bg-accent/95 backdrop-blur-md" : "absolute"}`}>
      <div className="mx-auto flex max-w-6xl w-full justify-between items-center py-5 lg:px-12 px-5">

        {/* Left */}
        <Link href={welsh ? "/cy" : "/"} className="flex items-center gap-5 text-card select-none">
          <div className="bg-primary/0 rounded-full w-5 h-5 p-5 flex
              items-center justify-center">
            {/* <span className="text-lg font-bold tracking-tight text-primary-foreground">C</span> */}
            <Image
              src="/CAMAD/Arrows.svg"
              alt="The charming high street of Machynlleth, Wales, with its colorful buildings and iconic clock tower"
              width={75}
              height={75}
              className="object-cover absolute"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg tracking-tight 
                ${background ? "text-foreground/90" : ""}`}>CAMAD</span>
            <span className={`font-light text-xs 
                ${background ? "text-foreground/90" : "text-card/70"}`}>{welsh ? "Gweithredu Cymunedol Machynlleth" : "Community Action Machynlleth"}</span>
          </div>
        </Link>

        {/* Right */}
        <div className="flex z-50">
          <nav aria-label="Main navigation">
            <ul className="hidden lg:flex gap-8 text-card/80 text-sm font-medium items-center tracking-wide">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`cursor-pointer hover:text-card transition-colors 
                        ${background
                          ? isActive
                            ? "text-primary hover:text-foreground underline text-decoration-primary hover:decoration-foreground underline-offset-[3px] decoration-2"
                            : "text-foreground/65 hover:text-foreground"
                          : isActive
                            ? "text-card/80 hover:text-card"
                            : "text-card/80 hover:text-card"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex flex-wrap">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className={`bg-transparent cursor-pointer ${background ? "text-foreground hover:bg-foreground/10" : "text-card hover:bg-accent/10"}`}>
                      <Globe className={`${background ? "text-foreground/65" : "text-card"}`} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-10 p-1">
                    <DropdownMenuItem asChild className="px-2 py-3 text-xs hover:bg-primary/10 cursor-pointer">
                      <Link href={englishPath}>English</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="px-2 py-3 text-xs hover:bg-primary/10 cursor-pointer">
                      <Link href={welshPath}>Cymraeg</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </nav>

          <button className={`lg:hidden flex items-center ${background ? "text-foreground" : "text-card"}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          {
            isOpen && (
              <nav ref={menuRef} className="absolute top-20 left-0 bg-[#211914]/99 w-screen" id="mobile-menu" aria-label="Mobile navigation">
                <ul className="flex flex-col gap-8 px-8 pb-4 pt-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`text-card text-sm font-medium items-center tracking-wide
                        ${isActive
                              ? "text-card/70 underline text-decoration-primary underline-offset-[3px] decoration-2"
                              : ""
                            }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                <div className="flex flex-wrap items-center p-5 pt-3">
                  <Link
                    href={welsh ? "/cy/contact" : "/contact"}
                    className="rounded-full bg-primary px-5 py-3 font-semibold text-card
                  transition-all hover:bg-primary/90 text-md w-full text-center"
                  >
                    {welsh ? "Cymerwch Ran" : "Get Involved"}
                  </Link>
                </div>
              </nav>
            )
          }

        </div>
      </div>
    </div>
  )
}