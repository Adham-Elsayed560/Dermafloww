import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { IMAGES } from '../lib/images';
import { RevealText } from '../components/ui/RevealText';
import { EditorialImage } from '../components/ui/EditorialImage';

interface SolutionSectionProps {
  reducedMotion: boolean;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ reducedMotion }) => {
  const { t } = useLanguage();

  return (
    <section
      id="sec-05"
      className="relative border-t border-[#3D332A]/10 bg-[#EBE4D8]/60 px-4 py-24 text-[#3D332A] sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Editorial Overview */}
          <div className="min-w-0 lg:col-span-6">
            <RevealText reducedMotion={reducedMotion}>
              <div className="mb-3 flex items-center gap-3 text-xs tracking-[0.16em] text-[#7A6021]">
                <span className="font-mono font-semibold">{t.solution.sectionNum}</span>
                <span aria-hidden="true">·</span>
                <span>{t.solution.eyebrow}</span>
              </div>
              <h2 className="font-display text-4xl font-medium tracking-tight text-[#3D332A] [text-wrap:balance] sm:text-5xl">
                {t.solution.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#6B5B4E] sm:text-lg">
                {t.solution.lead}
              </p>
            </RevealText>

            <div className="mt-10 space-y-6 border-t border-[#3D332A]/12 pt-8">
              {t.solution.pillars.map((pillar, idx) => (
                <RevealText key={idx} delay={idx * 0.08} reducedMotion={reducedMotion}>
                  <div className="border-b border-[#3D332A]/10 pb-6 last:border-b-0">
                    <p className="font-mono text-xs font-medium text-[#7A6021]">{pillar.label}</p>
                    <h3 className="mt-1.5 font-display text-xl font-medium text-[#3D332A]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B5B4E] sm:text-base">
                      {pillar.body}
                    </p>
                  </div>
                </RevealText>
              ))}
            </div>

            {/* Honest Scope Discipline Note */}
            <RevealText delay={0.18} reducedMotion={reducedMotion}>
              <div className="mt-6 rounded-xl border border-[#3D332A]/15 bg-[#F5F1EB] p-5">
                <p className="font-mono text-xs font-semibold text-[#7A6021]">
                  {t.solution.scopeTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5B4E]">
                  {t.solution.scopeBody}
                </p>
              </div>
            </RevealText>
          </div>

          {/* Right Editorial Photography Grid */}
          <div className="min-w-0 space-y-6 lg:col-span-6">
            <EditorialImage
              src={IMAGES.overviewInfographic.src}
              alt={t.solution.images.suiteAlt}
              width={IMAGES.overviewInfographic.width}
              height={IMAGES.overviewInfographic.height}
              caption={t.solution.images.suiteCaption}
              reducedMotion={reducedMotion}
              className="aspect-[16/9]"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <EditorialImage
                src={IMAGES.brandHands.src}
                alt={t.solution.images.handsAlt}
                width={IMAGES.brandHands.width}
                height={IMAGES.brandHands.height}
                caption={t.solution.images.handsCaption}
                reducedMotion={reducedMotion}
                className="aspect-[4/3]"
              />
              <EditorialImage
                src={IMAGES.dermatoscope.src}
                alt={t.solution.images.dermatoscopeAlt}
                width={IMAGES.dermatoscope.width}
                height={IMAGES.dermatoscope.height}
                caption={t.solution.images.dermatoscopeCaption}
                reducedMotion={reducedMotion}
                className="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
