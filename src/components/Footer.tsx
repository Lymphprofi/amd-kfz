import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-graphite pb-32 text-white lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="AMD Auto Motorrad Dienst"
            width={160}
            height={49}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Wir kümmern uns um Ihr Fahrzeug, egal ob PKW, Motorrad oder Roller.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold tracking-wide uppercase">Kontakt</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            <a href={site.phones.mobile.href} className="hover:text-white">
              Mobil: {site.phones.mobile.display}
            </a>
            <br />
            <a href={site.phones.office.href} className="hover:text-white">
              Tel: {site.phones.office.display}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold tracking-wide uppercase">
            Öffnungszeiten
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {site.hours.weekdays}
            <br />
            {site.hours.saturday}
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <Link href="/datenschutz" className="text-white/80 hover:text-white">
              Datenschutzerklärung
            </Link>
            <Link href="/impressum" className="text-white/80 hover:text-white">
              Impressum
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© 2026 {site.name}</p>
          <div className="flex gap-5">
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutzerklärung
            </Link>
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
