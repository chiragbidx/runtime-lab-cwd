import { getContent } from "@/content/content";
import Link from "next/link";

export const FinalCtaSection = () => {
  const { finalCta } = getContent();

  return (
    <section className="bg-cta-gradient py-14 px-5 sm:px-0 flex justify-center" id="book-call">
      <div className="max-w-3xl w-full flex flex-col items-center gap-7 text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white text-balance">
          {finalCta.text}
        </h2>
        <Link href={finalCta.ctaHref}>
          <span className="inline-block px-9 py-5 rounded-2xl bg-white text-accent text-xl font-extrabold shadow-accent-lg hover:bg-accent hover:text-white hover:shadow-xl transition-colors duration-150">
            {finalCta.ctaLabel}
          </span>
        </Link>
      </div>
    </section>
  );
};