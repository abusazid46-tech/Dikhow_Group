import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { divisions, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dikhow Group, a diversified enterprise based in Assam, India, with interests in construction, organic agriculture, and Eri silk."
};

export default function AboutPage() {
  return (
    <main className="bg-ivory pt-20">
      <section className="relative overflow-hidden bg-emeraldDeep py-20 text-white md:py-28">
        <Image
          src="/images/hero-dikhow-group.png"
          alt="Dikhow Group enterprise landscape"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emeraldDeep via-emeraldDeep/90 to-emeraldDeep/50" />
        <div className="section-shell relative z-10 max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            About Dikhow Group
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Rooted in Assam. Built for diversified, sustainable progress.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Dikhow Group unites construction expertise, organic agriculture, and Eri silk
            heritage under one professional enterprise platform.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Company"
            title="A practical, credible group for real-world value creation."
            text="The group began with Dikhow Construction in 2009 and has expanded into agriculture and heritage textiles in 2026. Each division serves a different market, but the common foundation is quality, accountability, and long-term community value."
          />
          <div className="grid gap-5">
            <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-premium">
              <h2 className="font-serif text-2xl font-semibold text-charcoal">Vision</h2>
              <p className="mt-3 leading-8 text-charcoal/70">
                To become a respected multi-sector enterprise from Assam, recognized for
                dependable execution, sustainable operations, and cultural stewardship.
              </p>
            </div>
            <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-premium">
              <h2 className="font-serif text-2xl font-semibold text-charcoal">Mission</h2>
              <p className="mt-3 leading-8 text-charcoal/70">
                To deliver construction, organic agriculture, and Eri silk solutions that
                help customers, partners, and communities move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Values" title="The standards behind every division." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-forest/10 bg-ivory p-5">
                <value.icon className="mb-5 h-7 w-7 text-gold" />
                <h2 className="font-bold text-charcoal">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Timeline" title="A group with legacy and momentum." />
          <div className="mt-10 grid gap-4">
            {divisions.map((division) => (
              <div
                key={division.slug}
                className="grid gap-4 rounded-lg border border-forest/10 bg-white p-6 shadow-sm md:grid-cols-[96px_220px_1fr_auto] md:items-center"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-md border border-forest/10 bg-emeraldDeep">
                  <Image
                    src={division.logo}
                    alt={`${division.name} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="80px"
                  />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                  {division.established}
                </p>
                <div>
                  <h2 className="font-serif text-2xl font-semibold">{division.name}</h2>
                  <p className="mt-2 text-charcoal/70">{division.industry}</p>
                </div>
                <ButtonLink href={`/divisions/${division.slug}`} variant="dark">
                  View Division
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
