import type { ReactNode } from "react";
import { Phone } from "lucide-react";

type Variant = "primary" | "secondary" | "badge" | "bar";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20",
  badge:
    "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20",
  bar: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-base font-semibold text-white transition hover:bg-accent-dark",
};

type PhoneLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function PhoneLink({
  href,
  children,
  variant = "primary",
  className = "",
}: PhoneLinkProps) {
  return (
    <a href={href} className={`${styles[variant]} ${className}`}>
      <Phone className="size-4 shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
}
