import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ScrollProgressProps {
  reducedMotion: boolean;
}

const SECTION_IDS = [
  'sec-03',
  'sec-04',
  'sec-05',
  'sec-06',
  'sec-07',
  'sec-08',
  'sec-09',
  'sec-10',
  'sec-11',
  'sec-12',
  'sec-13',
  'sec-14',
  'sec-15',
  'sec-16',
  'sec-17',
  'sec-18',
];

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ reducedMotion }) => {
  const [progress, setProgress] = useState(0);
  const [activeNum, setActiveNum] = useState('03');
  const { dir } = useLanguage();

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(pct);

      const viewportCenter = window.innerHeight * 0.42;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setActiveNum(id.replace('sec-', ''));
          break;
        }
      }
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 right-0 left-0 z-[70] h-[2px] bg-transparent"
      >
        <div
          className="h-full w-full origin-left bg-gold-metallic"
          style={{
            transform: `scaleX(${progress})`,
            transformOrigin: dir === 'rtl' ? 'right center' : 'left center',
            transition: reducedMotion ? 'none' : 'transform 80ms linear',
          }}
        />
      </div>

      <aside
        aria-hidden="true"
        className={`pointer-events-none fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 2xl:flex ${
          dir === 'rtl' ? 'left-6' : 'right-6'
        }`}
      >
        <span className="font-mono text-[11px] tracking-[0.22em] text-[#C9A84C] tabular-nums">
          {activeNum}
        </span>
        <div className="h-20 w-px bg-[#C9A84C]/25">
          <div
            className="w-full origin-top bg-[#C9A84C]"
            style={{
              height: '100%',
              transform: `scaleY(${progress})`,
            }}
          />
        </div>
        <span className="font-mono text-[11px] tracking-[0.22em] text-[#8F7330]/80 tabular-nums">
          18
        </span>
      </aside>
    </>
  );
};
