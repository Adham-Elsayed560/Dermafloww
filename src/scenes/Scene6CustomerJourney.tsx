import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Sparkles, CreditCard, Settings2, TrendingUp, Share2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  reducedMotion: boolean;
}

const NODE_ICONS = [Compass, Sparkles, CreditCard, Settings2, TrendingUp, Share2];

export const Scene6CustomerJourney: React.FC<SceneProps> = ({ reducedMotion }) => {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

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

        if (pathRef.current) {
          const len = pathRef.current.getTotalLength();
          gsap.set(pathRef.current, { strokeDasharray: len, strokeDashoffset: len });
          tl.to(pathRef.current, { strokeDashoffset: 0, duration: 0.85 }, 0);
        }

        tl.fromTo(
          nodeRefs.current,
          { opacity: 0.25, y: 20, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.7 },
          0.08
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
      id="sec-11"
      ref={sectionRef}
      className="relative flex min-h-[760px] flex-col justify-center overflow-hidden bg-[#191D24] px-4 py-20 text-[#F5F1EB] sm:px-8 lg:min-h-screen lg:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-[#C9A84C]/20 pb-6">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-xs tracking-widest text-[#E8D3A0]/80">
              <span className="font-mono text-[#C9A84C]">{t.scenes.s6.sectionNum}</span>
              <span aria-hidden="true">·</span>
              <span>{t.scenes.s6.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-[#F5F1EB] sm:text-4xl lg:text-5xl">
              {t.scenes.s6.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F5F1EB]/75 sm:text-base">
              {t.scenes.s6.subtitle}
            </p>
          </div>
        </div>

        {/* Continuous Gold Path + Six Nodes */}
        <div className="relative">
          <svg
            viewBox="0 0 1100 70"
            className="mb-6 hidden h-14 w-full lg:block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="journeyGold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8F7330" />
                <stop offset="50%" stopColor="#E8D3A0" />
                <stop offset="100%" stopColor="#C9A84C" />
              </linearGradient>
            </defs>
            <path
              d="M 40 35 Q 220 10 380 35 T 730 35 T 1060 35"
              fill="none"
              stroke="rgba(201,168,76,0.18)"
              strokeWidth="2"
            />
            <path
              ref={pathRef}
              d="M 40 35 Q 220 10 380 35 T 730 35 T 1060 35"
              fill="none"
              stroke="url(#journeyGold)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {t.scenes.s6.nodes.map((node, idx) => {
              const Icon = NODE_ICONS[idx] || Compass;
              return (
                <div
                  key={idx}
                  ref={(el) => {
                    nodeRefs.current[idx] = el;
                  }}
                  className="flex min-w-0 flex-col justify-between rounded-xl border border-[#C9A84C]/30 bg-[#1E2229] p-5"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-xs text-[#C9A84C] tabular-nums">
                        {node.step}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#C9A84C]/35 bg-[#C9A84C]/12">
                        <Icon className="h-4 w-4 text-[#E8D3A0]" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-medium text-[#F5F1EB]">
                      {node.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#F5F1EB]/70">
                    {node.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
