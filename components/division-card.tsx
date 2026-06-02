import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { divisions } from "@/lib/data";
import { MotionArticle } from "@/components/motion";

type Division = (typeof divisions)[number];

export function DivisionCard({ division, index }: { division: Division; index: number }) {
  const Icon = division.icon;

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group overflow-hidden rounded-lg border border-forest/10 bg-white shadow-premium transition duration-300 hover:-translate-y-2 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={division.image}
          alt={`${division.name} business imagery`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emeraldDeep/80 via-emeraldDeep/10 to-transparent" />
        <div className="absolute right-4 top-4 h-20 w-20 overflow-hidden rounded-md border border-gold/30 bg-black/80 shadow-glow backdrop-blur">
          <Image
            src={division.logo}
            alt={`${division.name} logo`}
            fill
            className="object-contain p-1.5"
            sizes="80px"
          />
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-white backdrop-blur">
          <Icon className="h-4 w-4 text-gold" />
          {division.industry}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-forest/70">
            <CalendarDays className="h-4 w-4 text-gold" />
            Established {division.established}
          </div>
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-forest/10 bg-emeraldDeep">
            <Image
              src={division.logo}
              alt=""
              fill
              className="object-contain p-1"
              sizes="48px"
            />
          </div>
        </div>
        <h3 className="font-serif text-2xl font-semibold text-charcoal">{division.name}</h3>
        <p className="mt-3 leading-7 text-charcoal/70">{division.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {division.services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-forest/10 bg-forest/5 px-3 py-1 text-xs font-semibold text-forest"
            >
              {service}
            </span>
          ))}
        </div>
        <Link
          href={`/divisions/${division.slug}`}
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-bold text-forest transition hover:text-gold"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </MotionArticle>
  );
}
