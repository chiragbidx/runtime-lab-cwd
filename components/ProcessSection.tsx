import { getContent } from "@/content/content";
import { Lightbulb, Hammer, Send } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  lightbulb: <Lightbulb className="h-7 w-7 text-accent" />,
  hammer: <Hammer className="h-7 w-7 text-accent" />,
  send: <Send className="h-7 w-7 text-accent" />,
};

export const ProcessSection = () => {
  const { process } = getContent();

  return (
    <section
      id="process"
      className="py-20 px-5 sm:px-0 bg-background"
      aria-labelledby="process-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-primary"
          id="process-title"
        >
          {process.heading}
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          {process.description}
        </p>
      </div>
      <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {process.steps.map((step) => (
          <div
            key={step.step}
            className="flex flex-col items-center gap-4 border bg-white rounded-xl border-border p-7 shadow-md"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-accent bg-opacity-10 mb-2">
              {ICON_MAP[step.icon]}
            </span>
            <div className="text-3xl font-bold text-accent mb-1">
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