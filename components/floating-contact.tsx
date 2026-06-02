import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/data";

const actions = [
  {
    label: "Chat on WhatsApp",
    href: contact.whatsappHref,
    icon: MessageCircle,
    className: "bg-[#25d366] text-emeraldDeep hover:bg-[#7df0a1]"
  },
  {
    label: "Call Dikhow Group",
    href: contact.phoneHref,
    icon: Phone,
    className: "bg-gold text-emeraldDeep hover:bg-goldSoft"
  }
];

export function FloatingContact() {
  return (
    <div
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6"
    >
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={action.label}
          className={`focus-ring group flex h-14 w-14 items-center justify-center rounded-full shadow-premium transition hover:-translate-y-1 ${action.className}`}
        >
          <action.icon aria-hidden="true" className="h-6 w-6" />
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-md bg-emeraldDeep px-3 py-2 text-xs font-bold text-white opacity-0 shadow-premium transition group-hover:opacity-100 sm:block">
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
}
