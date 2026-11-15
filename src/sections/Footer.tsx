import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Marquee } from '../components/ui/Marquee';

interface FooterProps {
  onNavigate: (selector: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.problems, href: '#sec-04' },
    { label: t.nav.features, href: '#sec-06' },
    { label: t.nav.pulseGuard, href: '#sec-07' },
    { label: t.nav.pricing, href: '#sec-14' },
    { label: t.nav.faq, href: '#sec-16' },
    { label: t.nav.bookDemo, href: '#sec-17' },
  ];

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer id="sec-18" className="bg-[#2B231C] text-[#F5F1EB]">
      <Marquee dark />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[#C9A84C]/20 pb-12 md:grid-cols-12">
          <div className="min-w-0 md:col-span-6">
            <p className="font-display text-lg text-[#E8D3A0]">{t.footer.tagline}</p>
            <p className="mt-2 font-mono text-xs text-[#F5F1EB]/65">{t.footer.location}</p>
          </div>

          <div className="min-w-0 md:col-span-3">
            <p className="mb-4 font-mono text-xs tracking-wider text-[#C9A84C]">
              {t.footer.navTitle}
            </p>
            <ul className="space-y-2.5 text-sm text-[#F5F1EB]/80">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="transition-colors hover:text-[#E8D3A0]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 md:col-span-3">
            <p className="mb-4 font-mono text-xs tracking-wider text-[#C9A84C]">
              {t.footer.contactTitle}
            </p>
            <div className="space-y-2 font-mono text-xs text-[#F5F1EB]/80">
              <p dir="ltr">{t.footer.emailPlaceholder}</p>
              <p dir="ltr">{t.footer.phonePlaceholder}</p>
            </div>
          </div>
        </div>

        {/* Giant Editorial Wordmark */}
        <div className="overflow-hidden py-10 text-center">
          <p className="font-display text-[clamp(3rem,11vw,9.5rem)] leading-none font-medium tracking-tight text-gold-metallic select-none">
            {t.footer.wordmark}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#C9A84C]/15 pt-6 text-xs text-[#F5F1EB]/60">
          <p>{t.footer.disclaimer}</p>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
