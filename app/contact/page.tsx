import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { contactCards } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dikhow Group for construction, organic agriculture, Eri silk, partnership, and proposal enquiries."
};

export default function ContactPage() {
  return (
    <main className="bg-ivory pt-20">
      <section className="bg-emeraldDeep py-20 text-white md:py-28">
        <div className="section-shell max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Contact
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Bring your enquiry to the right Dikhow Group division.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Use the form for proposals, service enquiries, supply discussions, and
            partnership conversations.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="A focused path from enquiry to response."
              text="Select the relevant business interest so your message can be routed to construction, agriculture, textiles, or the central group office."
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
    </main>
  );
}
