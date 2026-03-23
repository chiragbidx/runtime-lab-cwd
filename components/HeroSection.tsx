import { Button } from "@/components/ui/button";
import { getContent } from "@/content/content";
import Link from "next/link";

export const HeroSection = () => {
  const { hero } = getContent();

  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center gap-8 px-6 py-16 text-center bg-background">
      <h1 className="max-w-3xl text-4xl/[1.18] sm:text-5xl/[1.16] font-black tracking-tight text-primary">
        {hero.heading}
      </h1>
      <p className="max-w-xl text-lg sm:text-xl font-medium text-muted-foreground">
        {hero.subheading}
      </p>
      <div className="flex flex-col xs:flex-row items-center gap-5 mt-5">
        <Link href={hero.primaryCta.href}>
          <Button className="h-14 px-7 text-lg font-bold rounded-xl bg-accent hover:bg-primary transition-colors shadow-accent-lg">
            {hero.primaryCta.label}
          </Button>
        </Link>
        <Link href={hero.secondaryCta.href}>
          <Button
            variant="ghost"
            className="h-14 px-7 text-lg font-bold rounded-xl text-accent hover:underline"
          >
            {hero.secondaryCta.label}
          </Button>
        </Link>
      </div>
    </section>
  );
};