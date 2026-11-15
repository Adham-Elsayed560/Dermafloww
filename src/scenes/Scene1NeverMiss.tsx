import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarCheck2, Clock, Moon, Sun, CheckCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  reducedMotion: boolean;
}

export const Scene1NeverMiss: React.FC<SceneProps> = ({ reducedMotion }) => {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const sunGroupRef = useRef<SVGGElement | null>(null);
  const msgInRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<HTMLSpanElement | null>(null);
  const msgOutRef = useRef<HTMLDivElement | null>(null);
  const ticketRef = useRef<HTMLDivElement | null>(null);

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
            end: '+=150%',
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
          },
        });

        const counter = { val: 0 };

        tl.fromTo(
          msgInRef.current,
          { opacity: 0, y: 24, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.25 }
        )
          .to(
            counter,
            {
              val: 1.8,
              duration: 0.22,
              onUpdate: () => {
                if (timerRef.current) {
                  timerRef.current.textContent = `${counter.val.toFixed(1)}s`;
                }
              },
            },
            '+=0.05'
          )
          .fromTo(
            msgOutRef.current,
            { opacity: 0, y: 24, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.25 }
          )
          .to(
            sunGroupRef.current,
            {
              rotation: 120,
              transformOrigin: '160px 110px',
              duration: 0.5,
            },
            0.1
          )
          .fromTo(
            ticketRef.current,
            { opacity: 0, x: -30, rotateY: -18, scale: 0.92 },
            { opacity: 1, x: 0, rotateY: 0, scale: 1, duration: 0.35 }
          );
      });

      mm.add('(max-width: 1023px)', () => {
        gsap.fromTo(
          [msgInRef.current, msgOutRef.current, ticketRef.current],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.14,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
              once: true,
            },
          }
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
      id="sec-06"
      ref={sectionRef}
      className="relative flex min-h-[760px] flex-col justify-center overflow-hidden border-y border-[#C9A84C]/20 bg-[#1E2229] px-4 py-20 text-[#F5F1EB] sm:px-8 lg:min-h-screen lg:py-16"
    >
      <div aria-hidden="true" className="glow-warm-gold pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header Row */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[#C9A84C]/20 pb-6">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-xs tracking-widest text-[#E8D3A0]/80">
              <span className="font-mono text-[#C9A84C]">{t.scenes.s1.sectionNum}</span>
              <span aria-hidden="true">·</span>
              <span>{t.scenes.s1.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-[#F5F1EB] sm:text-4xl lg:text-5xl">
              {t.scenes.s1.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F5F1EB]/75 sm:text-base">
              {t.scenes.s1.subtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] tracking-wider text-[#E8D3A0]/70">
            {t.scenes.demoTag}
          </span>
        </div>

        {/* Scene Stage */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left: WhatsApp Phone UI */}
          <div className="min-w-0 lg:col-span-6">
            <div className="mx-auto max-w-md rounded-2xl border border-[#C9A84C]/30 bg-[#15181E] p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] sm:p-6">
              {/* Celestial 24/7 Arc */}
              <div className="mb-5 flex items-center justify-between border-b border-[#F5F1EB]/10 pb-4">
                <div className="flex items-center gap-2 text-xs text-[#E8D3A0]">
                  <Moon className="h-3.5 w-3.5 text-[#C9A84C]" aria-hidden="true" />
                  <span className="font-mono">{t.scenes.s1.timeBadge}</span>
                </div>
                <svg viewBox="0 0 320 44" className="h-9 w-36 sm:w-44" aria-hidden="true">
                  <path
                    d="M 20 38 A 140 100 0 0 1 300 38"
                    fill="none"
                    stroke="rgba(201,168,76,0.28)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <g ref={sunGroupRef}>
                    <circle cx="80" cy="14" r="5" fill="#E8D3A0" />
                    <circle cx="80" cy="14" r="10" fill="rgba(201,168,76,0.18)" />
                  </g>
                </svg>
                <div className="flex items-center gap-1.5 text-xs text-[#F5F1EB]/60">
                  <Sun className="h-3.5 w-3.5 text-[#E8D3A0]" aria-hidden="true" />
                  <span>24/7</span>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-4">
                <div
                  ref={msgInRef}
                  className="max-w-[88%] rounded-xl rounded-tl-sm border border-[#F5F1EB]/10 bg-[#252A33] p-3.5 text-sm text-[#F5F1EB]/90"
                >
                  <p className="leading-relaxed">{t.scenes.s1.patientMsg}</p>
                  <span className="mt-1.5 block font-mono text-[10px] text-[#F5F1EB]/45">
                    23:42
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#C9A84C]/25 bg-[#1E2229] px-3 py-2 text-xs">
                  <span className="flex items-center gap-2 text-[#E8D3A0]/85">
                    <Clock className="h-3.5 w-3.5 text-[#C9A84C]" aria-hidden="true" />
                    {t.scenes.s1.timerLabel}
                  </span>
                  <span
                    ref={timerRef}
                    className="font-mono font-semibold text-[#E8D3A0] tabular-nums"
                  >
                    1.8s
                  </span>
                </div>

                <div
                  ref={msgOutRef}
                  className="ms-auto max-w-[90%] rounded-xl rounded-tr-sm border border-[#C9A84C]/40 bg-gradient-to-br from-[#3D332A] to-[#2B231C] p-3.5 text-sm text-[#F5F1EB]"
                >
                  <p className="leading-relaxed">{t.scenes.s1.aiReply}</p>
                  <div className="mt-1.5 flex items-center justify-end gap-1 font-mono text-[10px] text-[#E8D3A0]">
                    <span>23:42</span>
                    <CheckCheck className="h-3.5 w-3.5 text-[#C9A84C]" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Confirmed Booking Ticket */}
          <div className="min-w-0 lg:col-span-6">
            <div
              ref={ticketRef}
              className="mx-auto max-w-md rounded-2xl border border-[#C9A84C]/45 bg-gradient-to-br from-[#252A33] to-[#1A1E25] p-6 shadow-[0_24px_60px_-20px_rgba(201,168,76,0.2)] sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-[#C9A84C]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C9A84C]/40 bg-[#C9A84C]/12">
                    <CalendarCheck2 className="h-5 w-5 text-[#E8D3A0]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium text-[#F5F1EB]">
                      {t.scenes.s1.ticketTitle}
                    </p>
                    <p className="font-mono text-xs text-[#E8D3A0]/80">
                      {t.scenes.s1.ticketStatus}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#C9A84C]">#DF-204</span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-[#F5F1EB]/10 pb-2.5">
                  <span className="text-[#F5F1EB]/60">{t.scenes.s1.cycleNight}</span>
                  <span className="font-mono text-[#E8D3A0]">{t.scenes.s1.ticketTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#F5F1EB]/60">{t.scenes.s1.cycleDay}</span>
                  <span className="text-[#F5F1EB]/90">{t.scenes.s1.ticketStatus}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
