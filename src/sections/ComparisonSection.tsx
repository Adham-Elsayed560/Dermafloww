import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Minus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { RevealText } from '../components/ui/RevealText';

gsap.registerPlugin(ScrollTrigger);

interface ComparisonSectionProps {
  reducedMotion: boolean;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ reducedMotion }) => {
  const { t, locale } = useLanguage();
  const tableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = tableRef.current;
    if (!el || reducedMotion) return;

    const ctx = gsap.context(() => {
      const checks = el.querySelectorAll('.comparison-check');
      gsap.fromTo(
        checks,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.55,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [reducedMotion, locale]);

  return (
    <section
      id="sec-12"
      className="bg-[#F5F1EB] px-4 py-24 text-[#3D332A] sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <RevealText reducedMotion={reducedMotion} className="mb-12 max-w-3xl">
          <div className="mb-3 flex items-center gap-3 text-xs tracking-[0.16em] text-[#7A6021]">
            <span className="font-mono font-semibold">{t.comparison.sectionNum}</span>
            <span aria-hidden="true">·</span>
            <span>{t.comparison.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[#3D332A] [text-wrap:balance] sm:text-4xl lg:text-5xl">
            {t.comparison.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6B5B4E]">
            {t.comparison.subtitle}
          </p>
        </RevealText>

        <div
          ref={tableRef}
          className="overflow-hidden rounded-2xl border border-[#3D332A]/15 bg-[#FAF7F2]"
        >
          {/* Desktop Table Header */}
          <div className="hidden grid-cols-12 border-b border-[#3D332A]/12 bg-[#EBE4D8]/60 px-6 py-4 text-xs font-semibold tracking-wider text-[#6B5B4E] md:grid">
            <div className="col-span-5">{t.comparison.colFeature}</div>
            <div className="col-span-4 text-[#7A6021]">{t.comparison.colDermaflow}</div>
            <div className="col-span-3">{t.comparison.colGeneric}</div>
          </div>

          <div className="divide-y divide-[#3D332A]/10">
            {t.comparison.rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 gap-3 px-5 py-5 sm:px-6 md:grid-cols-12 md:items-center md:gap-4"
              >
                <div className="font-medium text-[#3D332A] md:col-span-5">
                  {row.feature}
                </div>

                <div className="flex items-start gap-2.5 text-sm text-[#3D332A] md:col-span-4">
                  <span className="comparison-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3D332A] text-[#E8D3A0]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{row.dermaflow}</span>
                </div>

                <div className="flex items-start gap-2.5 text-sm text-[#6B5B4E] md:col-span-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#3D332A]/20 text-[#6B5B4E]">
                    <Minus className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span>{row.generic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
