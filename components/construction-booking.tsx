"use client";

import Image from "next/image";
import { Building2, CalendarDays, Home, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { contact } from "@/lib/data";

const projects = [
  {
    name: "Dikhow Complex, Kahilipara",
    image: "/images/projects/dikhow-complex-kahilipara.jpeg",
    status: "Residential complex",
    address: "Kahilipara, Guwahati"
  },
  {
    name: "Dikhow Complex, Lalmati",
    image: "/images/projects/dikhow-complex-lalmati.jpeg",
    status: "Apartment project",
    address: "Lalmati, Guwahati"
  },
  {
    name: "Dikhow Complex, Jayanagar",
    image: "/images/projects/dikhow-complex-jayanagar.jpeg",
    status: "Premium residential project",
    address: "Jayanagar, Guwahati"
  },
  {
    name: "Dikhow Niwas",
    status: "Upcoming Project",
    address: "Dikhow Niwas, Lachit Garh Path, Garchuk, Guwahati-781035"
  }
];

type BookingForm = {
  name: string;
  phone: string;
  project: string;
  flatType: string;
  budget: string;
  visitTime: string;
  message: string;
};

const initialForm: BookingForm = {
  name: "",
  phone: "",
  project: "",
  flatType: "",
  budget: "",
  visitTime: "",
  message: ""
};

export function ConstructionBooking() {
  const [form, setForm] = useState<BookingForm>(initialForm);

  const updateField = (field: keyof BookingForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const enquiryText = [
    "Hello Dikhow Construction, I want to enquire about flat booking.",
    "",
    `Name: ${form.name || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Preferred Project: ${form.project || "-"}`,
    `Flat Type: ${form.flatType || "-"}`,
    `Budget Range: ${form.budget || "-"}`,
    `Preferred Site Visit / Call Time: ${form.visitTime || "-"}`,
    `Additional Details: ${form.message || "-"}`,
    "",
    "Please contact me with availability, pricing, and booking details."
  ].join("\n");

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    enquiryText
  )}`;

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Residential Projects
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal md:text-5xl">
              Dikhow residential projects for flat enquiries.
            </h2>
            <p className="mt-5 leading-8 text-charcoal/70">
              Explore Dikhow Construction residential projects and send a booking enquiry
              for 1 BHK, 2 BHK, 3 BHK, or larger flat requirements.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { title: "1 BHK", icon: Home },
              { title: "2 BHK", icon: Building2 },
              { title: "3 BHK and above", icon: CalendarDays }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-forest/10 bg-white p-4 shadow-sm">
                <item.icon className="mb-3 h-5 w-5 text-gold" />
                <p className="text-sm font-bold text-charcoal">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-premium"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-emeraldDeep">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} project image`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,74,0.28),transparent_34%),linear-gradient(135deg,#06251d,#0f3d2e)]">
                    <div className="text-center">
                      <Building2 className="mx-auto mb-4 h-12 w-12 text-gold" />
                      <p className="px-6 font-serif text-2xl font-semibold text-white">
                        Upcoming Project
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-emeraldDeep/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="inline-flex rounded-md bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur">
                    {project.status}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-forest/70">
                  <MapPin className="h-4 w-4 text-gold" />
                  {project.address}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal">{project.name}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-10 rounded-lg border border-forest/10 bg-white p-5 shadow-premium md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Booking Enquiry
            </p>
            <h3 className="font-serif text-3xl font-semibold leading-tight text-charcoal">
              Request flat availability and booking details.
            </h3>
            <p className="mt-4 leading-8 text-charcoal/70">
              Fill the form and send your enquiry directly on WhatsApp to the Dikhow
              Construction team.
            </p>
            <a
              href={contact.phoneHref}
              className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emeraldDeep px-5 py-3 text-sm font-bold text-white transition hover:bg-forest"
            >
              Call {contact.phoneLabel}
            </a>
          </div>

          <form
            className="grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
                  placeholder="Your full name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Phone
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
                  placeholder="+91"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Preferred Project
                <select
                  required
                  value={form.project}
                  onChange={(event) => updateField("project", event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
                >
                  <option value="" disabled>
                    Select project
                  </option>
                  {projects.map((project) => (
                    <option key={project.name} value={project.name}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Flat Type
                <select
                  required
                  value={form.flatType}
                  onChange={(event) => updateField("flatType", event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
                >
                  <option value="" disabled>
                    Select flat type
                  </option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK or larger">4 BHK or larger</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Budget Range
                <input
                  value={form.budget}
                  onChange={(event) => updateField("budget", event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
                  placeholder="Example: 35-50 lakh"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Preferred Call / Visit Time
                <input
                  value={form.visitTime}
                  onChange={(event) => updateField("visitTime", event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
                  placeholder="Example: Sunday morning"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-charcoal">
              Message
              <textarea
                rows={4}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="focus-ring rounded-md border border-forest/20 bg-ivory px-4 py-3 text-base font-normal"
                placeholder="Any preference about floor, parking, location, or timeline"
              />
            </label>

            <button
              type="submit"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#25d366] px-5 py-3 text-sm font-bold text-emeraldDeep transition hover:bg-[#7df0a1]"
            >
              Send Booking Enquiry on WhatsApp
              <Send className="h-4 w-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-forest/15 px-5 py-3 text-sm font-bold text-forest transition hover:border-gold"
            >
              Quick WhatsApp Enquiry
              <MessageCircle className="h-4 w-4" />
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
