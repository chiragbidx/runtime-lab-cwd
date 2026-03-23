import type { ReactNode } from "react";

export interface NavbarContent {
  brand: string;
  links: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}

export interface HeroContent {
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface WhyLitestackContent {
  heading: string;
  description: string;
  items: {
    icon: string;
    title: string;
    text: string;
  }[];
}

export interface WhatWeBuildContent {
  heading: string;
  description: string;
  items: {
    icon: string;
    title: string;
    text: string;
  }[];
}

export interface ProcessStep {
  icon: string;
  step: string;
  title: string;
  text: string;
}

export interface ProcessContent {
  heading: string;
  description: string;
  steps: ProcessStep[];
}

export interface ResultsContent {
  heading: string;
  description: string;
  testimonials: {
    name: string;
    text: string;
    company: string;
    avatar?: string;
  }[];
}

export interface FinalCtaContent {
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface SiteContent {
  navbar: NavbarContent;
  hero: HeroContent;
  whyLitestack: WhyLitestackContent;
  whatWeBuild: WhatWeBuildContent;
  process: ProcessContent;
  results: ResultsContent;
  finalCta: FinalCtaContent;
}

export const defaultContent: SiteContent = {
  navbar: {
    brand: "Litestack",
    links: [
      { label: "Why Litestack", href: "#why-litestack" },
      { label: "What We Build", href: "#what-we-build" },
      { label: "Process", href: "#process" },
      { label: "Results", href: "#results" },
    ],
    ctaLabel: "Book Call",
    ctaHref: "#book-call",
  },
  hero: {
    heading: "Launch Your App Fast—Powered by Bubble",
    subheading:
      "Build robust MVPs and custom web apps in weeks, not months. Litestack’s Bubble experts turn your ideas into reality—no code, no hassle.",
    primaryCta: {
      label: "Book a Free Discovery Call",
      href: "#book-call",
    },
    secondaryCta: {
      label: "See Our Work",
      href: "#results",
    },
  },
  whyLitestack: {
    heading: "Why Bubble, Why Litestack",
    description:
      "Discover how no-code technology and our expert process accelerate your product launch—while keeping quality and flexibility high.",
    items: [
      {
        icon: "rocket",
        title: "Faster Launches",
        text: "Get your MVP or custom app to market in record time using Bubble and Litestack’s proven methodology.",
      },
      {
        icon: "settings",
        title: "Flexible & Powerful",
        text: "Bubble lets us build scalable web apps with robust logic and integrations—no code holding you back.",
      },
      {
        icon: "award",
        title: "Quality Results",
        text: "With deep Bubble expertise, we deliver reliable, polished products that are easy to scale.",
      },
    ],
  },
  whatWeBuild: {
    heading: "What We Build",
    description:
      "MVPs, SaaS platforms, internal tools, and marketplaces—explore the products we deliver faster and better.",
    items: [
      {
        icon: "crown",
        title: "MVPs & Prototypes",
        text: "Launch lean, validated products with full-feature prototypes—ready for real users.",
      },
      {
        icon: "grid",
        title: "SaaS Platforms",
        text: "Cloud-native platforms built quickly for modern business models. Launch. Iterate. Scale.",
      },
      {
        icon: "layout-dashboard",
        title: "Internal Tools",
        text: "Automate processes and empower your team with powerful custom solutions.",
      },
      {
        icon: "store",
        title: "Marketplaces",
        text: "Multi-sided platforms matched to your business, supporting payments, messaging, and more.",
      },
    ],
  },
  process: {
    heading: "Our Process in 3 Steps",
    description:
      "From ideation to launch: a transparent, proven workflow built for speed and clarity.",
    steps: [
      {
        icon: "lightbulb",
        step: "01",
        title: "Discovery & Scope",
        text: "We listen to your goals and map out the best MVP or app solution together.",
      },
      {
        icon: "hammer",
        step: "02",
        title: "Build & Iterate",
        text: "Our team designs and builds rapidly on Bubble—sharing progress and iterating fast.",
      },
      {
        icon: "send",
        step: "03",
        title: "Launch & Support",
        text: "We ship your app, set up analytics and support, and enable easy handoff or ongoing upgrades.",
      },
    ],
  },
  results: {
    heading: "Real Results",
    description:
      "Trusted by startups and growing businesses—see how Litestack enables faster launches and real ROI.",
    testimonials: [
      {
        name: "Priya S.",
        text: "Litestack took our SaaS idea from concept to customers in less than a month—total transparency, zero-code headaches.",
        company: "Early Stage Founder",
      },
      {
        name: "Alex T.",
        text: "We built an internal dashboard, launched in record time, and users loved it. Would partner with Litestack again.",
        company: "Ops Lead, Series A",
      },
    ],
  },
  finalCta: {
    text: "Ready to transform your idea into a real product?",
    ctaLabel: "Book a Free Discovery Call",
    ctaHref: "#book-call",
  },
};

export function getContent(): SiteContent {
  return defaultContent;
}