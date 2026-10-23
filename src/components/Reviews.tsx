import { Star } from "lucide-react";
import { reviews, site } from "@/lib/site";

export function Reviews() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-bold tracking-[0.2em] text-accent uppercase">
              Google-Bewertungen
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-charcoal uppercase sm:text-3xl lg:text-4xl">
              Ausgezeichneter Service in Freiburg
            </h2>
          </div>
          <a
            href={site.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-soft px-4 py-3"
          >
            <span className="flex text-amber-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-semibold text-charcoal">
              Google-Bewertungen ansehen
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-xl border border-border bg-soft p-6 shadow-sm"
            >
              <div className="flex text-amber-400" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal">
                „{review.text}“
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-graphite font-display text-xs font-bold text-white">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{review.name}</p>
                  <p className="text-xs text-muted">{review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
