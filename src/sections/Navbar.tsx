import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from '../components/ui/LanguageToggle';

interface NavbarProps {
  reducedMotion: boolean;
  onNavigate: (selector: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ reducedMotion, onNavigate }) => {
  const { t } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      if (!mobileOpen && currentY > 120 && currentY > lastY + 8) {
        setHidden(true);
      } else if (currentY < lastY - 6 || currentY <= 120) {
        setHidden(false);
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  const navLinks = [
    { label: t.nav.problems, href: '#sec-04' },
    { label: t.nav.features, href: '#sec-06' },
    { label: t.nav.pulseGuard, href: '#sec-07' },
    { label: t.nav.pricing, href: '#sec-14' },
    { label: t.nav.faq, href: '#sec-16' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(href);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[60] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden && !reducedMotion ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 transition-colors duration-300 sm:px-6 lg:gap-8 lg:px-8 ${
          scrolled
            ? 'border-b border-[#C9A84C]/25 bg-[#2B231C]/88 text-[#F5F1EB] backdrop-blur-md'
            : 'border-b border-[#C9A84C]/15 bg-[#3D332A]/70 text-[#F5F1EB] backdrop-blur-sm'
        }`}
      >
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#sec-03"
          onClick={(e) => handleLinkClick(e, '#sec-03')}
          className="font-display shrink-0 whitespace-nowrap text-lg font-medium tracking-wide text-[#E8D3A0] sm:text-xl"
        >
          {t.nav.brand}
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm font-medium text-[#F5F1EB]/85 lg:flex"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="shrink-0 whitespace-nowrap border-b border-transparent py-1 transition-colors duration-200 hover:border-[#C9A84C] hover:text-[#E8D3A0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language toggle + Primary CTA */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <LanguageToggle dark reducedMotion={reducedMotion} />

          <a
            href="#sec-17"
            onClick={(e) => handleLinkClick(e, '#sec-17')}
            className="bg-gold-metallic hidden min-h-[38px] shrink-0 items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold tracking-wide text-[#2B231C] transition-transform duration-200 hover:brightness-105 active:scale-[0.98] sm:inline-flex"
          >
            {t.nav.bookDemo}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
            className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-[#C9A84C]/35 text-[#E8D3A0] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Tablet / Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-[#C9A84C]/25 bg-[#2B231C]/98 px-4 py-5 text-[#F5F1EB] backdrop-blur-lg lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex min-h-[44px] items-center border-b border-[#F5F1EB]/10 text-base font-medium text-[#F5F1EB]/90"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#sec-17"
              onClick={(e) => handleLinkClick(e, '#sec-17')}
              className="bg-gold-metallic mt-2 flex min-h-[44px] items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-[#2B231C]"
            >
              {t.nav.bookDemo}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
