import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';

interface LanguageToggleProps {
  dark?: boolean;
  reducedMotion?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  dark = true,
  reducedMotion = false,
}) => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={`relative inline-flex shrink-0 items-center rounded-lg border p-0.5 ${
        dark
          ? 'border-[#C9A84C]/35 bg-[#2B231C]/80'
          : 'border-[#3D332A]/20 bg-[#EBE4D8]'
      }`}
    >
      {(['en', 'ar'] as const).map((lang) => {
        const active = locale === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLocale(lang)}
            aria-pressed={active}
            className={`relative z-10 min-h-[34px] min-w-[42px] whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium tracking-wide transition-colors duration-200 ${
              active
                ? 'text-[#2B231C]'
                : dark
                ? 'text-[#F5F1EB]/80 hover:text-[#E8D3A0]'
                : 'text-[#3D332A]/75 hover:text-[#3D332A]'
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-active-pill"
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 420, damping: 32 }
                }
                className="bg-gold-metallic absolute inset-0 -z-10 rounded-md"
              />
            )}
            {lang === 'en' ? 'EN' : 'عربي'}
          </button>
        );
      })}
    </div>
  );
};
