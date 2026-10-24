import Image from "next/image";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="ueber-uns" className="scroll-mt-24 bg-soft py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm lg:aspect-[5/6]">
          <Image
            src={asset("/images/meister.png")}
            alt="Meister Davud Derichs in der AMD Werkstatt in Freiburg"
            fill
            className="object-cover object-[center_15%]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div>
          <p className="font-display text-xs font-bold tracking-[0.2em] text-accent uppercase">
            Über uns
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-charcoal uppercase sm:text-3xl lg:text-4xl">
            Willkommen bei AMD
          </h2>
          <p className="mt-6 text-lg font-medium text-charcoal">{site.meisterQuote}</p>
          <div className="mt-5 space-y-4 text-muted leading-relaxed">
            <p>
              Als freie Meisterwerkstatt in Freiburg-Betzenhausen kümmern wir uns um Ihr
              Fahrzeug – egal ob PKW, Motorrad oder Roller. Jung, modern und mit
              Leidenschaft bei der Sache.
            </p>
            <p>
              Sie entscheiden, was repariert wird. Wir erklären die Arbeit verständlich,
              oft mit Fotos der betroffenen Stellen, und halten ausgebaute Teile bis zur
              Abholung bereit. Faire Preise, persönlicher Kontakt und schnelle Hilfe,
              wenn es darauf ankommt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
