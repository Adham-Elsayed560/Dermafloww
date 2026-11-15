import React, { useCallback, useState } from 'react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useLenisGsap } from './hooks/useLenisGsap';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Marquee } from './components/ui/Marquee';
import { Preloader } from './sections/Preloader';
import { Navbar } from './sections/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { Scene1NeverMiss } from './scenes/Scene1NeverMiss';
import { Scene2LaserPulseGuard } from './scenes/Scene2LaserPulseGuard';
import { Scene3AdBudget } from './scenes/Scene3AdBudget';
import { Scene4ZeroChaos } from './scenes/Scene4ZeroChaos';
import { Scene5CostComparison } from './scenes/Scene5CostComparison';
import { Scene6CustomerJourney } from './scenes/Scene6CustomerJourney';
import { ComparisonSection } from './sections/ComparisonSection';
import { PersonaSection } from './sections/PersonaSection';
import { PricingSection } from './sections/PricingSection';
import { RolloutSection } from './sections/RolloutSection';
import { FaqSection } from './sections/FaqSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { Footer } from './sections/Footer';

const DermaflowApp: React.FC = () => {
  const { t, dir } = useLanguage();
  const reducedMotion = useReducedMotion();
  const { scrollToTarget } = useLenisGsap(reducedMotion, dir);
  const [preloaderDone, setPreloaderDone] = useState(reducedMotion);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro'>('pro');

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  const handleSelectPlan = (plan: 'basic' | 'pro') => {
    setSelectedPlan(plan);
    scrollToTarget('#sec-17');
  };

  return (
    <div className="relative min-h-screen bg-[#F5F1EB] text-[#3D332A]">
      <a href="#main-content" className="skip-link">
        {t.skipToContent}
      </a>

      <CustomCursor reducedMotion={reducedMotion} />
      <ScrollProgress reducedMotion={reducedMotion} />
      <Preloader reducedMotion={reducedMotion} onComplete={handlePreloaderComplete} />

      <Navbar reducedMotion={reducedMotion} onNavigate={scrollToTarget} />

      <main id="main-content">
        <HeroSection
          reducedMotion={reducedMotion}
          ready={preloaderDone}
          onNavigate={scrollToTarget}
        />

        <Marquee dark />

        <ProblemSection reducedMotion={reducedMotion} />
        <SolutionSection reducedMotion={reducedMotion} />

        {/* Six Pinned / Scrubbed Feature Scenes (06–11) */}
        <Scene1NeverMiss reducedMotion={reducedMotion} />
        <Scene2LaserPulseGuard reducedMotion={reducedMotion} />
        <Scene3AdBudget reducedMotion={reducedMotion} />
        <Scene4ZeroChaos reducedMotion={reducedMotion} />
        <Scene5CostComparison reducedMotion={reducedMotion} />
        <Scene6CustomerJourney reducedMotion={reducedMotion} />

        <ComparisonSection reducedMotion={reducedMotion} />
        <PersonaSection reducedMotion={reducedMotion} />
        <PricingSection
          reducedMotion={reducedMotion}
          onSelectPlan={handleSelectPlan}
        />
        <RolloutSection reducedMotion={reducedMotion} />
        <FaqSection reducedMotion={reducedMotion} />
        <FinalCtaSection
          reducedMotion={reducedMotion}
          preselectedPlan={selectedPlan}
        />
      </main>

      <Footer onNavigate={scrollToTarget} />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <DermaflowApp />
    </LanguageProvider>
  );
}
