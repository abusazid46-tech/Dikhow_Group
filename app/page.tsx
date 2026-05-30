import { ArrowRight, Leaf, Sprout, Waves } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { DivisionCard } from "@/components/division-card";
import { Hero } from "@/components/hero";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Stats } from "@/components/stats";
import { contactCards, divisions, values, whyChooseUs } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="about" className="bg-ivory py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About Dikhow Group"
            title="A diversified enterprise built for responsible growth."
            text="Dikhow Group brings together three high-value sectors: infrastructure, organic agriculture, and Eri silk heritage. The group is rooted in Assam and focused on creating dependable, sustainable value for communities, partners, and customers."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-premium">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-gold">
                Vision
              </p>
              <p className="leading-7 text-charcoal/70">
                To become a trusted multi-sector enterprise known for quality, sustainability,
                and heritage-led progress.
              </p>
            </div>
            <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-premium">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-gold">
                Mission
              </p>
              <p className="leading-7 text-charcoal/70">
                To deliver reliable construction, responsible agriculture, and authentic Eri
                textile solutions with integrity and long-term accountability.
              </p>
            </div>
            <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-premium sm:col-span-2">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold">
                Core Values
              </p>
              <div className="grid gap-3 md:grid-cols-5">
                {values.map((value) => (
                  <div key={value.title} className="rounded-md bg-forest/5 p-4">
                    <value.icon className="mb-3 h-5 w-5 text-gold" />
                    <p className="text-sm font-bold text-forest">{value.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="businesses" className="bg-white py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Business Divisions"
            title="Three focused verticals. One trusted group."
            text="Each division has a distinct role while sharing one standard: professional execution, credible partnerships, and sustainable long-term growth."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {divisions.map((division, index) => (
              <DivisionCard key={division.slug} division={division} index={index} />
            ))}
          </div>
        </div>
      </section>

      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-ivory py-20 md:py-28"
      >
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Enterprise reliability with local depth."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
              >
                <item.icon className="mb-5 h-8 w-8 text-gold" />
                <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      <Stats />

      <section className="overflow-hidden bg-white py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Sustainability & Heritage"
            title="Responsible progress from land to legacy."
            text="Dikhow Group aligns economic growth with environmental responsibility and cultural preservation: organic agriculture that respects soil health, business practices designed for durable value, and Eri silk initiatives that honor Assamese textile traditions."
          />
          <div className="grid gap-4">
            {[
              {
                title: "Environmental Responsibility",
                text: "Operational decisions shaped around lower waste, resource care, and responsible development.",
                icon: Leaf
              },
              {
                title: "Organic Agriculture Initiatives",
                text: "Organic produce, advisory support, and sustainable farming solutions for healthier value chains.",
                icon: Sprout
              },
              {
                title: "Assamese Eri Heritage",
                text: "Preserving traditional weaving knowledge while creating modern market access for Eri textiles.",
                icon: Waves
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-forest/10 bg-ivory p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-forest text-gold">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">{item.title}</h3>
                  <p className="mt-2 leading-7 text-charcoal/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emeraldDeep py-20 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Partnership
            </p>
            <h2 className="font-serif text-3xl font-semibold md:text-5xl">
              Let&apos;s Build the Future Together
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              Whether you are planning a project, sourcing organic produce, or exploring Eri
              silk supply, Dikhow Group is ready to begin a focused conversation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Contact</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request Proposal
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Start a serious business enquiry."
              text="Share your requirement and the Dikhow Group team can respond with the right division, next steps, and proposal direction."
            />
            <div className="mt-8 grid gap-3">
              {contactCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="focus-ring flex items-center justify-between rounded-lg border border-forest/10 bg-white p-4 transition hover:border-gold hover:shadow-premium"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-forest/10 text-forest">
                      <card.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-charcoal">{card.title}</span>
                      <span className="block text-sm text-charcoal/60">{card.value}</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-gold" />
                </Link>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dikhow Group",
            url: "https://dikhowgroup.com",
            slogan: "Building Progress, Cultivating Sustainability, Preserving Heritage",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Assam",
              addressCountry: "IN"
            },
            department: divisions.map((division) => ({
              "@type": "Organization",
              name: division.name,
              foundingDate: division.established
            }))
          })
        }}
      />
    </main>
  );
}
