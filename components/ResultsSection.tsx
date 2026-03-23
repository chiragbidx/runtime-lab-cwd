import { getContent } from "@/content/content";
import { Quote } from "lucide-react";

export const ResultsSection = () => {
  const { results } = getContent();

  return (
    <section
      id="results"
      className="py-20 px-5 sm:px-0 bg-white"
      aria-labelledby="results-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-primary"
          id="results-title"
        >
          {results.heading}
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          {results.description}
        </p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto flex flex-col gap-10">
        {results.testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="relative bg-background border border-border rounded-xl p-7 shadow-md text-left"
          >
            <Quote className="absolute left-4 top-5 h-6 w-6 text-accent opacity-60" />
            <p className="pl-12 text-lg italic text-muted-foreground">{t.text}</p>
            <footer className="mt-4 pl-12 flex items-center gap-3 text-sm mt-3">
              <span className="font-bold text-primary">{t.name}</span>
              <span className="text-muted-foreground">| {t.company}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};