"use client";

import Link from "next/link"
import { useState } from 'react';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Contact", href: "/contact" },
  ]

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex max-w-6xl w-full
          justify-between items-center z-50 py-5 lg:px-12 px-5">

      {/* Left */}
      <div className="flex items-center gap-3 text-card select-none">
        <div className="bg-primary rounded-full w-5 h-5 p-5 flex
              items-center justify-center">
          <span className="text-lg font-sans font-bold tracking-tight text-primary-foreground">C</span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold font-sans text-lg tracking-tight">CAMAD</span>
          <span className="font-light font-sans text-xs text-card/70">Community Action Machynlleth</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex z-50">
        <div className="hidden md:flex gap-8 text-card/80 text-sm font-medium items-center tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer hover:text-card transition-colors"
            >
              {link.label}
            </Link>
          ))}


          <div className="flex flex-wrap items-center">
            <Link
              href="#volunteer"
              className="rounded-full bg-primary px-5 py-3 font-semibold text-card
                  transition-all hover:bg-primary/90 text-md"
            >
              Get Involved
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center text-card"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu /> }
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 bg-[#211914]/99 w-screen">
            <div className="flex flex-col gap-8 px-8 pb-4 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-card/80 text-sm font-medium items-center tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-center p-5 pt-3">
              <Link
                href="#volunteer"
                className="rounded-full bg-primary px-5 py-3 font-semibold text-card
                  transition-all hover:bg-primary/90 text-md w-full text-center"
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}