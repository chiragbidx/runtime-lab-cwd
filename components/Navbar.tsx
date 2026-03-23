"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { getContent } from "@/content/content";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { navbar } = getContent();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-40 w-full top-0 left-0 transition-all ${
        isSticky ? "fixed backdrop-blur-[8px] glass shadow-accent-lg" : "relative"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-6 transition">
        <div className="flex items-center gap-3">
          <span className="block h-9 w-9 rounded-lg bg-gradient-to-br from-accent to-primary shadow-accent-lg" />
          <div className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-gradient text-balance bg-clip-text">
            <Link href="/" aria-label={navbar.brand}>
              {navbar.brand}
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 ml-8">
          {navbar.links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-semibold px-1 py-1 text-muted-foreground transition-colors hover:text-accent focus:text-accent text-lg"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4 ml-8">
          <Link
            href={navbar.ctaHref}
            className="px-6 py-2 rounded-full font-bold bg-accent hover:bg-primary transition-colors text-white shadow-accent-lg text-base"
          >
            {navbar.ctaLabel}
          </Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
      <div className="md:hidden bg-background border-t border-border px-4 py-2 flex justify-center sticky bottom-0 z-30">
        <Link
          href={navbar.ctaHref}
          className="w-full text-center py-2 rounded-xl bg-accent text-lg font-bold text-white shadow-accent-lg hover:bg-primary transition"
        >
          {navbar.ctaLabel}
        </Link>
      </div>
    </header>
  );
};