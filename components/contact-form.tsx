"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { contact, divisions } from "@/lib/data";

export function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <form
      className="grid gap-4 rounded-lg border border-forest/10 bg-white p-5 shadow-premium md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("Thank you. Please replace this demo handler with your CRM or email service before launch.");
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
            placeholder="Your full name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Phone
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
            placeholder="+91"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
          placeholder="you@example.com"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Business Interest
        <select
          required
          name="interest"
          className="focus-ring min-h-12 rounded-md border border-forest/20 bg-ivory px-4 text-base font-normal"
          defaultValue=""
        >
          <option value="" disabled>
            Select a division
          </option>
          {divisions.map((division) => (
            <option key={division.slug} value={division.name}>
              {division.name}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="focus-ring rounded-md border border-forest/20 bg-ivory px-4 py-3 text-base font-normal"
          placeholder="Tell us about your requirement"
        />
      </label>

      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emeraldDeep px-5 py-3 text-sm font-bold text-white transition hover:bg-forest"
      >
        Submit Enquiry
        <Send className="h-4 w-4" />
      </button>

      {status ? <p className="text-sm font-semibold text-forest">{status}</p> : null}

      <p className="text-xs leading-6 text-charcoal/60">
        For faster assistance, use WhatsApp or email {contact.email}.
      </p>
    </form>
  );
}
