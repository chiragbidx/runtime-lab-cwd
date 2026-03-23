import { getContent } from "@/content/content";
import { Lightbulb, Hammer, Send } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  lightbulb: <Lightbulb className="h-9 w-9 text-gradient" />,
  hammer: <Hammer className="h-9 w-9 text-gradient" />,
  send: <Send className="h-9 w-9 text-gradient" />,
};

export const ProcessSection = () => {
  const { process } = getContent();

  return (
    <section
      id="process"
      className="py-20 px-5 sm:px-0 bg-section-gradient"
      aria-labelledby="process-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient text-balance"
          id="process-title"
        >
          {process.heading}
        </h2>
        <div className="underline-gradient mx-auto max-w-[12rem]" />
        <p className="mt-7 text-xl text-muted-foreground font-medium">
          {process.description}
        </p>
      </div>
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {process.steps.map((step) => (
          <div
            key={step.step}
            className="flex flex-col items-center gap-4 border bg-white rounded-2xl border-border p-9 glass card-hover-float shadow-glass transition"
          >
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-accent/15 to-primary/10 mb-2">
              {ICON_MAP[step.icon]}
            </span>
            <div className="text-3xl font-extrabold text-accent mb-1">
              {step.step}
            </div>
            <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
            <p className="text-center text-muted-foreground">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};