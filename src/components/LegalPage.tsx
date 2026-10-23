import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="bg-soft">
      <div className="bg-graphite px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="max-w-full font-display text-2xl font-extrabold tracking-tight hyphens-auto text-white sm:text-3xl lg:text-4xl">
            {title}
          </h1>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-charcoal sm:px-6">
        {children}
      </article>
    </main>
  );
}
