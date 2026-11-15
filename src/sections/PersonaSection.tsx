import React from 'react';
import { MapPin, Building2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { RevealText } from '../components/ui/RevealText';

interface PersonaSectionProps {
  reducedMotion: boolean;
}

export const PersonaSection: React.FC<PersonaSectionProps> = ({ reducedMotion }) => {
  const { t } = useLanguage();

  return (
    <section
      id="sec-13"
      className="border-t border-[#3D332A]/10 bg-[#EBE4D8]/55 px-4 py-24 text-[#3D332A] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <RevealText reducedMotion={reducedMotion} className="mb-10 max-w-3xl">
          <div className="mb-3 flex items-center gap-3 text-xs tracking-[0.16em] text-[#7A6021]">
            <span className="font-mono font-semibold">{t.persona.sectionNum}</span>
            <span aria-hidden="true">·</span>
            <span>{t.persona.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[#3D332A] [text-wrap:balance] sm:text-4xl">
            {t.persona.title}
          </h2>
        </RevealText>

        <RevealText delay={0.1} reducedMotion={reducedMotion}>
          <div className="rounded-2xl border border-[#3D332A]/15 bg-[#3D332A] p-6 text-[#F5F1EB] shadow-[0_24px_60px_-24px_rgba(43,35,28,0.45)] sm:p-10">
            {/* Explicit Persona Label (Not a Testimonial) */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#C9A84C]/25 pb-5">
              <span className="font-mono text-xs tracking-wider text-[#E8D3A0]">
                {t.persona.label}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#E8D3A0]/85">
                <MapPin className="h-3.5 w-3.5 text-[#C9A84C]" aria-hidden="true" />
                {t.persona.location}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A84C]/40 bg-[#2B231C]">
                  <Building2 className="h-6 w-6 text-[#E8D3A0]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-medium text-[#F5F1EB]">
                  {t.persona.role}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F5F1EB]/78">
                  {t.persona.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
                <div className="rounded-xl border border-[#F5F1EB]/12 bg-[#2B231C]/75 p-5">
                  <h4 className="font-mono text-xs font-medium tracking-wider text-[#E8D3A0]">
                    {t.persona.dailyRealitiesTitle}
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#F5F1EB]/82">
                    {t.persona.dailyRealities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-[#C9A84C]/35 bg-[#1E2229] p-5">
                  <h4 className="font-mono text-xs font-medium tracking-wider text-[#E8D3A0]">
                    {t.persona.whatDermaflowProtectsTitle}
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#F5F1EB]/90">
                    {t.persona.whatDermaflowProtects.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8D3A0]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
};
