import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

const variants = {
  primary:
    "bg-gold text-emeraldDeep shadow-glow hover:bg-goldSoft focus-visible:outline-gold",
  secondary:
    "border border-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-gold",
  dark:
    "border border-forest/20 bg-emeraldDeep text-white hover:bg-forest focus-visible:outline-gold"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
