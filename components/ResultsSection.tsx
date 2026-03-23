import { getContent } from "@/content/content";
import { Quote } from "lucide-react";

export const ResultsSection = () => {
  const { results } = getContent();

  return (
    <section
      id="results"
      className="pt-20 pb-16 px-5 sm:px-0 bg-white"
      aria-labelledby="results-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient text-balance"
          id="results-title"
        >
          {results.heading}
        </h2>
        <div className="underline-gradient mx-auto max-w-[10rem]" />
        <p className="mt-8 text-xl text-muted-foreground font-medium">
          {results.description}
        </p>
      </div>
      <div className="mt-16 max-w-3xl mx-auto flex flex-col gap-12">
        {results.testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="relative bg-gradient-to-br from-white/80 to-background border border-border rounded-2xl p-8 glass shadow-glass text-left card-hover-float transition"
          >
            <Quote className="absolute left-4 top-6 h-7 w-7 text-accent opacity-70" />
            <p className="pl-14 text-xl italic text-muted-foreground">{t.text}</p>
            <footer className="mt-5 pl-14 flex items-center gap-3 text-base mt-3">
              <span className="font-bold text-primary">{t.name}</span>
              <span className="text-muted-foreground">| {t.company}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};