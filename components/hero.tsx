import Image from "next/image";
import { ArrowDown, Building2, Leaf, Waves } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionDiv } from "@/components/motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-emeraldDeep pt-20 text-white">
      <Image
        src="/images/hero-dikhow-group.png"
        alt="Dikhow Group enterprise landscape in Assam"
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(201,162,74,0.24),transparent_32%),linear-gradient(90deg,rgba(6,37,29,0.95),rgba(6,37,29,0.68)_45%,rgba(6,37,29,0.28))]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ivory to-transparent" />

      <MotionDiv
        aria-hidden="true"
        className="absolute left-[8%] top-28 h-24 w-24 rounded-full border border-gold/30"
        animate={{ y: [0, 18, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-80px)] items-center py-16">
        <div className="max-w-4xl">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-goldSoft backdrop-blur">
              Diversified Enterprise | Assam, India
            </p>
            <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.04] md:text-6xl lg:text-7xl">
              Building Progress, Cultivating Sustainability, Preserving Heritage
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-xl">
              Dikhow Group is a diversified enterprise operating across Construction,
              Organic Agriculture, and Eri Silk Production, creating sustainable value for
              communities and businesses.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#businesses">Explore Our Businesses</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </MotionDiv>
        </div>

        <div className="absolute bottom-10 left-0 right-0 hidden items-end justify-between lg:flex">
          <div className="glass-panel grid w-[520px] grid-cols-3 gap-2 rounded-lg p-3">
            {[
              { label: "Construction", icon: Building2 },
              { label: "Agro Organic", icon: Leaf },
              { label: "Eri Silk", icon: Waves }
            ].map((item) => (
              <div key={item.label} className="rounded-md bg-white/10 p-4">
                <item.icon className="mb-3 h-5 w-5 text-gold" />
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-white/30 text-white/80"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
