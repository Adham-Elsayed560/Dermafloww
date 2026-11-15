import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { RevealText } from '../components/ui/RevealText';
import { MagneticButton } from '../components/ui/MagneticButton';

interface FinalCtaSectionProps {
  reducedMotion: boolean;
  preselectedPlan: 'basic' | 'pro';
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  reducedMotion,
  preselectedPlan,
}) => {
  const { t } = useLanguage();
  const [clinicName, setClinicName] = useState('');
  const [city, setCity] = useState('Mansoura');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState<'basic' | 'pro'>(preselectedPlan);
  const [errors, setErrors] = useState<{
    clinicName?: string;
    phone?: string;
    email?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPlan(preselectedPlan);
  }, [preselectedPlan]);

  const validate = () => {
    const nextErrors: { clinicName?: string; phone?: string; email?: string } = {};
    if (!clinicName.trim()) {
      nextErrors.clinicName = t.finalCta.form.errors.clinicRequired;
    }

    const cleanedPhone = phone.replace(/[\s-]/g, '');
    if (!/^\+20\d{9,11}$/.test(cleanedPhone)) {
      nextErrors.phone = t.finalCta.form.errors.phoneInvalid;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = t.finalCta.form.errors.emailInvalid;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setClinicName('');
    setPhone('');
    setEmail('');
    setErrors({});
  };

  return (
    <section
      id="sec-17"
      className="relative overflow-hidden bg-[#3D332A] px-4 py-24 text-[#F5F1EB] sm:px-6 lg:px-8 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="glow-warm-gold pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <RevealText reducedMotion={reducedMotion} className="min-w-0 lg:col-span-5">
            <div className="mb-3 flex items-center gap-3 text-xs tracking-[0.16em] text-[#E8D3A0]">
              <span className="font-mono font-semibold">{t.finalCta.sectionNum}</span>
              <span aria-hidden="true">·</span>
              <span>{t.finalCta.eyebrow}</span>
            </div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-[#F5F1EB] [text-wrap:balance] sm:text-5xl">
              {t.finalCta.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#F5F1EB]/78">
              {t.finalCta.subtitle}
            </p>
            <p className="mt-6 font-mono text-xs text-[#E8D3A0]/75">
              {t.finalCta.demoNote}
            </p>
          </RevealText>

          {/* Form Card */}
          <div className="min-w-0 rounded-2xl border border-[#C9A84C]/35 bg-[#1E2229] p-6 sm:p-8 lg:col-span-7">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="clinic-name"
                      className="mb-2 block text-xs font-medium text-[#E8D3A0]"
                    >
                      {t.finalCta.form.clinicNameLabel}
                    </label>
                    <input
                      id="clinic-name"
                      type="text"
                      value={clinicName}
                      onChange={(e) => setClinicName(e.target.value)}
                      placeholder={t.finalCta.form.clinicNamePlaceholder}
                      className="min-h-[44px] w-full rounded-lg border border-[#F5F1EB]/18 bg-[#15181E] px-3.5 py-2.5 text-sm text-[#F5F1EB] placeholder:text-[#F5F1EB]/35 focus:border-[#C9A84C]"
                    />
                    {errors.clinicName && (
                      <p role="alert" className="mt-1.5 text-xs text-[#E8D3A0]">
                        {errors.clinicName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="clinic-city"
                      className="mb-2 block text-xs font-medium text-[#E8D3A0]"
                    >
                      {t.finalCta.form.cityLabel}
                    </label>
                    <input
                      id="clinic-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder={t.finalCta.form.cityPlaceholder}
                      className="min-h-[44px] w-full rounded-lg border border-[#F5F1EB]/18 bg-[#15181E] px-3.5 py-2.5 text-sm text-[#F5F1EB] placeholder:text-[#F5F1EB]/35 focus:border-[#C9A84C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="clinic-phone"
                      className="mb-2 block text-xs font-medium text-[#E8D3A0]"
                    >
                      {t.finalCta.form.phoneLabel}
                    </label>
                    <input
                      id="clinic-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.finalCta.form.phonePlaceholder}
                      className="min-h-[44px] w-full rounded-lg border border-[#F5F1EB]/18 bg-[#15181E] px-3.5 py-2.5 font-mono text-sm text-[#F5F1EB] placeholder:text-[#F5F1EB]/35 focus:border-[#C9A84C]"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs text-[#E8D3A0]">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="clinic-email"
                      className="mb-2 block text-xs font-medium text-[#E8D3A0]"
                    >
                      {t.finalCta.form.emailLabel}
                    </label>
                    <input
                      id="clinic-email"
                      type="email"
                      dir="ltr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.finalCta.form.emailPlaceholder}
                      className="min-h-[44px] w-full rounded-lg border border-[#F5F1EB]/18 bg-[#15181E] px-3.5 py-2.5 text-sm text-[#F5F1EB] placeholder:text-[#F5F1EB]/35 focus:border-[#C9A84C]"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs text-[#E8D3A0]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="clinic-plan"
                    className="mb-2 block text-xs font-medium text-[#E8D3A0]"
                  >
                    {t.finalCta.form.planLabel}
                  </label>
                  <select
                    id="clinic-plan"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value as 'basic' | 'pro')}
                    className="min-h-[44px] w-full rounded-lg border border-[#F5F1EB]/18 bg-[#15181E] px-3.5 py-2.5 text-sm text-[#F5F1EB] focus:border-[#C9A84C]"
                  >
                    <option value="basic">{t.finalCta.form.planBasic}</option>
                    <option value="pro">{t.finalCta.form.planPro}</option>
                  </select>
                </div>

                <MagneticButton
                  type="submit"
                  variant="gold"
                  reducedMotion={reducedMotion}
                  className="w-full"
                >
                  {t.finalCta.form.submitCta}
                </MagneticButton>
              </form>
            ) : (
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/15">
                  <CheckCircle2 className="h-7 w-7 text-[#E8D3A0]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-medium text-[#F5F1EB]">
                  {t.finalCta.form.successTitle}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#F5F1EB]/75">
                  {t.finalCta.form.successBody}
                </p>
                <div className="mt-4 font-mono text-xs text-[#E8D3A0]">
                  {clinicName} · {city} · {phone}
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 min-h-[44px] rounded-lg border border-[#C9A84C]/40 px-5 py-2.5 text-xs font-medium text-[#E8D3A0] transition-colors hover:bg-[#C9A84C]/10"
                >
                  {t.finalCta.form.resetButton}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
