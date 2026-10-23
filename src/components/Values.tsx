import { Eye, Sparkles, ThumbsUp } from "lucide-react";

const values = [
  {
    title: "Fair",
    text: "Angemessene Preise, die zum Angebot passen. Überzeugen Sie sich selbst.",
    icon: ThumbsUp,
  },
  {
    title: "Transparent",
    text: "Sie entscheiden, was repariert wird. Wir erklären die Arbeit verständlich.",
    icon: Eye,
  },
  {
    title: "Modern",
    text: "Jung, modern und mit Leidenschaft bei der Sache – Auto und Motorrad.",
    icon: Sparkles,
  },
];

export function Values() {
  return (
    <section className="bg-graphite py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-white uppercase sm:text-3xl">
          Das zeichnet uns aus
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <Icon className="mx-auto size-8 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold tracking-wide text-white uppercase">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{value.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
