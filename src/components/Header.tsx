"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { asset } from "@/lib/asset";
import { navItems, site } from "@/lib/site";
import { PhoneLink } from "@/components/PhoneLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-graphite/85 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/#start" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={asset("/logo.png")}
            alt="AMD Auto Motorrad Dienst"
            width={180}
            height={55}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <PhoneLink href={site.phones.mobile.href} variant="badge">
            <span className="text-white/60">{site.phones.mobile.label}</span>
            {site.phones.mobile.display}
          </PhoneLink>
          <PhoneLink href={site.phones.office.href} variant="badge">
            <span className="text-white/60">{site.phones.office.label}</span>
            {site.phones.office.display}
          </PhoneLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <PhoneLink
            href={site.phones.mobile.href}
            variant="primary"
            className="!px-3 !py-2 text-xs"
          >
            Anrufen
          </PhoneLink>
          <button
            type="button"
            className="rounded-xl p-2 text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-graphite px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <PhoneLink href={site.phones.mobile.href} variant="primary">
              Mobil {site.phones.mobile.display}
            </PhoneLink>
            <PhoneLink href={site.phones.office.href} variant="secondary">
              Festnetz {site.phones.office.display}
            </PhoneLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
