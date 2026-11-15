import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { TiltCard } from '../components/ui/TiltCard';
import { RevealText } from '../components/ui/RevealText';

interface ProblemSectionProps {
  reducedMotion: boolean;
}

const ProblemMiniVisual: React.FC<{ id: string; reducedMotion: boolean }> = ({
  id,
  reducedMotion,
}) => {
  if (id === 'late-replies') {
    return (
      <svg viewBox="0 0 120 56" className="h-12 w-28" aria-hidden="true">
        <circle cx="28" cy="28" r="18" fill="none" stroke="#8F7330" strokeWidth="1.5" />
        <line
          x1="28"
          y1="28"
          x2="28"
          y2="16"
          stroke="#3D332A"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="28"
          x2="38"
          y2="28"
          stroke="#C9A84C"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          {!reducedMotion && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 28 28"
              to="360 28 28"
              dur="8s"
              repeatCount="indefinite"
            />
          )}
        </line>
        <rect x="60" y="14" width="46" height="12" rx="4" fill="#3D332A" opacity="0.14" />
        <rect x="66" y="31" width="40" height="10" rx="4" fill="#C9A84C" opacity="0.45" />
      </svg>
    );
  }

  if (id === 'wasted-ads') {
    return (
      <svg viewBox="0 0 120 56" className="h-12 w-28" aria-hidden="true">
        <path
          d="M 18 10 L 44 34 L 44 46 M 78 10 L 52 34 L 52 46"
          fill="none"
          stroke="#8F7330"
          strokeWidth="1.6"
          strokeDasharray="4 3"
        />
        <circle cx="48" cy="14" r="5" fill="#C9A84C">
          {!reducedMotion && (
            <animate attributeName="cy" values="12;42;12" dur="3.4s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="32" cy="44" r="3.5" fill="#3D332A" opacity="0.3" />
        <circle cx="68" cy="46" r="3.5" fill="#3D332A" opacity="0.3" />
      </svg>
    );
  }

  if (id === 'reception-cost') {
    return (
      <svg viewBox="0 0 120 56" className="h-12 w-28" aria-hidden="true">
        <circle cx="34" cy="28" r="18" fill="none" stroke="rgba(61,51,42,0.16)" strokeWidth="5" />
        <circle
          cx="34"
          cy="28"
          r="18"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="5"
          strokeDasharray="38 114"
        />
        <rect x="66" y="18" width="42" height="5" rx="2.5" fill="#3D332A" opacity="0.7" />
        <rect x="66" y="29" width="28" height="5" rx="2.5" fill="#8F7330" opacity="0.45" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 56" className="h-12 w-28" aria-hidden="true">
      <polyline
        points="8,36 28,36 36,16 44,44 52,22 60,36 108,36"
        fill="none"
        stroke="#8F7330"
        strokeWidth="1.6"
      />
      <circle cx="84" cy="24" r="4" fill="#C9A84C">
        {!reducedMotion && (
          <animate attributeName="opacity" values="1;0.25;1" dur="2.2s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="96" cy="42" r="3" fill="#3D332A" opacity="0.35" />
    </svg>
  );
};

export const ProblemSection: React.FC<ProblemSectionProps> = ({ reducedMotion }) => {
  const { t } = useLanguage();

  return (
    <section
      id="sec-04"
      className="relative bg-[#F5F1EB] px-4 py-24 text-[#3D332A] sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <RevealText reducedMotion={reducedMotion} className="mb-14 max-w-3xl">
          <div className="mb-3 flex items-center gap-3 text-xs tracking-[0.16em] text-[#7A6021]">
            <span className="font-mono font-semibold">{t.problems.sectionNum}</span>
            <span aria-hidden="true">·</span>
            <span>{t.problems.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[#3D332A] [text-wrap:balance] sm:text-4xl lg:text-5xl">
            {t.problems.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6B5B4E]">
            {t.problems.subtitle}
          </p>
        </RevealText>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.problems.items.map((item, idx) => (
            <RevealText key={item.id} delay={idx * 0.08} reducedMotion={reducedMotion}>
              <TiltCard reducedMotion={reducedMotion} className="h-full p-6 sm:p-8">
                <div className="flex h-full flex-col justify-between gap-6">
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#3D332A]/10 pb-4">
                      <span className="font-mono text-xs font-semibold tracking-widest text-[#7A6021]">
                        {item.num}
                      </span>
                      <ProblemMiniVisual id={item.id} reducedMotion={reducedMotion} />
                    </div>
                    <h3 className="font-display text-2xl font-medium text-[#3D332A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#6B5B4E] sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  <p className="font-mono text-xs text-[#7A6021]">{item.metricLabel}</p>
                </div>
              </TiltCard>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};
