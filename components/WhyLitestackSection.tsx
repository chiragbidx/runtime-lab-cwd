import { getContent } from "@/content/content";
import { Rocket, Settings, Award } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  rocket: <Rocket className="h-10 w-10 text-gradient" />,
  settings: <Settings className="h-10 w-10 text-gradient" />,
  award: <Award className="h-10 w-10 text-gradient" />,
};

export const WhyLitestackSection = () => {
  const { whyLitestack } = getContent();

  return (
    <section
      id="why-litestack"
      className="pt-20 pb-16 px-5 sm:px-0 gradient-bg"
      aria-labelledby="why-litestack-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient text-balance"
          id="why-litestack-title"
        >
          {whyLitestack.heading}
        </h2>
        <div className="underline-gradient mx-auto max-w-[12rem]" />
        <p className="mt-7 text-xl text-muted-foreground font-medium">
          {whyLitestack.description}
        </p>
      </div>
      <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-9 md:gap-14">
        {whyLitestack.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 bg-white rounded-2xl border border-border p-8 glass card-hover-float shadow-glass transition"
          >
            <div className="rounded-full bg-gradient-to-br from-accent/10 to-primary/5 mb-3 flex items-center justify-center p-0.5">
              {ICON_MAP[item.icon]}
            </div>
            <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
            <p className="text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};