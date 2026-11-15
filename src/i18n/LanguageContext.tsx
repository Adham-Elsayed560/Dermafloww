import React, { createContext, useContext, useEffect, useState } from 'react';
import { dictionary, Dictionary, Locale } from './dictionary';

interface LanguageContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');
  const dir: 'ltr' | 'rtl' = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLocale = (next: Locale) => {
    setLocaleState(next);
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dir,
        t: dictionary[locale],
        toggleLocale,
        setLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
