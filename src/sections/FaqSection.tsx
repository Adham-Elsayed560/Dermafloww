import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { RevealText } from '../components/ui/RevealText';

interface FaqSectionProps {
  reducedMotion: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ reducedMotion }) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="sec-16"
      className="bg-[#F5F1EB] px-4 py-24 text-[#3D332A] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <RevealText reducedMotion={reducedMotion} className="mb-12">
          <div className="mb-3 flex items-center gap-3 text-xs tracking-[0.16em] text-[#7A6021]">
            <span className="font-mono font-semibold">{t.faq.sectionNum}</span>
            <span aria-hidden="true">·</span>
            <span>{t.faq.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[#3D332A] [text-wrap:balance] sm:text-4xl">
            {t.faq.title}
          </h2>
        </RevealText>

        <div className="divide-y divide-[#3D332A]/15 border-y border-[#3D332A]/15">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 text-start font-display text-lg font-medium text-[#3D332A] transition-colors hover:text-[#7A6021] sm:text-xl"
                >
                  <span>{item.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3D332A]/20 text-[#7A6021]">
                    {isOpen ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={
                        reducedMotion
                          ? { opacity: 1 }
                          : { height: 'auto', opacity: 1 }
                      }
                      exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={
                        reducedMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 280, damping: 28 }
                      }
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pr-8 text-sm leading-relaxed text-[#6B5B4E] sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
