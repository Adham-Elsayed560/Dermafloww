import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, AlertTriangle, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  reducedMotion: boolean;
}

export const Scene2LaserPulseGuard: React.FC<SceneProps> = ({ reducedMotion }) => {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const pulseParticlesRef = useRef<SVGGElement | null>(null);
  const shieldRef = useRef<HTMLDivElement | null>(null);
  const unbilledRowRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  // Interactive DEMO slider state
  const [pulsesUsed, setPulsesUsed] = useState(4820);
  const [pulsesBilled, setPulsesBilled] = useState(4440);

  const unbilledGap = Math.max(0, pulsesUsed - pulsesBilled);

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
            end: '+=210%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        const counterObj = { unbilled: 380 };

        if (pulseParticlesRef.current) {
          const dots = pulseParticlesRef.current.querySelectorAll('circle');
          tl.fromTo(
            dots,
            { opacity: 0.2, x: 0 },
            { opacity: 1, x: 95, stagger: 0.04, duration: 0.4 }
          );
        }

        tl.fromTo(
          unbilledRowRef.current,
          { x: 0, borderColor: 'rgba(201,168,76,0.2)' },
          { x: 10, borderColor: 'rgba(232,211,160,0.85)', duration: 0.35 }
        )
          .fromTo(
            shieldRef.current,
            { scale: 0.9, opacity: 0.5 },
            { scale: 1.04, opacity: 1, duration: 0.3 }
          )
          .to(counterObj, {
            unbilled: 0,
            duration: 0.45,
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = `${Math.round(counterObj.unbilled)}`;
              }
            },
          })
          .to(unbilledRowRef.current, {
            x: 0,
            borderColor: 'rgba(201,168,76,0.45)',
            duration: 0.25,
          });
      });
    }, section);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [reducedMotion, locale]);

  return (
    <section
      id="sec-07"
      ref={sectionRef}
      className="relative flex min-h-[840px] flex-col justify-center overflow-hidden border-b border-[#C9A84C]/25 bg-[#191D24] px-4 py-20 text-[#F5F1EB] sm:px-8 lg:min-h-screen lg:py-14"
    >
      <div aria-hidden="true" className="glow-warm-gold pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#C9A84C]/25 pb-5">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-xs tracking-widest text-[#E8D3A0]/80">
              <span className="font-mono text-[#C9A84C]">{t.scenes.s2.sectionNum}</span>
              <span aria-hidden="true">·</span>
              <span>{t.scenes.s2.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-[#F5F1EB] sm:text-4xl lg:text-5xl">
              {t.scenes.s2.title}
            </h2>
            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#F5F1EB]/75 sm:text-base">
              {t.scenes.s2.subtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] tracking-wider text-[#E8D3A0]/75">
            {t.scenes.demoTag}
          </span>
        </div>

        {/* Main Pulse Flow Visual */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left: Stylized Laser Handpiece SVG + Gold Shield */}
          <div className="flex min-w-0 flex-col justify-between rounded-2xl border border-[#C9A84C]/25 bg-[#1E2229] p-5 sm:p-6 lg:col-span-5">
            <div>
              <p className="font-mono text-xs tracking-wider text-[#E8D3A0]/80">
                {t.scenes.s2.handpieceLabel}
              </p>

              {/* Stylized Laser Handpiece emitting gold pulse particles */}
              <div className="my-5 overflow-hidden rounded-xl border border-[#F5F1EB]/10 bg-[#15181E] p-4">
                <svg
                  viewBox="0 0 360 130"
                  className="h-28 w-full"
                  role="img"
                  aria-label={t.scenes.s2.handpieceLabel}
                >
                  <defs>
                    <linearGradient id="handpieceGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#E8D3A0" />
                      <stop offset="55%" stopColor="#C9A84C" />
                      <stop offset="100%" stopColor="#8F7330" />
                    </linearGradient>
                  </defs>
                  {/* Handpiece Body */}
                  <rect x="16" y="42" width="110" height="44" rx="12" fill="#2A2F38" stroke="url(#handpieceGold)" strokeWidth="1.5" />
                  <rect x="126" y="50" width="38" height="28" rx="6" fill="url(#handpieceGold)" />
                  <path d="M 164 56 L 194 60 L 194 68 L 164 72 Z" fill="#E8D3A0" />
                  <line x1="36" y1="64" x2="106" y2="64" stroke="rgba(232,211,160,0.4)" strokeWidth="2" />

                  {/* Pulse Particle Stream */}
                  <g ref={pulseParticlesRef}>
                    <circle cx="206" cy="64" r="3.5" fill="#E8D3A0" />
                    <circle cx="226" cy="57" r="3" fill="#C9A84C" />
                    <circle cx="244" cy="70" r="3.5" fill="#E8D3A0" />
                    <circle cx="262" cy="62" r="2.8" fill="#C9A84C" />
                  </g>

                  {/* Target Ledger Receptor */}
                  <line x1="322" y1="22" x2="322" y2="108" stroke="url(#handpieceGold)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="322" cy="64" r="14" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Gold Shield & Unbilled Counter */}
            <div
              ref={shieldRef}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#C9A84C]/40 bg-gradient-to-r from-[#3D332A]/85 to-[#252A33] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8D3A0]/40 bg-[#C9A84C]/15">
                  <ShieldCheck className="h-6 w-6 text-[#E8D3A0]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F5F1EB]">{t.scenes.s2.shieldLabel}</p>
                  <p className="font-mono text-xs text-[#E8D3A0]/75">
                    {t.scenes.s2.unbilledCounterLabel}
                  </p>
                </div>
              </div>
              <div className="text-end">
                <span
                  ref={counterRef}
                  className="font-mono text-3xl font-semibold text-[#E8D3A0] tabular-nums"
                >
                  0
                </span>
                <span className="ms-1.5 font-mono text-xs text-[#C9A84C]">unbilled</span>
              </div>
            </div>
          </div>

          {/* Right: Clinic Pulse Ledger */}
          <div className="min-w-0 rounded-2xl border border-[#C9A84C]/25 bg-[#1E2229] p-5 sm:p-6 lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-medium text-[#F5F1EB]">
                {t.scenes.s2.ledgerTitle}
              </h3>
              <span className="font-mono text-xs text-[#C9A84C] tabular-nums">
                4,820 total
              </span>
            </div>

            <div className="space-y-3">
              {t.scenes.s2.bookingRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#F5F1EB]/10 bg-[#15181E] px-4 py-3 text-sm"
                >
                  <span className="font-medium text-[#F5F1EB]/90">{row.session}</span>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#E8D3A0]/80 tabular-nums">
                      {row.pulses}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8D3A0]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C9A84C]" aria-hidden="true" />
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}

              <div
                ref={unbilledRowRef}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#C9A84C]/50 bg-[#2B231C]/70 px-4 py-3.5 text-sm"
              >
                <span className="font-medium text-[#E8D3A0]">{t.scenes.s2.unbilledRow.session}</span>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#E8D3A0] tabular-nums">
                    {t.scenes.s2.unbilledRow.pulses}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8D3A0]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#C9A84C]" aria-hidden="true" />
                    {t.scenes.s2.unbilledRow.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive DEMO Slider */}
            <div className="mt-6 rounded-xl border border-[#C9A84C]/30 bg-[#15181E] p-4 sm:p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                  <h4 className="text-sm font-medium text-[#F5F1EB]">
                    {t.scenes.s2.sliderTitle}
                  </h4>
                </div>
                <span className="font-mono text-[11px] text-[#C9A84C]">DEMO</span>
              </div>
              <p className="mb-4 text-xs text-[#F5F1EB]/65">{t.scenes.s2.sliderSubtitle}</p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <label htmlFor="pulses-used-slider" className="text-[#F5F1EB]/80">
                      {t.scenes.s2.pulsesUsedLabel}
                    </label>
                    <span className="font-mono font-semibold text-[#E8D3A0] tabular-nums">
                      {pulsesUsed.toLocaleString()}
                    </span>
                  </div>
                  <input
                    id="pulses-used-slider"
                    type="range"
                    min={1000}
                    max={6000}
                    step={20}
                    value={pulsesUsed}
                    onChange={(e) => setPulsesUsed(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer accent-[#C9A84C]"
                  />
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <label htmlFor="pulses-billed-slider" className="text-[#F5F1EB]/80">
                      {t.scenes.s2.pulsesBilledLabel}
                    </label>
                    <span className="font-mono font-semibold text-[#E8D3A0] tabular-nums">
                      {pulsesBilled.toLocaleString()}
                    </span>
                  </div>
                  <input
                    id="pulses-billed-slider"
                    type="range"
                    min={1000}
                    max={6000}
                    step={20}
                    value={pulsesBilled}
                    onChange={(e) => setPulsesBilled(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer accent-[#C9A84C]"
                  />
                </div>
              </div>

              {/* Live Gap Output */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#F5F1EB]/10 pt-3 text-xs">
                <span className="text-[#F5F1EB]/70">{t.scenes.s2.gapLabel}</span>
                {unbilledGap === 0 ? (
                  <span className="inline-flex items-center gap-1.5 font-mono font-medium text-[#E8D3A0]">
                    <CheckCircle2 className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                    {t.scenes.s2.gapZeroLabel}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono font-semibold text-[#E8D3A0] tabular-nums">
                    <AlertTriangle className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                    {unbilledGap.toLocaleString()} {t.scenes.s2.gapWarningLabel}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
