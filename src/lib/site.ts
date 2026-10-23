export const site = {
  name: "AMD Auto Motorrad Dienst",
  legalName: "AMD Kfz Meisterwerkstatt",
  owner: "Davud Derichs",
  tagline: "Jung, modern, Meisterwerkstatt",
  headline: "Ihre Meisterwerkstatt in Freiburg.",
  intro:
    "Fair, transparent und kompetent – Ihr zuverlässiger Ansprechpartner für Auto, Motorrad & Roller.",
  meisterQuote: "…hier repariert der Meister noch selbst!",
  email: "amd-kfz@gmx.de",
  phones: {
    mobile: {
      label: "Mobil",
      display: "0162 5338400",
      href: "tel:+491625338400",
    },
    office: {
      label: "Festnetz",
      display: "0761 21430939",
      href: "tel:+4976121430939",
    },
  },
  address: {
    street: "Rufacher Str. 5A",
    zip: "79110",
    city: "Freiburg",
    full: "Rufacher Str. 5A, 79110 Freiburg",
  },
  hours: {
    weekdays: "Mo–Fr: 9:00–18:00 Uhr",
    saturday: "Sa: geschlossen",
    compact: "Mo–Fr 9–18 Uhr · Sa geschlossen",
  },
  mapsUrl: "https://maps.google.com/?cid=18047855983730060298",
  reviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJBzDO8YUbkUcRCmyjQ2Xddvo",
} as const;

export const navItems = [
  { href: "/#start", label: "Startseite" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export const reviews = [
  {
    name: "Paul Roßmaier",
    date: "Juli 2021",
    initials: "PR",
    text: "Nur zu empfehlen! Ich war zum Reifenwechseln dort und es ging super schnell, es war ein sehr freundliches Team und dazu noch ein top Preis-Leistungs-Verhältnis. Komme auf jeden Fall wieder!",
  },
  {
    name: "David Ginnuttis",
    date: "Juli 2021",
    initials: "DG",
    text: "Sehr freundlich, serviceorientiert, kompetent und schnell. Die undichte Stelle wurde zutreffend gefunden und fachgerecht repariert – nachhaltig behoben. Dazu kommen der unkomplizierte Service und absolut faire Preise.",
  },
  {
    name: "Maurice",
    date: "Juli 2024",
    initials: "M",
    text: "Termin per Telefon unkompliziert, freundlicher Empfang, Wagen ausgesaugt – und sogar ein Eis zur Abholung. Der Preis für den Ölwechsel war wirklich gut. Ich habe meine neue Werkstatt in Freiburg gefunden.",
  },
] as const;
