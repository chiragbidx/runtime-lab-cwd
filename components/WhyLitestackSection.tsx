import { getContent } from "@/content/content";
import { Rocket, Settings, Award } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  rocket: <Rocket className="h-8 w-8 text-accent" />,
  settings: <Settings className="h-8 w-8 text-accent" />,
  award: <Award className="h-8 w-8 text-accent" />,
};

export const WhyLitestackSection = () => {
  const { whyLitestack } = getContent();

  return (
    <section
      id="why-litestack"
      className="py-20 px-5 sm:px-0 bg-white"
      aria-labelledby="why-litestack-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-primary"
          id="why-litestack-title"
        >
          {whyLitestack.heading}
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          {whyLitestack.description}
        </p>
      </div>
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
        {whyLitestack.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 bg-background rounded-xl border border-border p-7 shadow-sm"
          >
            {ICON_MAP[item.icon]}
            <h3 className="text-xl font-bold text-primary">{item.title}</h3>
            <p className="text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};