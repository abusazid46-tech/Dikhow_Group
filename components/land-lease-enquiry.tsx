"use client";

import { Droplets, MapPin, MessageCircle, Ruler, Send, Sprout } from "lucide-react";
import { useState } from "react";
import { contact } from "@/lib/data";

type FormState = {
  name: string;
  phone: string;
  location: string;
  landArea: string;
  currentUse: string;
  waterAccess: string;
  soilTest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  location: "",
  landArea: "",
  currentUse: "",
  waterAccess: "",
  soilTest: "",
  message: ""
};

export function LandLeaseEnquiry() {
  const [form, setForm] = useState<FormState>(initialState);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const enquiryText = [
    "Hello Dikhow Agro Organic, I want to enquire about giving land on lease for organic cultivation.",
    "",
    `Name: ${form.name || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Land Location: ${form.location || "-"}`,
    `Approx Land Area: ${form.landArea || "-"}`,
    `Current Land Status/Use: ${form.currentUse || "-"}`,
    `Water Access: ${form.waterAccess || "-"}`,
    `Soil Test Status: ${form.soilTest || "-"}`,
    `Additional Details: ${form.message || "-"}`,
    "",
    "Please contact me for soil testing and suitable crop planning."
  ].join("\n");

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    enquiryText
  )}`;

  return (
    <section className="bg-emeraldDeep py-20 text-white md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Land Lease Enquiry
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight md:text-5xl">
            Offer suitable land for organic cultivation.
          </h2>
          <p className="mt-5 leading-8 text-white/72">
            Dikhow Agro Organic works with landowners to lease unused or underused
            agricultural land, conduct soil testing, and plan suitable crops based on soil,
            water access, location, and cultivation potential.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              { title: "Land assessment", icon: MapPin },
              { title: "Soil testing before crop planning", icon: Sprout },
              { title: "Suitable crop selection", icon: Ruler },
              { title: "Water and cultivation feasibility review", icon: Droplets }
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 rounded-md bg-white/10 p-4">
                <item.icon className="h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm font-semibold text-white/82">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          className="grid gap-4 rounded-lg border border-white/10 bg-white p-5 text-charcoal shadow-premium md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
                placeholder="Landowner name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
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

          <label className="grid gap-2 text-sm font-semibold">
            Land Location
            <input
              required
              value={form.location}
              onChange={(event) => updateField("location", event.target.value)}
              className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
              placeholder="Village, district, Assam"
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Approx Land Area
              <input
                required
                value={form.landArea}
                onChange={(event) => updateField("landArea", event.target.value)}
                className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
                placeholder="Example: 5 bigha / 2 acre"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Water Access
              <select
                required
                value={form.waterAccess}
                onChange={(event) => updateField("waterAccess", event.target.value)}
                className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
              >
                <option value="" disabled>
                  Select water availability
                </option>
                <option value="Available">Available</option>
                <option value="Limited">Limited</option>
                <option value="Not available">Not available</option>
                <option value="Need assessment">Need assessment</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Current Land Status
              <select
                required
                value={form.currentUse}
                onChange={(event) => updateField("currentUse", event.target.value)}
                className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="Unused / fallow">Unused / fallow</option>
                <option value="Partially cultivated">Partially cultivated</option>
                <option value="Currently cultivated">Currently cultivated</option>
                <option value="Needs clearing">Needs clearing</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Soil Test Status
              <select
                required
                value={form.soilTest}
                onChange={(event) => updateField("soilTest", event.target.value)}
                className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
              >
                <option value="" disabled>
                  Select soil test status
                </option>
                <option value="Not tested yet">Not tested yet</option>
                <option value="Already tested">Already tested</option>
                <option value="Need Dikhow team assessment">Need Dikhow team assessment</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold">
            Additional Details
            <textarea
              rows={4}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="focus-ring rounded-md border border-forest/20 bg-ivory px-4 py-3 text-base font-normal"
              placeholder="Road access, nearby water source, preferred contact time, or other notes"
            />
          </label>

          <button
            type="submit"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#25d366] px-5 py-3 text-sm font-bold text-emeraldDeep transition hover:bg-[#7df0a1]"
          >
            Send Enquiry on WhatsApp
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
    </section>
  );
}
