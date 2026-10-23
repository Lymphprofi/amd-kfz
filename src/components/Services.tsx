import {
  Bike,
  Car,
  CircleDot,
  ClipboardCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const services: {
  title: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    title: "PKW-Service & Reparaturen",
    icon: Car,
    items: [
      "Reparaturen transparent und fachgerecht",
      "Inspektion nach Herstellervorgaben",
      "Klimaservice",
      "Bremsen",
    ],
  },
  {
    title: "Motorrad-Spezialist",
    icon: Bike,
    items: [
      "Meisterkompetenz Zweirad",
      "Wartung, Pflege und Reparatur",
      "Reifen und Räder",
    ],
  },
  {
    title: "Reifen & Räder",
    icon: CircleDot,
    items: ["Montage", "Wuchten", "Einlagerung", "moderne Montier- und Wuchtgeräte"],
  },
  {
    title: "Wartung & Pflege",
    icon: Wrench,
    items: [
      "Ölwechsel-Service",
      "Winter- und Sommer-Check",
      "Unfallinstandsetzung",
      "Fahrzeug-Checks",
    ],
  },
  {
    title: "TÜV & HU-Vorbereitung",
    icon: ClipboardCheck,
    items: [
      "Wir machen Ihr Fahrzeug fertig für HU/AU",
      "damit unnötige Nachprüfungsgebühren entfallen",
    ],
  },
];

export function Services() {
  return (
    <section id="leistungen" className="scroll-mt-24 bg-soft py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-bold tracking-[0.2em] text-accent uppercase">
          Werkstattleistungen
        </p>
        <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-charcoal uppercase sm:text-3xl lg:text-4xl">
          Alles aus einer Hand
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Freie Meisterwerkstatt für PKW, Motorrad und Roller – fair erklärt, klar
          angeboten, sauber umgesetzt.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const wide = index >= 3;
            return (
              <article
                key={service.title}
                className={`rounded-xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  wide ? "xl:col-span-3" : "xl:col-span-2"
                }`}
              >
                <div className="mb-4 inline-flex rounded-xl bg-soft p-3 text-accent">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-wide text-charcoal uppercase">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
