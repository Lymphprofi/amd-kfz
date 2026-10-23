import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der AMD Kfz Meisterwerkstatt in Freiburg.",
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2 className="font-display text-base font-bold uppercase">1. Verantwortliche Stelle</h2>
      <p className="mt-3">
        Verantwortliche Stelle für die Verarbeitung personenbezogener Daten auf dieser
        Website ist:
      </p>
      <p className="mt-3">
        {site.owner}
        <br />
        {site.legalName}
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
        <br />
        E-Mail: {site.email}
        <br />
        Telefon: {site.phones.mobile.display}
      </p>

      <h2 className="mt-10 font-display text-base font-bold uppercase">2. Hosting und Server-Logs</h2>
      <p className="mt-3">
        Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige
        Server-Logfiles (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite,
        Browsertyp). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
        zur sicheren Bereitstellung der Website.
      </p>

      <h2 className="mt-10 font-display text-base font-bold uppercase">
        3. Keine Cookies, kein Tracking
      </h2>
      <p className="mt-3">
        Diese Website setzt keine Analyse- oder Marketing-Cookies. Es gibt kein
        Kontaktformular, keine eingebetteten Google-Karten und keine Schriftarten von
        Google-Servern. Schriften und Icons werden lokal ausgeliefert.
      </p>

      <h2 className="mt-10 font-display text-base font-bold uppercase">4. Kontaktaufnahme</h2>
      <p className="mt-3">
        Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir die von Ihnen
        angegebenen Daten zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b oder lit. f
        DSGVO). Eine Weitergabe an Dritte erfolgt nicht, sofern keine gesetzliche Pflicht
        besteht.
      </p>

      <h2 className="mt-10 font-display text-base font-bold uppercase">5. Externe Links</h2>
      <p className="mt-3">
        Links zu Google Maps oder Google-Bewertungen öffnen Angebote Dritter. Für deren
        Datenverarbeitung gelten die Datenschutzhinweise des jeweiligen Anbieters.
      </p>

      <h2 className="mt-10 font-display text-base font-bold uppercase">6. Ihre Rechte</h2>
      <p className="mt-3">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
        Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem besteht ein
        Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
      </p>
    </LegalPage>
  );
}
