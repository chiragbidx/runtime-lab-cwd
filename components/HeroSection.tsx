import { Button } from "@/components/ui/button";
import { getContent } from "@/content/content";
import Link from "next/link";

export const HeroSection = () => {
  const { hero } = getContent();

  return (
    <section className="relative w-full flex min-h-[75vh] flex-col items-center justify-center gap-9 px-6 pb-12 pt-24 text-center bg-gradient-to-br from-background via-white to-[#e6eaff]">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden>
        <div className="w-[80vw] h-[42vw] bg-gradient-to-br from-primary/15 to-accent/5 translate-x-16 translate-y-14 rounded-full blur-[82px] opacity-80"></div>
      </div>
      <h1 className="relative z-10 max-w-3xl text-5xl/[1.13] sm:text-6xl/[1.11] font-black tracking-tight text-balance text-gradient">
        {hero.heading}
      </h1>
      <p className="relative z-10 max-w-xl text-xl sm:text-2xl font-medium text-muted-foreground text-balance">
        {hero.subheading}
      </p>
      <div className="relative z-10 flex flex-col xs:flex-row items-center gap-5 mt-7">
        <Link href={hero.primaryCta.href}>
          <Button className="h-16 px-8 text-xl font-extrabold rounded-2xl shadow-accent-lg bg-accent hover:bg-primary transition-colors">
            {hero.primaryCta.label}
          </Button>
        </Link>
        <Link href={hero.secondaryCta.href}>
          <Button
            variant="ghost"
            className="h-16 px-8 text-xl font-bold rounded-2xl text-accent hover:underline"
          >
            {hero.secondaryCta.label}
          </Button>
        </Link>
      </div>
    </section>
  );
};