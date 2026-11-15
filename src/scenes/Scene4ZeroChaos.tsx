import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bell, CalendarClock, ArrowRightLeft, UserCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  reducedMotion: boolean;
}

export const Scene4ZeroChaos: React.FC<SceneProps> = ({ reducedMotion }) => {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bellRef = useRef<HTMLDivElement | null>(null);
  const refillCardRef = useRef<HTMLDivElement | null>(null);
  const rescheduleCardRef = useRef<HTMLDivElement | null>(null);

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
            end: '+=155%',
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
          },
        });

        tl.fromTo(
          slotRefs.current,
          { opacity: 0.2, y: 18 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.45 }
        )
          .fromTo(
            bellRef.current,
            { scale: 0.9, rotation: -8 },
            { scale: 1.05, rotation: 8, duration: 0.25 }
          )
          .fromTo(
            refillCardRef.current,
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.35 }
          )
          .fromTo(
            rescheduleCardRef.current,
            { y: -24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35 }
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
      id="sec-09"
      ref={sectionRef}
      className="relative flex min-h-[780px] flex-col justify-center overflow-hidden border-b border-[#C9A84C]/20 bg-[#191D24] px-4 py-20 text-[#F5F1EB] sm:px-8 lg:min-h-screen lg:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[#C9A84C]/20 pb-6">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-xs tracking-widest text-[#E8D3A0]/80">
              <span className="font-mono text-[#C9A84C]">{t.scenes.s4.sectionNum}</span>
              <span aria-hidden="true">·</span>
              <span>{t.scenes.s4.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-[#F5F1EB] sm:text-4xl lg:text-5xl">
              {t.scenes.s4.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F5F1EB]/75 sm:text-base">
              {t.scenes.s4.subtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] tracking-wider text-[#E8D3A0]/75">
            {t.scenes.demoTag}
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Calendar Grid */}
          <div className="min-w-0 rounded-2xl border border-[#C9A84C]/30 bg-[#1E2229] p-5 sm:p-6 lg:col-span-7">
            <div className="mb-4 flex items-center justify-between border-b border-[#F5F1EB]/10 pb-3">
              <div className="flex items-center gap-2.5">
                <CalendarClock className="h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                <h3 className="font-display text-lg font-medium text-[#F5F1EB]">
                  {t.scenes.s4.calendarTitle}
                </h3>
              </div>
              <div
                ref={bellRef}
                className="flex items-center gap-1.5 text-xs text-[#E8D3A0]"
              >
                <Bell className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                <span className="hidden sm:inline">{t.scenes.s4.reminderText}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {t.scenes.s4.slots.map((slot, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    slotRefs.current[idx] = el;
                  }}
                  className={`flex flex-wrap items-center justify-between gap-2 rounded-xl border px-4 py-3 text-sm ${
                    idx === 2
                      ? 'border-[#C9A84C]/55 bg-[#2B231C]/80'
                      : idx === 3
                      ? 'border-[#C9A84C]/40 bg-[#252A33]'
                      : 'border-[#F5F1EB]/10 bg-[#15181E]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#C9A84C] tabular-nums">
                      {slot.time}
                    </span>
                    <span className="font-medium text-[#F5F1EB]">{slot.service}</span>
                  </div>
                  <span className="font-mono text-xs text-[#E8D3A0]/90">{slot.state}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Automation Cards */}
          <div className="space-y-4 lg:col-span-5">
            <div
              ref={refillCardRef}
              className="rounded-2xl border border-[#C9A84C]/35 bg-[#15181E] p-5"
            >
              <div className="mb-2 flex items-center gap-2 text-xs text-[#E8D3A0]">
                <UserCheck className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                <span className="font-mono">16:00 · Waitlist Refill</span>
              </div>
              <p className="font-display text-lg text-[#F5F1EB]">{t.scenes.s4.refilledText}</p>
              <p className="mt-1.5 text-xs text-[#F5F1EB]/65">{t.scenes.s4.cancelledText}</p>
            </div>

            <div
              ref={rescheduleCardRef}
              className="rounded-2xl border border-[#C9A84C]/35 bg-[#15181E] p-5"
            >
              <div className="mb-2 flex items-center gap-2 text-xs text-[#E8D3A0]">
                <ArrowRightLeft className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                <span className="font-mono">17:00 · Self-Service</span>
              </div>
              <p className="font-display text-lg text-[#F5F1EB]">{t.scenes.s4.rescheduledText}</p>
              <p className="mt-1.5 text-xs text-[#F5F1EB]/65">{t.scenes.s4.reminderText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
