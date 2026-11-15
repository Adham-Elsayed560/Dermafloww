import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

interface MarqueeProps {
  dark?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ dark = true }) => {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <div
      className={`marquee-wrapper relative w-full overflow-hidden border-y py-4 ${
        dark
          ? 'border-[#C9A84C]/25 bg-[#2B231C] text-[#E8D3A0]'
          : 'border-[#3D332A]/15 bg-[#EBE4D8] text-[#3D332A]'
      }`}
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((line, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="font-display text-lg tracking-wide md:text-xl">{line}</span>
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rotate-45 bg-[#C9A84C]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
