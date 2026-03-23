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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-30 bg-background w-full top-0 left-0 transition-all ${
        isSticky ? "fixed shadow-lg" : "relative"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <div className="text-2xl font-extrabold tracking-tight text-primary">
          <Link href="/" aria-label={navbar.brand}>
            {navbar.brand}
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navbar.links.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className="hover:text-accent-foreground transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={navbar.ctaHref}
            className="px-5 py-2 rounded-md font-bold bg-accent text-white hover:bg-primary transition-colors"
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
          className="w-full text-center py-2 rounded-lg bg-accent text-lg font-bold text-white shadow-md hover:bg-primary transition"
        >
          {navbar.ctaLabel}
        </Link>
      </div>
      {/* Mobile nav drawer or popover is omitted for brevity */}
    </header>
  );
};