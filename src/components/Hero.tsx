import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="start" className="relative isolate min-h-[92vh] scroll-mt-24 overflow-hidden bg-graphite">
      <Image
        src="/images/hero-werkstatt.png"
        alt="Saubere AMD Meisterwerkstatt in Freiburg mit PKW auf der Fläche"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/30" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 lg:justify-center lg:px-8 lg:pb-24 lg:pt-32">
        <p className="mb-4 font-display text-xs font-bold tracking-[0.22em] text-accent uppercase">
          {site.tagline}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
          {site.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          {site.intro}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PhoneLink href={site.phones.mobile.href} variant="primary">
            Mobil: {site.phones.mobile.display}
          </PhoneLink>
          <PhoneLink href={site.phones.office.href} variant="secondary">
            Festnetz: {site.phones.office.display}
          </PhoneLink>
        </div>

        <div className="mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm text-white/90 backdrop-blur-md sm:flex-row sm:items-center sm:gap-8 sm:px-5">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{site.address.full}</span>
          </p>
          <p className="flex items-start gap-2">
            <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {site.hours.weekdays} · {site.hours.saturday}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
