import { getContent } from "@/content/content";
import Link from "next/link";

export const FinalCtaSection = () => {
  const { finalCta } = getContent();

  return (
    <section className="bg-accent py-14 px-5 sm:px-0 flex justify-center" id="book-call">
      <div className="max-w-3xl w-full flex flex-col items-center gap-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
          {finalCta.text}
        </h2>
        <Link href={finalCta.ctaHref}>
          <span className="inline-block px-7 py-4 rounded-xl bg-primary text-white text-lg font-bold shadow-lg hover:bg-accent transition-colors">
            {finalCta.ctaLabel}
          </span>
        </Link>
      </div>
    </section>
  );
};