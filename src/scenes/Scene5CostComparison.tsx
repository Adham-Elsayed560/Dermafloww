import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  reducedMotion: boolean;
}

export const Scene5CostComparison: React.FC<SceneProps> = ({ reducedMotion }) => {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const aiRingRef = useRef<SVGCircleElement | null>(null);
  const aiBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=130%',
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
          },
        });

        if (aiRingRef.current) {
          const circumference = 2 * Math.PI * 84;
          gsap.set(aiRingRef.current, {
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
          });
          tl.to(aiRingRef.current, { strokeDashoffset: 0, duration: 0.65 });
        }

        if (aiBarRef.current) {
          tl.fromTo(
            aiBarRef.current,
            { scaleX: 0.1 },
            { scaleX: 1, transformOrigin: 'left center', duration: 0.45 },
            0.25
          );
        }
      });
    }, section);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [reducedMotion, locale]);

  return (
    <section
      id="sec-10"
      ref={sectionRef}
      className="relative flex min-h-[760px] flex-col justify-center overflow-hidden border-b border-[#C9A84C]/20 bg-[#1E2229] px-4 py-20 text-[#F5F1EB] sm:px-8 lg:min-h-screen lg:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[#C9A84C]/20 pb-6">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-xs tracking-widest text-[#E8D3A0]/80">
              <span className="font-mono text-[#C9A84C]">{t.scenes.s5.sectionNum}</span>
              <span aria-hidden="true">·</span>
              <span>{t.scenes.s5.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-[#F5F1EB] sm:text-4xl lg:text-5xl">
              {t.scenes.s5.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F5F1EB]/75 sm:text-base">
              {t.scenes.s5.subtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] tracking-wider text-[#E8D3A0]/75">
            {t.scenes.demoTag}
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* 24h Clock Ring */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#C9A84C]/25 bg-[#15181E] p-8 lg:col-span-5">
            <div className="relative h-56 w-56">
              <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden="true">
                <defs>
                  <linearGradient id="clockGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E8D3A0" />
                    <stop offset="50%" stopColor="#C9A84C" />
                    <stop offset="100%" stopColor="#8F7330" />
                  </linearGradient>
                </defs>
                {/* Base Track */}
                <circle
                  cx="100"
                  cy="100"
                  r="84"
                  fill="none"
                  stroke="rgba(245,241,235,0.1)"
                  strokeWidth="12"
                />
                {/* 8h Human Shift Arc (1/3 of circle) */}
                <circle
                  cx="100"
                  cy="100"
                  r="64"
                  fill="none"
                  stroke="rgba(245,241,235,0.35)"
                  strokeWidth="8"
                  strokeDasharray={`${(2 * Math.PI * 64) / 3} ${2 * Math.PI * 64}`}
                />
                {/* 24h Dermaflow Gold Ring */}
                <circle
                  ref={aiRingRef}
                  cx="100"
                  cy="100"
                  r="84"
                  fill="none"
                  stroke="url(#clockGold)"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-mono text-4xl font-semibold text-[#E8D3A0] tabular-nums">
                  24h
                </span>
                <span className="mt-1 text-xs text-[#F5F1EB]/65">vs 8h</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs">
              <span className="flex items-center gap-2 text-[#F5F1EB]/75">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5F1EB]/40" />
                {t.scenes.s5.clockHumanLabel}
              </span>
              <span className="flex items-center gap-2 text-[#E8D3A0]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C9A84C]" />
                {t.scenes.s5.clockAiLabel}
              </span>
            </div>
          </div>

          {/* Relative Cost Bars (no invented salary numbers) */}
          <div className="min-w-0 space-y-6 rounded-2xl border border-[#C9A84C]/25 bg-[#15181E] p-6 sm:p-8 lg:col-span-7">
            <p className="font-display text-2xl font-medium text-[#E8D3A0] sm:text-3xl">
              {t.scenes.s5.headlineClaim}
            </p>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-[#F5F1EB]/75">
                  <span>{t.scenes.s5.barHumanLabel}</span>
                  <span>24h / 3 shifts</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-[#252A33]">
                  <div className="h-full w-full rounded-full bg-[#F5F1EB]/25" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-[#E8D3A0]">
                  <span className="font-medium">{t.scenes.s5.barAiLabel}</span>
                  <span className="font-mono">24/7</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-[#252A33]">
                  <div
                    ref={aiBarRef}
                    className="bg-gold-metallic h-full w-[28%] rounded-full"
                  />
                </div>
              </div>
            </div>

            <p className="border-t border-[#F5F1EB]/10 pt-4 text-sm leading-relaxed text-[#F5F1EB]/70">
              {t.scenes.s5.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
