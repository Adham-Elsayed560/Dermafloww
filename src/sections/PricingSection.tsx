import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { RevealText } from '../components/ui/RevealText';
import { MagneticButton } from '../components/ui/MagneticButton';

interface PricingSectionProps {
  reducedMotion: boolean;
  onSelectPlan: (plan: 'basic' | 'pro') => void;
}

const AnimatedPrice: React.FC<{ value: number; reducedMotion: boolean }> = ({
  value,
  reducedMotion,
}) => {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(value);
      prevRef.current = value;
      return;
    }

    const start = prevRef.current;
    const diff = value - start;
    if (diff === 0) return;

    const startTime = performance.now();
    const duration = 380;
    let rafId = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(start + diff * eased));
      if (t < 1) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        prevRef.current = value;
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [value, reducedMotion]);

  return <span className="tabular-nums">{display.toLocaleString()}</span>;
};

export const PricingSection: React.FC<PricingSectionProps> = ({
  reducedMotion,
  onSelectPlan,
}) => {
  const { t } = useLanguage();
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section
      id="sec-14"
      className="bg-[#F5F1EB] px-4 py-24 text-[#3D332A] sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <RevealText reducedMotion={reducedMotion} className="max-w-2xl">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs tracking-[0.16em] text-[#7A6021]">
              <span className="font-mono font-semibold">{t.pricing.sectionNum}</span>
              <span aria-hidden="true">·</span>
              <span>{t.pricing.eyebrow}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold">{t.pricing.launchLabel}</span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-[#3D332A] [text-wrap:balance] sm:text-4xl lg:text-5xl">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B5B4E]">
              {t.pricing.subtitle}
            </p>
          </RevealText>

          {/* Monthly / Annual Segmented Control */}
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <div
              role="group"
              aria-label="Billing cycle"
              className="relative inline-flex rounded-xl border border-[#3D332A]/15 bg-[#EBE4D8] p-1"
            >
              {(['monthly', 'annual'] as const).map((cycle) => {
                const active = billing === cycle;
                return (
                  <button
                    key={cycle}
                    type="button"
                    onClick={() => setBilling(cycle)}
                    aria-pressed={active}
                    className={`relative z-10 min-h-[40px] whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                      active ? 'text-[#F5F1EB]' : 'text-[#3D332A]/75 hover:text-[#3D332A]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="pricing-cycle-bg"
                        transition={
                          reducedMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 420, damping: 32 }
                        }
                        className="absolute inset-0 -z-10 rounded-lg bg-[#3D332A]"
                      />
                    )}
                    {cycle === 'monthly' ? t.pricing.monthly : t.pricing.annual}
                  </button>
                );
              })}
            </div>
            <span className="font-mono text-xs font-medium text-[#7A6021]">
              {t.pricing.annualBadge}
            </span>
          </div>
        </div>

        {/* Two Launch Plans */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.pricing.plans.map((plan) => {
            const price =
              billing === 'monthly' ? plan.monthlyPrice : plan.annualMonthlyPrice;
            const isPro = Boolean(plan.featured);

            return (
              <div
                key={plan.id}
                className={`flex min-w-0 flex-col justify-between rounded-2xl border p-7 sm:p-9 ${
                  isPro
                    ? 'border-[#C9A84C]/55 bg-[#3D332A] text-[#F5F1EB] shadow-[0_28px_70px_-24px_rgba(43,35,28,0.55)]'
                    : 'border-[#3D332A]/15 bg-[#FAF7F2] text-[#3D332A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-current/12 pb-5">
                    <div>
                      <p
                        className={`font-mono text-xs tracking-wider ${
                          isPro ? 'text-[#E8D3A0]' : 'text-[#7A6021]'
                        }`}
                      >
                        {t.pricing.launchLabel}
                      </p>
                      <h3 className="mt-1 font-display text-3xl font-medium">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isPro ? 'text-[#F5F1EB]/78' : 'text-[#6B5B4E]'
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-7 flex flex-wrap items-baseline gap-2">
                    <span
                      className={`font-mono text-sm font-semibold ${
                        isPro ? 'text-[#E8D3A0]' : 'text-[#7A6021]'
                      }`}
                    >
                      {t.pricing.currency}
                    </span>
                    <span className="font-mono text-5xl font-semibold tracking-tight tabular-nums">
                      <AnimatedPrice value={price} reducedMotion={reducedMotion} />
                    </span>
                    <span
                      className={`text-sm ${
                        isPro ? 'text-[#F5F1EB]/70' : 'text-[#6B5B4E]'
                      }`}
                    >
                      {t.pricing.perMonth}
                    </span>
                  </div>

                  {billing === 'annual' && (
                    <p
                      className={`mt-1.5 font-mono text-xs ${
                        isPro ? 'text-[#E8D3A0]/85' : 'text-[#7A6021]'
                      }`}
                    >
                      {t.pricing.billedAnnually} · {t.pricing.annualBadge}
                    </p>
                  )}

                  <ul className="mt-8 space-y-3.5 border-t border-current/12 pt-6 text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isPro ? 'text-[#E8D3A0]' : 'text-[#7A6021]'
                          }`}
                          aria-hidden="true"
                        />
                        <span className={isPro ? 'text-[#F5F1EB]/90' : 'text-[#3D332A]/90'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9">
                  <MagneticButton
                    variant={isPro ? 'gold' : 'espresso'}
                    reducedMotion={reducedMotion}
                    onClick={() => onSelectPlan(plan.id)}
                    className="w-full"
                  >
                    {t.pricing.selectPlanCta}
                  </MagneticButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
