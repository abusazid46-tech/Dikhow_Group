"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, navLinks } from "@/lib/data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-emeraldDeep/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="section-shell flex h-20 items-center justify-between"
      >
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="relative h-12 w-16 overflow-hidden rounded-md border border-gold/40 bg-black shadow-glow">
            <Image
              src={brand.logo}
              alt="Dikhow Group logo"
              fill
              className="object-contain p-1"
              sizes="64px"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-white">Dikhow Group</span>
            <span className="block text-xs text-white/60">Assam, India</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm text-sm font-semibold text-white/75 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="focus-ring hidden rounded-md bg-gold px-4 py-3 text-sm font-bold text-emeraldDeep transition hover:bg-goldSoft lg:inline-flex"
        >
          Request Proposal
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-white/20 text-white lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-emeraldDeep lg:hidden">
          <div className="section-shell grid gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
