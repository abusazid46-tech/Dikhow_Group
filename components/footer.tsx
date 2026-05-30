import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { contact, divisions, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-emeraldDeep text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_0.9fr_0.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-gold/40 bg-gold/10 font-serif text-xl font-bold text-gold">
              D
            </span>
            <div>
              <p className="font-bold">Dikhow Group</p>
              <p className="text-sm text-white/60">{contact.location}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Building progress, cultivating sustainability, and preserving heritage through
            construction, organic agriculture, and Eri silk.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">
            Quick Links
          </h2>
          <div className="grid gap-3">
            {navLinks.slice(0, 3).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">
            Business Divisions
          </h2>
          <div className="grid gap-3">
            {divisions.map((division) => (
              <Link
                key={division.slug}
                href={`/divisions/${division.slug}`}
                className="text-sm text-white/70 hover:text-gold"
              >
                {division.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">
            Connect
          </h2>
          <a href={`mailto:${contact.email}`} className="mb-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold">
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="/contact"
                aria-label="Social media profile"
                className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-white/20 text-white/70 transition hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 Dikhow Group. All rights reserved.</p>
          <p>Construction | Organic Agriculture | Eri Silk</p>
        </div>
      </div>
    </footer>
  );
}
