import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Coins, CalendarCheck2, Shield } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  reducedMotion: boolean;
}

export const Scene3AdBudget: React.FC<SceneProps> = ({ reducedMotion }) => {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const sealRef = useRef<SVGPathElement | null>(null);
  const protectedCoinsRef = useRef<SVGGElement | null>(null);
  const outcomeRef = useRef<HTMLDivElement | null>(null);

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
            end: '+=135%',
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
          },
        });

        if (sealRef.current) {
          const length = sealRef.current.getTotalLength();
          gsap.set(sealRef.current, { strokeDasharray: length, strokeDashoffset: length });
          tl.to(sealRef.current, { strokeDashoffset: 0, duration: 0.4 });
        }

        if (protectedCoinsRef.current) {
          const coins = protectedCoinsRef.current.querySelectorAll('circle');
          tl.fromTo(
            coins,
            { y: -32, opacity: 0 },
            { y: 28, opacity: 1, stagger: 0.08, duration: 0.45 },
            0.15
          );
        }

        tl.fromTo(
          outcomeRef.current,
          { opacity: 0.4, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.35 },
          0.45
        );
      });
    }, section);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [reducedMotion, locale]);

  return (
    <section
      id="sec-08"
      ref={sectionRef}
      className="relative flex min-h-[760px] flex-col justify-center overflow-hidden border-b border-[#C9A84C]/20 bg-[#1E2229] px-4 py-20 text-[#F5F1EB] sm:px-8 lg:min-h-screen lg:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[#C9A84C]/20 pb-6">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-xs tracking-widest text-[#E8D3A0]/80">
              <span className="font-mono text-[#C9A84C]">{t.scenes.s3.sectionNum}</span>
              <span aria-hidden="true">·</span>
              <span>{t.scenes.s3.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-[#F5F1EB] sm:text-4xl lg:text-5xl">
              {t.scenes.s3.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F5F1EB]/75 sm:text-base">
              {t.scenes.s3.subtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] tracking-wider text-[#E8D3A0]/75">
            {t.scenes.demoTag}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Unprotected Leaking Funnel */}
          <div className="min-w-0 rounded-2xl border border-[#F5F1EB]/12 bg-[#15181E] p-6">
            <div className="mb-4 flex items-center justify-between text-xs">
              <span className="text-[#F5F1EB]/75">{t.scenes.s3.unprotectedLabel}</span>
              <Coins className="h-4 w-4 text-[#F5F1EB]/45" aria-hidden="true" />
            </div>

            <svg viewBox="0 0 320 200" className="h-48 w-full" aria-hidden="true">
              {/* Broken funnel walls */}
              <path
                d="M 40 30 L 120 120 L 135 120 M 145 130 L 145 170"
                fill="none"
                stroke="rgba(245,241,235,0.28)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M 280 30 L 200 120 L 185 120 M 175 130 L 175 170"
                fill="none"
                stroke="rgba(245,241,235,0.28)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Coins slipping out */}
              <circle cx="130" cy="40" r="8" fill="#C9A84C" opacity="0.6" />
              <circle cx="170" cy="48" r="8" fill="#C9A84C" opacity="0.5" />
              <circle cx="88" cy="145" r="7" fill="#8F7330" opacity="0.45" />
              <circle cx="230" cy="152" r="7" fill="#8F7330" opacity="0.4" />
              <circle cx="160" cy="160" r="7" fill="#C9A84C" opacity="0.35" />
            </svg>
          </div>

          {/* Right: Sealed Gold Dermaflow Funnel */}
          <div className="min-w-0 rounded-2xl border border-[#C9A84C]/40 bg-[#15181E] p-6">
            <div className="mb-4 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-medium text-[#E8D3A0]">
                <Shield className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                {t.scenes.s3.protectedLabel}
              </span>
              <span className="font-mono text-[#C9A84C]">{t.scenes.s3.adSpendLabel}</span>
            </div>

            <svg viewBox="0 0 320 165" className="h-40 w-full" aria-hidden="true">
              <defs>
                <linearGradient id="funnelSealGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E8D3A0" />
                  <stop offset="100%" stopColor="#C9A84C" />
                </linearGradient>
              </defs>
              <path
                ref={sealRef}
                d="M 40 24 L 132 108 L 132 148 M 280 24 L 188 108 L 188 148"
                fill="none"
                stroke="url(#funnelSealGold)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <g ref={protectedCoinsRef}>
                <circle cx="115" cy="48" r="8" fill="#E8D3A0" />
                <circle cx="160" cy="40" r="9" fill="#C9A84C" />
                <circle cx="205" cy="52" r="8" fill="#E8D3A0" />
                <circle cx="160" cy="86" r="8" fill="#E8D3A0" />
                <circle cx="160" cy="122" r="7.5" fill="#C9A84C" />
              </g>
            </svg>

            <div
              ref={outcomeRef}
              className="mt-2 flex items-center justify-between rounded-xl border border-[#C9A84C]/35 bg-gradient-to-r from-[#3D332A] to-[#252A33] px-4 py-3 text-sm"
            >
              <span className="flex items-center gap-2 font-medium text-[#F5F1EB]">
                <CalendarCheck2 className="h-4 w-4 text-[#E8D3A0]" aria-hidden="true" />
                {t.scenes.s3.outcomeLabel}
              </span>
              <span className="font-mono text-xs text-[#E8D3A0]">100% Captured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
