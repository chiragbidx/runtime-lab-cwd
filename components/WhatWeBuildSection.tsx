import { getContent } from "@/content/content";
import { Crown, Grid, LayoutDashboard, Store } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  crown: <Crown className="h-9 w-9 text-gradient" />,
  grid: <Grid className="h-9 w-9 text-gradient" />,
  "layout-dashboard": <LayoutDashboard className="h-9 w-9 text-gradient" />,
  store: <Store className="h-9 w-9 text-gradient" />,
};

export const WhatWeBuildSection = () => {
  const { whatWeBuild } = getContent();

  return (
    <section
      id="what-we-build"
      className="pt-20 pb-16 px-5 sm:px-0 bg-background"
      aria-labelledby="what-we-build-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient text-balance"
          id="what-we-build-title"
        >
          {whatWeBuild.heading}
        </h2>
        <div className="underline-gradient mx-auto max-w-[12rem]" />
        <p className="mt-7 text-xl text-muted-foreground font-medium">
          {whatWeBuild.description}
        </p>
      </div>
      <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
        {whatWeBuild.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 bg-white rounded-2xl border border-border p-8 glass card-hover-float shadow-glass transition"
          >
            <div className="rounded-full bg-gradient-to-br from-accent/10 to-primary/5 mb-3 flex items-center justify-center p-0.5">
              {ICON_MAP[item.icon]}
            </div>
            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
            <p className="text-muted-foreground text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};