import { Clock, Mail, MapPin, Navigation } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-bold tracking-[0.2em] text-accent uppercase">
          Kontakt
        </p>
        <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-charcoal uppercase sm:text-3xl lg:text-4xl">
          Jetzt anrufen und Termin abstimmen
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Kein Online-Formular – Sie erreichen uns direkt. So klären wir Anliegen
          persönlich und unkompliziert.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-border bg-soft p-6">
            <MapPin className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-4 font-display text-sm font-bold tracking-wide text-charcoal uppercase">
              Adresse
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Route planen
            </a>
          </article>

          <article className="rounded-xl border border-border bg-soft p-6">
            <Clock className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-4 font-display text-sm font-bold tracking-wide text-charcoal uppercase">
              Öffnungszeiten
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.hours.weekdays}
              <br />
              {site.hours.saturday}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </a>
          </article>

          <article className="rounded-xl border border-border bg-graphite p-6 text-white">
            <h3 className="font-display text-sm font-bold tracking-wide uppercase">
              Direkt anrufen
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Mobil für schnelle Hilfe, Festnetz während der Öffnungszeiten.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <PhoneLink href={site.phones.mobile.href} variant="primary">
                Mobil {site.phones.mobile.display}
              </PhoneLink>
              <PhoneLink href={site.phones.office.href} variant="secondary">
                Festnetz {site.phones.office.display}
              </PhoneLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
