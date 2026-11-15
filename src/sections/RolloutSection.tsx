import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { RevealText } from '../components/ui/RevealText';

interface RolloutSectionProps {
  reducedMotion: boolean;
}

export const RolloutSection: React.FC<RolloutSectionProps> = ({ reducedMotion }) => {
  const { t } = useLanguage();

  return (
    <section
      id="sec-15"
      className="border-t border-[#3D332A]/10 bg-[#EBE4D8]/60 px-4 py-24 text-[#3D332A] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <RevealText reducedMotion={reducedMotion} className="mb-14 max-w-3xl">
          <div className="mb-3 flex items-center gap-3 text-xs tracking-[0.16em] text-[#7A6021]">
            <span className="font-mono font-semibold">{t.rollout.sectionNum}</span>
            <span aria-hidden="true">·</span>
            <span>{t.rollout.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[#3D332A] [text-wrap:balance] sm:text-4xl">
            {t.rollout.title}
          </h2>
          <p className="mt-3 text-base text-[#6B5B4E]">{t.rollout.subtitle}</p>
        </RevealText>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.rollout.weeks.map((item, idx) => (
            <RevealText key={idx} delay={idx * 0.08} reducedMotion={reducedMotion}>
              <div className="flex h-full min-w-0 flex-col justify-between rounded-xl border border-[#3D332A]/15 bg-[#F5F1EB] p-6">
                <div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#7A6021]">
                    {item.week}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium text-[#3D332A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B5B4E]">
                    {item.description}
                  </p>
                </div>
                <div className="hairline-gold-h mt-6" />
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};
