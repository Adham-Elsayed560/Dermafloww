import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, ShieldCheck, Check, MessageSquare, Zap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { IMAGES } from '../lib/images';
import { MagneticButton } from '../components/ui/MagneticButton';
import { EditorialImage } from '../components/ui/EditorialImage';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  reducedMotion: boolean;
  ready: boolean;
  onNavigate: (selector: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  reducedMotion,
  ready,
  onNavigate,
}) => {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const archRef = useRef<HTMLDivElement | null>(null);
  const chipsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Gold Dust Particle Canvas (75 particles, paused off-screen)
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section || reducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let isInView = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = section.clientWidth * dpr;
      canvas.height = section.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const particleCount = 75;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * section.clientWidth,
      y: Math.random() * section.clientHeight,
      r: 0.7 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -0.15 - Math.random() * 0.35,
      alpha: 0.15 + Math.random() * 0.45,
    }));

    const observer = new IntersectionObserver(
      (entries) => {
        isInView = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(section);

    const render = () => {
      if (isInView) {
        const w = section.clientWidth;
        const h = section.clientHeight;
        ctx.clearRect(0, 0, w, h);

        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -10) {
            p.y = h + 10;
            p.x = Math.random() * w;
          }
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(232, 211, 160, ${p.alpha})`;
          ctx.fill();
        }
      }
      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  // Masked Word Reveal + Arched Portrait Parallax + Orbiting Glass Chips
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion || !ready) return;

    const ctx = gsap.context(() => {
      const words = section.querySelectorAll('.hero-word');
      gsap.fromTo(
        words,
        { y: '105%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.95,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );

      if (archRef.current) {
        gsap.to(archRef.current, {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      chipsRef.current.forEach((chip, i) => {
        if (!chip) return;
        gsap.fromTo(
          chip,
          { opacity: 0, scale: 0.85, y: 24 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3 + i * 0.12,
            ease: 'power3.out',
          }
        );

        gsap.to(chip, {
          y: i % 2 === 0 ? -7 : 7,
          x: i % 2 === 0 ? 4 : -4,
          duration: 2.8 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion, ready, locale]);

  const words = t.hero.headline.split(' ');

  const chipConfigs = [
    {
      label: t.hero.chips.reply,
      icon: MessageSquare,
      pos: 'top-6 -start-3 sm:-start-6',
    },
    {
      label: t.hero.chips.pulse,
      icon: Zap,
      pos: 'top-1/3 -end-3 sm:-end-6',
    },
    {
      label: t.hero.chips.booking,
      icon: Check,
      pos: 'bottom-1/4 -start-2 sm:-start-5',
    },
    {
      label: t.hero.chips.noShow,
      icon: ShieldCheck,
      pos: 'bottom-5 -end-2 sm:-end-4',
    },
  ];

  return (
    <section
      id="sec-03"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#3D332A] pt-24 pb-16 text-[#F5F1EB] lg:pt-28 lg:pb-20"
    >
      {/* Warm Radial Spotlight & Grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 68% 38%, rgba(201, 168, 76, 0.22) 0%, rgba(61, 51, 42, 0.4) 55%, #2B231C 100%)',
        }}
      />
      <div aria-hidden="true" className="film-grain absolute inset-0" />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Typography Column */}
          <div className="min-w-0 lg:col-span-7">
            <p className="mb-5 text-xs tracking-[0.14em] text-[#E8D3A0]/90 sm:text-sm">
              {t.hero.eyebrow}
            </p>

            <h1 className="font-display text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.06] font-medium tracking-tight text-[#F5F1EB] [text-wrap:balance]">
              {words.map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden align-bottom">
                  <span className="hero-word inline-block">
                    {word}
                    {idx < words.length - 1 ? '\u00A0' : ''}
                  </span>
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F5F1EB]/82 sm:text-lg">
              {t.hero.subheadline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton
                variant="gold"
                reducedMotion={reducedMotion}
                onClick={() => onNavigate('#sec-17')}
              >
                {t.hero.primaryCta}
              </MagneticButton>

              <MagneticButton
                variant="outline-gold"
                reducedMotion={reducedMotion}
                onClick={() => onNavigate('#sec-07')}
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </MagneticButton>
            </div>

            <div className="mt-10 border-t border-[#C9A84C]/25 pt-5 text-xs tracking-wide text-[#E8D3A0]/80">
              <span>{t.hero.metadataLine}</span>
            </div>
          </div>

          {/* Right Arched Portrait Frame with Orbiting Glass Chips */}
          <div className="relative min-w-0 lg:col-span-5">
            <div ref={archRef} className="relative mx-auto max-w-[380px] sm:max-w-[420px]">
              {/* Outer 1px Hairline Arch Ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-t-full rounded-b-2xl border border-[#C9A84C]/35"
              />

              <EditorialImage
                src={IMAGES.heroSkin.src}
                alt={t.hero.imageAlt}
                width={IMAGES.heroSkin.width}
                height={IMAGES.heroSkin.height}
                lazy={false}
                arch
                reducedMotion={reducedMotion}
                className="aspect-[3/4] shadow-[0_32px_70px_-20px_rgba(0,0,0,0.65)]"
              />

              {/* Orbiting Glass Telemetry Chips (DEMO) */}
              {chipConfigs.map((chip, idx) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      chipsRef.current[idx] = el;
                    }}
                    className={`absolute ${chip.pos} z-20 flex items-center gap-2 rounded-xl border border-[#C9A84C]/45 bg-[#1E2229]/88 px-3.5 py-2 text-xs text-[#F5F1EB] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-[#E8D3A0]" aria-hidden="true" />
                    <span className="whitespace-nowrap font-mono text-[11px] font-medium tracking-tight text-[#F5F1EB] tabular-nums">
                      {chip.label}
                    </span>
                  </div>
                );
              })}

              <p className="mt-3 text-center font-mono text-[11px] tracking-wider text-[#E8D3A0]/70">
                {t.hero.demoLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
