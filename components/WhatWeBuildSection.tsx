import { getContent } from "@/content/content";
import { Crown, Grid, LayoutDashboard, Store } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  crown: <Crown className="h-7 w-7 text-accent" />,
  grid: <Grid className="h-7 w-7 text-accent" />,
  "layout-dashboard": <LayoutDashboard className="h-7 w-7 text-accent" />,
  store: <Store className="h-7 w-7 text-accent" />,
};

export const WhatWeBuildSection = () => {
  const { whatWeBuild } = getContent();

  return (
    <section
      id="what-we-build"
      className="py-20 px-5 sm:px-0 bg-background"
      aria-labelledby="what-we-build-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-primary"
          id="what-we-build-title"
        >
          {whatWeBuild.heading}
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          {whatWeBuild.description}
        </p>
      </div>
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {whatWeBuild.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 bg-white rounded-xl border border-border p-7 shadow-sm"
          >
            {ICON_MAP[item.icon]}
            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
            <p className="text-muted-foreground text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};