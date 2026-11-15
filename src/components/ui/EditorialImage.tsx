import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EditorialImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  lazy?: boolean;
  className?: string;
  imgClassName?: string;
  reducedMotion?: boolean;
  caption?: string;
  arch?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  width,
  height,
  lazy = true,
  className = '',
  imgClassName = '',
  reducedMotion = false,
  caption,
  arch = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          clipPath: 'inset(10% 0% 10% 0%)',
          opacity: 0.35,
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          duration: 1.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <figure className={`relative overflow-hidden ${arch ? 'rounded-t-full rounded-b-xl' : 'rounded-xl'} ${className}`}>
      <div
        ref={containerRef}
        className={`relative h-full w-full overflow-hidden border border-[#C9A84C]/30 bg-[#2B231C] ${
          arch ? 'rounded-t-full rounded-b-xl' : 'rounded-xl'
        }`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={lazy ? 'lazy' : 'eager'}
            decoding={lazy ? 'async' : 'sync'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={`h-full w-full object-cover ${imgClassName}`}
          />
        ) : (
          <div className="flex h-full min-h-[260px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#3D332A] via-[#2B231C] to-[#8F7330]/40 p-6 text-center">
            <ShieldCheck className="h-8 w-8 text-[#C9A84C]" aria-hidden="true" />
            <span className="font-display text-sm text-[#E8D3A0]">{alt}</span>
          </div>
        )}

        {/* Warm espresso & champagne gold color-grading overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2B231C]/75 via-[#3D332A]/20 to-[#C9A84C]/10 mix-blend-multiply"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#E8D3A0]/15"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 text-xs tracking-wide text-[#6B5B4E]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
