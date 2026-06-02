import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { DivisionCard } from "@/components/division-card";
import { SectionHeading } from "@/components/section-heading";
import { divisions } from "@/lib/data";

type DivisionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({ params }: DivisionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);

  if (!division) {
    return {};
  }

  return {
    title: division.name,
    description: division.description,
    openGraph: {
      title: `${division.name} | Dikhow Group`,
      description: division.description,
      images: [division.image]
    }
  };
}

export default async function DivisionPage({ params }: DivisionPageProps) {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);

  if (!division) notFound();

  const related = divisions.filter((item) => item.slug !== division.slug);
  const Icon = division.icon;

  return (
    <main className="bg-ivory pt-20">
      <section className="relative overflow-hidden bg-emeraldDeep py-20 text-white md:py-28">
        <Image
          src={division.image}
          alt={`${division.name} imagery`}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emeraldDeep via-emeraldDeep/90 to-emeraldDeep/50" />
        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              {division.industry}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
              {division.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {division.longDescription}
            </p>
          </div>
          <div className="glass-panel rounded-lg p-6">
            <div className="relative mb-5 aspect-square w-36 overflow-hidden rounded-lg border border-gold/30 bg-black shadow-glow">
              <Image
                src={division.logo}
                alt={`${division.name} logo`}
                fill
                className="object-contain p-2"
                sizes="144px"
              />
            </div>
            <Icon className="mb-5 h-10 w-10 text-gold" />
            <p className="mb-2 flex items-center gap-2 text-sm font-bold text-white/80">
              <CalendarDays className="h-4 w-4 text-gold" />
              Established {division.established}
            </p>
            <p className="text-sm leading-7 text-white/70">{division.accent}</p>
            {division.sourceNote ? (
              <p className="mt-4 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white/80">
                {division.sourceNote}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Capabilities"
            title={`Professional services from ${division.shortName}.`}
            text={division.description}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {division.services.map((service) => (
              <div key={service} className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
                <CheckCircle2 className="mb-4 h-6 w-6 text-gold" />
                <h2 className="font-bold text-charcoal">{service}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {division.assameseAbout ? (
        <section className="bg-ivory py-20 md:py-28" lang="as">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">
                  Detailed Profile
                </p>
                <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal md:text-5xl">
                  {division.assameseTitle}
                </h2>
                {division.assameseSubtitle ? (
                  <p className="mt-4 text-lg font-semibold leading-8 text-forest">
                    {division.assameseSubtitle}
                  </p>
                ) : null}
              </div>

              <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-premium md:p-8">
                <div className="grid gap-5 text-base leading-8 text-charcoal/75">
                  {division.assameseAbout.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {division.assameseVision ? (
                  <div className="mt-10 border-t border-forest/10 pt-8">
                    <h3 className="font-serif text-2xl font-semibold text-charcoal">
                      আমাৰ দৃষ্টিভংগী (Vision)
                    </h3>
                    <div className="mt-4 grid gap-4 text-base leading-8 text-charcoal/75">
                      {division.assameseVision.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                ) : null}

                {division.assameseMission ? (
                  <div className="mt-10 border-t border-forest/10 pt-8">
                    <h3 className="font-serif text-2xl font-semibold text-charcoal">
                      আমাৰ লক্ষ্য (Mission)
                    </h3>
                    <div className="mt-5 grid gap-3">
                      {division.assameseMission.map((item) => (
                        <div key={item} className="flex gap-3 rounded-md bg-forest/5 p-4">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                          <p className="leading-7 text-charcoal/75">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {division.assamesePromise ? (
                  <div className="mt-10 border-t border-forest/10 pt-8">
                    <h3 className="font-serif text-2xl font-semibold text-charcoal">
                      আমাৰ প্ৰতিশ্ৰুতি
                    </h3>
                    <div className="mt-4 grid gap-4 text-base leading-8 text-charcoal/75">
                      {division.assamesePromise.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-premium">
            <Image
              src={division.image}
              alt={`${division.name} visual detail`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Strengths" title="Built for credible execution." />
            <div className="mt-8 grid gap-3">
              {division.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 rounded-md bg-ivory p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                  <span className="font-semibold text-charcoal/80">{highlight}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request Proposal</ButtonLink>
              <ButtonLink href="/contact" variant="dark">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Explore More" title="Other Dikhow Group divisions." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {related.map((item, index) => (
              <DivisionCard key={item.slug} division={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
