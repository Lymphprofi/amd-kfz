import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der AMD Kfz Meisterwerkstatt in Freiburg.",
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2 className="font-display text-base font-bold uppercase">Angaben gemäß § 5 DDG</h2>
      <p className="mt-3">
        {site.owner}
        <br />
        {site.legalName}
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
      </p>

      <h2 className="mt-10 font-display text-base font-bold uppercase">Kontakt</h2>
      <p className="mt-3">
        Telefon: {site.phones.mobile.display}
        <br />
        E-Mail: {site.email}
      </p>

      <h2 className="mt-10 font-display text-base font-bold uppercase">Aufsichtsbehörde</h2>
      <p className="mt-3">
        Gewerbeamt Freiburg im Breisgau
        <br />
        Basler Straße 2
        <br />
        79100 Freiburg
      </p>

      <h2 className="mt-10 font-display text-base font-bold uppercase">
        Berufsbezeichnung und berufsrechtliche Regelungen
      </h2>
      <p className="mt-3">
        Berufsbezeichnung: KFZ Handel mit Werkstatt
        <br />
        Zuständige Kammer: Handelskammer und Handwerkskammer Freiburg
        <br />
        Verliehen durch: Baden-Württemberg
        <br />
        Es gelten die Regelungen der Handwerksordnung, einsehbar unter{" "}
        <a
          href="https://www.gesetze-im-internet.de/hwo/"
          className="text-accent underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          gesetze-im-internet.de/hwo
        </a>
        .
      </p>

      <p className="mt-10">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
