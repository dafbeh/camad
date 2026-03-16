"use client";

import Link from "next/link"
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from "lucide-react";

export default function Navbar({ background = false }: { background?: boolean }) {
  const navLinks = [
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

  return (
    <div className={`top-0 left-0 w-full z-50 
        ${background ? "sticky top-0 z-50 border-b border-border bg-accent/95 backdrop-blur-md" : "absolute"}`}>
      <div className="mx-auto flex max-w-6xl w-full justify-between items-center py-5 lg:px-12 px-5">

        {/* Left */}
        <Link href="/" className="flex items-center gap-3 text-card select-none">
          <div className="bg-primary rounded-full w-5 h-5 p-5 flex
              items-center justify-center">
            <span className="text-lg font-bold tracking-tight text-primary-foreground">C</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg tracking-tight 
                ${background ? "text-foreground/90" : ""}`}>CAMAD</span>
            <span className={`font-light text-xs 
                ${background ? "text-foreground/90" : "text-card/70"}`}>Community Action Machynlleth</span>
          </div>
        </Link>

        {/* Right */}
        <div className="flex z-50">
          <nav aria-label="Main navigation">
            <ul className="hidden md:flex gap-8 text-card/80 text-sm font-medium items-center tracking-wide">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`cursor-pointer hover:text-card transition-colors 
                        ${background ? "text-muted-foreground hover:text-foreground" : "text-card/80 hover:text-card"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}


              <li className="flex flex-wrap items-center">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-5 py-3 font-semibold text-card
                  transition-all hover:bg-primary/90 text-md"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </nav>

          <button className={`md:hidden flex items-center ${background ? "text-foreground" : "text-card"}`}
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
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-card/80 text-sm font-medium items-center tracking-wide"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center p-5 pt-3">
                  <Link
                    href="#volunteer"
                    className="rounded-full bg-primary px-5 py-3 font-semibold text-card
                  transition-all hover:bg-primary/90 text-md w-full text-center"
                  >
                    Get Involved
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