export type Locale = 'en' | 'ar';

export interface Dictionary {
  skipToContent: string;
  nav: {
    brand: string;
    problems: string;
    features: string;
    pulseGuard: string;
    pricing: string;
    faq: string;
    bookDemo: string;
    menuOpen: string;
    menuClose: string;
  };
  marquee: string[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    metadataLine: string;
    imageAlt: string;
    chips: {
      reply: string;
      pulse: string;
      booking: string;
      noShow: string;
    };
    demoLabel: string;
  };
  problems: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      num: string;
      title: string;
      description: string;
      metricLabel: string;
    }[];
  };
  solution: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    lead: string;
    pillars: {
      label: string;
      title: string;
      body: string;
    }[];
    scopeTitle: string;
    scopeBody: string;
    images: {
      handsAlt: string;
      handsCaption: string;
      dermatoscopeAlt: string;
      dermatoscopeCaption: string;
      suiteAlt: string;
      suiteCaption: string;
    };
  };
  scenes: {
    demoTag: string;
    scrollHint: string;
    s1: {
      sectionNum: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      timeBadge: string;
      patientMsg: string;
      aiReply: string;
      timerLabel: string;
      ticketTitle: string;
      ticketTime: string;
      ticketStatus: string;
      cycleNight: string;
      cycleDay: string;
    };
    s2: {
      sectionNum: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      handpieceLabel: string;
      ledgerTitle: string;
      shieldLabel: string;
      unbilledCounterLabel: string;
      bookingRows: {
        session: string;
        pulses: string;
        status: string;
      }[];
      unbilledRow: {
        session: string;
        pulses: string;
        status: string;
      };
      sliderTitle: string;
      sliderSubtitle: string;
      pulsesUsedLabel: string;
      pulsesBilledLabel: string;
      gapLabel: string;
      gapZeroLabel: string;
      gapWarningLabel: string;
    };
    s3: {
      sectionNum: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      adSpendLabel: string;
      unprotectedLabel: string;
      protectedLabel: string;
      outcomeLabel: string;
    };
    s4: {
      sectionNum: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      calendarTitle: string;
      days: string[];
      slots: {
        time: string;
        service: string;
        state: string;
      }[];
      reminderText: string;
      cancelledText: string;
      refilledText: string;
      rescheduledText: string;
    };
    s5: {
      sectionNum: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      clockHumanLabel: string;
      clockAiLabel: string;
      barHumanLabel: string;
      barAiLabel: string;
      headlineClaim: string;
      note: string;
    };
    s6: {
      sectionNum: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      nodes: {
        step: string;
        title: string;
        caption: string;
      }[];
    };
  };
  comparison: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    colFeature: string;
    colDermaflow: string;
    colGeneric: string;
    rows: {
      feature: string;
      dermaflow: string;
      generic: string;
      dermaflowHas: boolean;
      genericHas: boolean;
    }[];
  };
  persona: {
    sectionNum: string;
    label: string;
    eyebrow: string;
    title: string;
    role: string;
    location: string;
    summary: string;
    dailyRealitiesTitle: string;
    dailyRealities: string[];
    whatDermaflowProtectsTitle: string;
    whatDermaflowProtects: string[];
  };
  pricing: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    launchLabel: string;
    monthly: string;
    annual: string;
    annualBadge: string;
    perMonth: string;
    billedAnnually: string;
    currency: string;
    selectPlanCta: string;
    plans: {
      id: 'basic' | 'pro';
      name: string;
      tagline: string;
      monthlyPrice: number;
      annualMonthlyPrice: number;
      features: string[];
      featured?: boolean;
    }[];
  };
  rollout: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    weeks: {
      week: string;
      title: string;
      description: string;
    }[];
  };
  faq: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  finalCta: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    demoNote: string;
    form: {
      clinicNameLabel: string;
      clinicNamePlaceholder: string;
      cityLabel: string;
      cityPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      planLabel: string;
      planBasic: string;
      planPro: string;
      submitCta: string;
      errors: {
        clinicRequired: string;
        phoneInvalid: string;
        emailInvalid: string;
      };
      successTitle: string;
      successBody: string;
      resetButton: string;
    };
  };
  footer: {
    wordmark: string;
    tagline: string;
    location: string;
    navTitle: string;
    contactTitle: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    disclaimer: string;
    copyright: string;
  };
}

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    skipToContent: 'Skip to main content',
    nav: {
      brand: 'Dermaflow AI',
      problems: 'Challenges',
      features: 'Features',
      pulseGuard: 'Pulse Guard',
      pricing: 'Pricing',
      faq: 'FAQ',
      bookDemo: 'Book a Demo',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
    marquee: [
      'Every Missed Appointment Matters.',
      'Smarter Booking, Zero Chaos.',
      'Built for Modern Clinics.',
    ],
    hero: {
      eyebrow: 'Protection & Precision · Built for Aesthetic & Laser Clinics',
      headline: 'Protect Your Clinic Profits.',
      subheadline:
        'An AI operating system designed for dermatology, aesthetic, and laser clinics in Egypt — replying to inquiries in seconds, securing bookings 24/7, and matching every laser pulse to a billed session.',
      primaryCta: 'Book a Demo',
      secondaryCta: 'Explore Pulse Guard',
      metadataLine: 'Launching with pilot clinics in Mansoura · Simulated product previews',
      imageAlt: 'Close-up editorial portrait highlighting luminous skin in warm champagne light',
      chips: {
        reply: 'Reply sent · 2s',
        pulse: 'Pulse 4,820',
        booking: 'Booking confirmed ✓',
        noShow: 'No-show prevented',
      },
      demoLabel: 'Simulated Preview',
    },
    problems: {
      sectionNum: '04',
      eyebrow: 'Where Clinic Revenue Leaks',
      title: 'Four quiet leaks eroding aesthetic clinic margins.',
      subtitle:
        'High-intent patients reach out after hours while expensive laser consumables operate without booking-level reconciliation.',
      items: [
        {
          id: 'late-replies',
          num: '01',
          title: 'Late replies lose patients',
          description:
            'WhatsApp and Instagram messages arriving after hours or during peak clinic traffic wait too long — patients book with a faster competitor.',
          metricLabel: 'After-hours & peak-hour inquiry drop-off',
        },
        {
          id: 'wasted-ads',
          num: '02',
          title: 'Ad budget is wasted',
          description:
            'Paid campaigns generate conversations every day, yet slow manual follow-ups fail to convert ad clicks into confirmed calendar slots.',
          metricLabel: 'Unconverted campaign inquiries',
        },
        {
          id: 'reception-cost',
          num: '03',
          title: 'Reception staff is expensive',
          description:
            'Covering 24-hour patient messaging with human shifts alone increases fixed payroll while reception desks still bottleneck at rush hours.',
          metricLabel: '24-hour desk coverage gap',
        },
        {
          id: 'pulse-leak',
          num: '04',
          title: 'Laser pulses and consumables leak',
          description:
            'Without device-to-booking matching, real laser pulse counts and consumables slip past billing logs unnoticed.',
          metricLabel: 'Unreconciled device usage',
        },
      ],
    },
    solution: {
      sectionNum: '05',
      eyebrow: 'The Operating Philosophy',
      title: 'Protection & Precision',
      lead: 'Dermaflow AI combines continuous patient response with device-level operational discipline — designed specifically for modern dermatology and laser suites.',
      pillars: [
        {
          label: '01 · Revenue Protection',
          title: '24/7 WhatsApp & Instagram Assistant',
          body: 'Designed to respond in seconds around the clock, answer treatment questions in natural Arabic or English, and confirm bookings directly into the clinic schedule.',
        },
        {
          label: '02 · Device Precision',
          title: 'Laser Pulse Guard',
          body: 'Tracks device pulses and consumables against confirmed patient bookings, surfacing any unbilled pulses before revenue disappears.',
        },
        {
          label: '03 · Calm Operations',
          title: 'Smart Reminders & Self-Rescheduling',
          body: 'Automated attendance reminders and patient self-service cancel or reschedule flows lighten front-desk pressure and keep slots full.',
        },
      ],
      scopeTitle: 'Focused MVP Discipline',
      scopeBody:
        'Built purposefully around booking conversion, pulse protection, and schedule calm. Bank integrations and complex AI analytics are intentionally excluded from this release to keep clinic onboarding effortless.',
      images: {
        handsAlt: 'Gloved aesthetic clinician hands holding a brushed gold precision instrument',
        handsCaption: 'Precision Clinical Workflow',
        dermatoscopeAlt: 'Precision dermatoscope optical device on warm travertine stone',
        dermatoscopeCaption: 'Device & Consumable Accountability',
        suiteAlt: 'Calm luxury dermatology and laser treatment suite in warm beige and espresso',
        suiteCaption: 'Built for Modern Clinics · Launching in Mansoura',
      },
    },
    scenes: {
      demoTag: 'DEMO · Simulated Workflow',
      scrollHint: 'Scroll to scrub scene',
      s1: {
        sectionNum: '06',
        eyebrow: 'Scene 01 · Always-On Intake',
        title: 'Never miss a patient',
        subtitle:
          'When an inquiry arrives late at night on WhatsApp or Instagram, Dermaflow AI is designed to reply within seconds and convert interest into a confirmed slot.',
        timeBadge: '23:42 · Mansoura',
        patientMsg: 'Hello, do you have laser hair removal slots tomorrow evening?',
        aiReply: 'Welcome! Yes, we have 6:30 PM & 8:00 PM open with Dr. Salma. Shall I confirm 6:30 PM?',
        timerLabel: 'Response Time',
        ticketTitle: 'Confirmed Appointment',
        ticketTime: 'Tomorrow · 18:30 · Laser Suite B',
        ticketStatus: 'Calendar Locked',
        cycleNight: 'After Hours',
        cycleDay: 'Clinic Hours',
      },
      s2: {
        sectionNum: '07',
        eyebrow: 'Scene 02 · Signature Safeguard',
        title: 'Laser Pulse Guard',
        subtitle:
          'Every pulse emitted by your laser handpiece is logged against an active patient booking. Unbilled pulses break pattern, trigger a shield alert, and reconcile to zero leakage.',
        handpieceLabel: 'Laser Handpiece Emission',
        ledgerTitle: 'Clinic Pulse Ledger',
        shieldLabel: 'Pulse Guard Shield Active',
        unbilledCounterLabel: 'Unbilled Pulses',
        bookingRows: [
          { session: 'Booking #1042 · Full Face', pulses: '1,240 pulses', status: 'Matched' },
          { session: 'Booking #1043 · Underarms', pulses: '860 pulses', status: 'Matched' },
          { session: 'Booking #1044 · Vascular', pulses: '1,420 pulses', status: 'Matched' },
        ],
        unbilledRow: {
          session: 'Unassigned Emission #1045',
          pulses: '380 pulses',
          status: 'Flagged & Reconciled',
        },
        sliderTitle: 'Interactive Pulse Reconciliation',
        sliderSubtitle: 'Adjust pulses used vs. pulses billed to preview how the guard flags discrepancies.',
        pulsesUsedLabel: 'Device Pulses Used',
        pulsesBilledLabel: 'Pulses Linked to Bookings',
        gapLabel: 'Unbilled Gap Detected',
        gapZeroLabel: '0 unbilled · Full parity',
        gapWarningLabel: 'pulses unbilled · Flagged by Guard',
      },
      s3: {
        sectionNum: '08',
        eyebrow: 'Scene 03 · Marketing ROI',
        title: 'Protect your ad budget',
        subtitle:
          'Paid social brings patients to your inbox. Instead of losing leads through slow reply cracks, Dermaflow seals the funnel into confirmed clinic visits.',
        adSpendLabel: 'Instagram & Meta Ad Inquiries',
        unprotectedLabel: 'Slow Manual Replies · Leaked Leads',
        protectedLabel: 'Dermaflow Sealed Funnel · Instant Triage',
        outcomeLabel: 'Confirmed Appointments',
      },
      s4: {
        sectionNum: '09',
        eyebrow: 'Scene 04 · Effortless Desk',
        title: 'Zero chaos scheduling',
        subtitle:
          'Automated reminders reduce no-shows, patients reschedule themselves cleanly, and cancelled hours automatically refill from waiting inquiries.',
        calendarTitle: 'Thursday Clinic Schedule',
        days: ['14:00', '15:00', '16:00', '17:00', '18:00'],
        slots: [
          { time: '14:00', service: 'Laser Carbon Peel', state: 'Confirmed' },
          { time: '15:00', service: 'Alexandrite Session', state: 'Reminder Sent' },
          { time: '16:00', service: 'Cancelled Slot', state: 'Refilled via Waitlist' },
          { time: '17:00', service: 'HydraFacial Suite', state: 'Self-Rescheduled' },
          { time: '18:00', service: 'Consultation', state: 'Confirmed' },
        ],
        reminderText: 'Smart Reminder Pinged',
        cancelledText: 'Cancellation Detected → Waitlist Notified',
        refilledText: 'Slot Refilled Automatically',
        rescheduledText: 'Patient Moved to 17:00 Self-Service',
      },
      s5: {
        sectionNum: '10',
        eyebrow: 'Scene 05 · Operational Economics',
        title: 'Costs less than one salary',
        subtitle:
          'A single human shift covers eight hours. Dermaflow AI operates across all twenty-four hours at a fraction of a front-desk payroll.',
        clockHumanLabel: 'Single Reception Shift · 8h',
        clockAiLabel: 'Dermaflow AI Coverage · 24h',
        barHumanLabel: 'Traditional 24h Front-Desk Coverage',
        barAiLabel: 'Dermaflow AI',
        headlineClaim: 'Less than one front-desk salary',
        note: 'Designed to extend your existing reception team without adding night-shift overhead.',
      },
      s6: {
        sectionNum: '11',
        eyebrow: 'Scene 06 · Partnership Arc',
        title: 'Six steps from discovery to clinic referral',
        subtitle:
          'A calm, guided journey engineered for busy aesthetic clinic directors in Egypt.',
        nodes: [
          { step: '01', title: 'Discover', caption: 'Identify missed messages & pulse gaps' },
          { step: '02', title: 'Try', caption: 'Live pulse-tracking & WhatsApp demo' },
          { step: '03', title: 'Subscribe', caption: 'Select Basic or Pro launch pricing' },
          { step: '04', title: 'Onboard', caption: 'Guided clinic setup in Week 1' },
          { step: '05', title: 'Renew & Upgrade', caption: 'Expand across rooms & devices' },
          { step: '06', title: 'Refer', caption: 'Share with fellow clinic directors' },
        ],
      },
    },
    comparison: {
      sectionNum: '12',
      eyebrow: 'Built Differently',
      title: 'Dermaflow AI vs. generic clinic software',
      subtitle:
        'General medical software manages records after a patient arrives. Dermaflow AI protects bookings and laser economics before and during every visit.',
      colFeature: 'Capability',
      colDermaflow: 'Dermaflow AI',
      colGeneric: 'Generic Clinic Software',
      rows: [
        {
          feature: 'Instant 24/7 AI replies on WhatsApp & Instagram',
          dermaflow: 'Replies in seconds, day & night',
          generic: 'Manual desk replies only',
          dermaflowHas: true,
          genericHas: false,
        },
        {
          feature: 'Built specifically for aesthetic & laser clinics',
          dermaflow: 'Tailored workflows & treatment flows',
          generic: 'General medical templates',
          dermaflowHas: true,
          genericHas: false,
        },
        {
          feature: 'Laser pulse & consumables tracking',
          dermaflow: 'Matches pulses directly to bookings',
          generic: 'Not tracked at device level',
          dermaflowHas: true,
          genericHas: false,
        },
        {
          feature: 'Patient self-service cancel & reschedule',
          dermaflow: 'Automated chat rescheduling',
          generic: 'Requires phone call to reception',
          dermaflowHas: true,
          genericHas: false,
        },
        {
          feature: 'Smart automated appointment reminders',
          dermaflow: 'Included in core flow',
          generic: 'Often manual or extra add-on',
          dermaflowHas: true,
          genericHas: false,
        },
      ],
    },
    persona: {
      sectionNum: '13',
      label: 'Persona · Illustrative Clinic Profile (Not a Testimonial)',
      eyebrow: 'Who We Build For',
      title: 'Designed for the aesthetic clinic director balancing care with margin.',
      role: 'Dermatology & Laser Clinic Director',
      location: 'Mansoura, Dakahlia · Egypt',
      summary:
        'Runs a busy multi-room clinic running Alexandrite and diode laser sessions alongside dermatology consultations, investing monthly in Instagram campaigns.',
      dailyRealitiesTitle: 'Daily Operational Pressures',
      dailyRealities: [
        'Evening Instagram DMs pile up after the reception desk closes at 10 PM.',
        'Ad spend brings messages that cool off before morning follow-ups.',
        'High-value laser devices fire thousands of pulses weekly without booking-level reconciliation.',
      ],
      whatDermaflowProtectsTitle: 'What Dermaflow AI Is Built to Solve',
      whatDermaflowProtects: [
        'Turns night and rush-hour inquiries into confirmed bookings automatically.',
        'Reconciles laser pulses and consumables directly against scheduled sessions.',
        'Gives reception breathing room through smart reminders and self-rescheduling.',
      ],
    },
    pricing: {
      sectionNum: '14',
      eyebrow: 'Transparent Plans',
      title: 'Launch pricing for founding clinics',
      subtitle:
        'Simple monthly SaaS plans built for Egyptian dermatology and laser clinics. Lock in launch pricing during our Mansoura rollout.',
      launchLabel: 'Launch pricing',
      monthly: 'Monthly',
      annual: 'Annual',
      annualBadge: '20% off annual',
      perMonth: '/ month',
      billedAnnually: 'billed annually',
      currency: 'EGP',
      selectPlanCta: 'Request Launch Access',
      plans: [
        {
          id: 'basic',
          name: 'Basic',
          tagline: 'Essential 24/7 booking & reminder automation for growing clinics.',
          monthlyPrice: 2000,
          annualMonthlyPrice: 1600,
          features: [
            'WhatsApp & Instagram AI Assistant (24/7)',
            'Instant inquiry-to-booking conversion',
            'Automated smart appointment reminders',
            'Patient self-service cancel & reschedule',
            'Guided Week-1 onboarding',
          ],
        },
        {
          id: 'pro',
          name: 'Pro',
          tagline: 'Full Protection & Precision including Laser Pulse Guard.',
          monthlyPrice: 3000,
          annualMonthlyPrice: 2400,
          featured: true,
          features: [
            'Everything in Basic',
            'Laser Pulse Guard (device pulse & consumable tracking)',
            'Booking-to-pulse reconciliation & unbilled alerts',
            'Priority Mansoura pilot support & demos',
            'Multi-room laser suite tracking',
          ],
        },
      ],
    },
    rollout: {
      sectionNum: '15',
      eyebrow: 'Four-Week Launch Plan',
      title: 'From setup to live clinic protection in four weeks.',
      subtitle: 'A structured, high-touch rollout starting in Mansoura.',
      weeks: [
        {
          week: 'Week 01',
          title: 'Clinic Setup',
          description:
            'Connect WhatsApp and Instagram messaging channels, configure treatment menus, and map clinic hours.',
        },
        {
          week: 'Week 02',
          title: 'Content & Pulse-Tracking Demos',
          description:
            'Calibrate clinic tone and walk clinic teams through live Laser Pulse Guard tracking demonstrations.',
        },
        {
          week: 'Week 03',
          title: 'Clinic Community on WhatsApp',
          description:
            'Bring founding Mansoura clinic directors together in a dedicated WhatsApp peer & support group.',
        },
        {
          week: 'Week 04',
          title: 'Mansoura 5-Clinic Pilot',
          description:
            'Launch live pilot operations across five dermatology and laser clinics in Mansoura.',
        },
      ],
    },
    faq: {
      sectionNum: '16',
      eyebrow: 'Questions & Clarity',
      title: 'Everything clinic directors ask before onboarding.',
      items: [
        {
          q: 'How quickly does the AI assistant reply to WhatsApp and Instagram messages?',
          a: 'Dermaflow AI is designed to respond within seconds, 24 hours a day, handling inquiries in clear Arabic or English and guiding patients directly to a confirmed booking slot.',
        },
        {
          q: 'How does Laser Pulse Guard prevent pulse and consumable leaks?',
          a: 'It logs laser pulses and consumable usage per session and links them directly to confirmed bookings in your calendar. Whenever pulses occur without a matching booking, they are flagged immediately.',
        },
        {
          q: 'Does Dermaflow AI include bank integrations or complex financial analytics?',
          a: 'No. We intentionally keep the MVP focused on booking conversion, smart reminders, self-rescheduling, and Laser Pulse Guard. Bank integrations and complex AI analytics are postponed for future phases.',
        },
        {
          q: 'Can patients cancel or reschedule without calling reception?',
          a: 'Yes. Patients receive smart reminders and can cancel or reschedule directly through the conversation flow, freeing up your front desk and allowing cancelled slots to be refilled.',
        },
        {
          q: 'How do clinics in Mansoura join the Week 4 pilot?',
          a: 'Submit a demo request below with your clinic name and +20 phone number. Our onboarding team schedules a tailored pulse-tracking and booking walkthrough during Week 2.',
        },
      ],
    },
    finalCta: {
      sectionNum: '17',
      eyebrow: 'Start Your Clinic Protection',
      title: 'Every Missed Appointment Matters.',
      subtitle:
        'Request a guided walkthrough of Dermaflow AI and Laser Pulse Guard for your clinic in Mansoura or across Egypt.',
      demoNote: 'DEMO · Simulated demo-request form for preview purposes (no external submission)',
      form: {
        clinicNameLabel: 'Clinic Name',
        clinicNamePlaceholder: 'e.g., Nile Aesthetic & Laser Clinic',
        cityLabel: 'City',
        cityPlaceholder: 'Mansoura',
        phoneLabel: 'WhatsApp Phone (+20)',
        phonePlaceholder: '+20 10 0000 0000',
        emailLabel: 'Work Email',
        emailPlaceholder: 'hello@your-domain.com',
        planLabel: 'Preferred Launch Plan',
        planBasic: 'Basic · EGP 2,000 / mo',
        planPro: 'Pro · EGP 3,000 / mo (with Pulse Guard)',
        submitCta: 'Request Simulated Demo',
        errors: {
          clinicRequired: 'Please enter your clinic name.',
          phoneInvalid: 'Please enter a valid Egyptian number starting with +20 (e.g., +20 10 1234 5678).',
          emailInvalid: 'Please enter a valid email address (e.g., hello@your-domain.com).',
        },
        successTitle: 'Demo Request Preview Recorded',
        successBody:
          'Thank you. In production, our Mansoura onboarding specialist reaches out via WhatsApp to schedule your live booking and Pulse Guard walkthrough.',
        resetButton: 'Submit Another Request',
      },
    },
    footer: {
      wordmark: 'Dermaflow AI',
      tagline: 'Protection & Precision for Dermatology, Aesthetic & Laser Clinics.',
      location: 'Launching in Mansoura · Egypt',
      navTitle: 'Navigation',
      contactTitle: 'Pilot Inquiries',
      emailPlaceholder: 'hello@your-domain.com',
      phonePlaceholder: '+20 10 0000 0000',
      disclaimer: 'All dashboards, pulse figures, chats, and booking timelines shown on this site are simulated DEMO previews illustrating product design.',
      copyright: '© 2026 Dermaflow AI. All rights reserved.',
    },
  },
  ar: {
    skipToContent: 'انتقل إلى المحتوى الرئيسي',
    nav: {
      brand: 'Dermaflow AI',
      problems: 'التحديات',
      features: 'المزايا',
      pulseGuard: 'حماية النبضات',
      pricing: 'الأسعار',
      faq: 'الأسئلة الشائعة',
      bookDemo: 'احجز عرضاً',
      menuOpen: 'فتح قائمة التنقل',
      menuClose: 'إغلاق قائمة التنقل',
    },
    marquee: [
      'كل موعد ضائع له ثمنه.',
      'حجوزات أذكى، بلا فوضى.',
      'مصمم للعيادات الحديثة.',
    ],
    hero: {
      eyebrow: 'الحماية والدقة · مصمم لعيادات الجلدية والتجميل والليزر',
      headline: 'احمِ أرباح عيادتك.',
      subheadline:
        'نظام تشغيل ذكي لعيادات الجلدية والتجميل والليزر في مصر، ينطلق من عيادات المنصورة — يرد على المرضى خلال ثوانٍ على مدار الساعة، ويطابق كل نبضة ليزر مع جلسة مفوترة.',
      primaryCta: 'احجز عرضاً تجريبياً',
      secondaryCta: 'استكشف حارس النبضات',
      metadataLine: 'الإطلاق التجريبي مع عيادات المنصورة · معاينات محاكاة للمنتج',
      imageAlt: 'صورة تحريرية مقربة تبرز نضارة البشرة في إضاءة دافئة بلمسات ذهبية',
      chips: {
        reply: 'تم الرد · ٢ ثانية',
        pulse: 'نبضة ٤,٨٢٠',
        booking: 'تم تأكيد الحجز ✓',
        noShow: 'تم منع تغيب مريض',
      },
      demoLabel: 'معاينة محاكاة',
    },
    problems: {
      sectionNum: '04',
      eyebrow: 'أين تتسرب إيرادات العيادة',
      title: 'أربع ثغرات صامتة تستنزف أرباح عيادات التجميل.',
      subtitle:
        'يتواصل المرضى بعد ساعات العمل بينما تعمل أجهزة الليزر والمستهلكات دون ربط مباشر بسجل الحجوزات.',
      items: [
        {
          id: 'late-replies',
          num: '01',
          title: 'التأخر في الرد يُفقدك المرضى',
          description:
            'رسائل واتساب وإنستغرام خارج أوقات الدوام أو أثناء الضغط تنتظر طويلاً، فيحجز المريض لدى عيادة أخرى ترد أسرع.',
          metricLabel: 'فقدان الاستفسارات المسائية ووقت الذروة',
        },
        {
          id: 'wasted-ads',
          num: '02',
          title: 'إهدار ميزانية الإعلانات',
          description:
            'الإعلانات تجلب الرسائل يومياً، لكن بطء المتابعة اليدوية يمنع تحويل هذا الإنفاق إلى مواعيد مؤكدة.',
          metricLabel: 'رسائل إعلانية غير محولة لحجوزات',
        },
        {
          id: 'reception-cost',
          num: '03',
          title: 'تكلفة طاقم الاستقبال المرتفعة',
          description:
            'تغطية ٢٤ ساعة عبر موظفين فقط ترفع الرواتب الثابتة، ومع ذلك يظل مكتب الاستقبال مزدحماً في أوقات الذروة.',
          metricLabel: 'فجوة تغطية الـ ٢٤ ساعة',
        },
        {
          id: 'pulse-leak',
          num: '04',
          title: 'تسرب نبضات الليزر والمستهلكات',
          description:
            'بدون مطابقة الاستخدام الفعلي للجهاز مع جدول الحجوزات، تمر نبضات ومستهلكات دون تسجيل أو فوترة.',
          metricLabel: 'استهلاك أجهزة غير مطابق',
        },
      ],
    },
    solution: {
      sectionNum: '05',
      eyebrow: 'فلسفة التشغيل',
      title: 'الحماية والدقة',
      lead: 'يجمع Dermaflow AI بين سرعة الاستجابة للمرضى وانضباط تتبع الأجهزة — في تجربة مصممة خصيصاً لعيادات الجلدية والليزر.',
      pillars: [
        {
          label: '01 · حماية الإيرادات',
          title: 'مساعد واتساب وإنستغرام الذكي',
          body: 'مصمم للرد خلال ثوانٍ على مدار الساعة، والإجابة عن استفسارات الجلسات وتحويل المحادثة إلى حجز مؤكد تلقائياً.',
        },
        {
          label: '02 · دقة الأجهزة',
          title: 'حارس نبضات الليزر (Laser Pulse Guard)',
          body: 'يحصي نبضات الأجهزة والمستهلكات ويربطها بالحجوزات، وينبهك فوراً لأي نبضات غير مفوترة.',
        },
        {
          label: '03 · هدوء التشغيل',
          title: 'تذكيرات ذكية وإعادة جدولة ذاتية',
          body: 'تذكيرات تلقائية تقلل التغيب، مع إمكانية الإلغاء أو تعديل الموعد ذاتياً لتخفيف العبء عن الاستقبال.',
        },
      ],
      scopeTitle: 'نطاق إطلاق عملي وواضح',
      scopeBody:
        'يركز هذا الإصدار كلياً على تحويل الحجوزات وحماية النبضات وتنظيم المواعيد. التكاملات البنكية والتحليلات المعقدة مؤجلة لمراحل لاحقة لضمان سرعة وبساطة التشغيل.',
      images: {
        handsAlt: 'يدا طبيب تجميل بقفازات طبية تمسكان بأداة دقيقة بلمسات ذهبية',
        handsCaption: 'دقة سريرية في كل تفصيل',
        dermatoscopeAlt: 'منظار جلدي وعدسة معايرة طبية على حجر ترافرتين دافئ',
        dermatoscopeCaption: 'حوكمة الأجهزة والمستهلكات',
        suiteAlt: 'غرفة عيادة جلدية وليزر فاخرة بألوان البيج الدافئ والإسبريسو',
        suiteCaption: 'مصمم للعيادات الحديثة · ينطلق من المنصورة',
      },
    },
    scenes: {
      demoTag: 'عرض محاكاة · DEMO',
      scrollHint: 'مرر لاستعراض المشهد',
      s1: {
        sectionNum: '06',
        eyebrow: 'المشهد 01 · استقبال دائم',
        title: 'لا تفوّت مريضاً بعد اليوم',
        subtitle:
          'عندما تصل رسالة منتصف الليل عبر واتساب أو إنستغرام، يرد Dermaflow AI خلال ثوانٍ ويحوّل الاستفسار إلى تذكرة حجز مؤكدة في الجدول.',
        timeBadge: '23:42 · المنصورة',
        patientMsg: 'مساء الخير، هل يوجد موعد ليزر إزالة شعر غداً مساءً؟',
        aiReply: 'أهلاً بك! متاح غداً الساعة ٦:٣٠ مساءً و٨:٠٠ مساءً مع د. سلمى. هل أؤكد لكِ موعد ٦:٣٠؟',
        timerLabel: 'زمن الاستجابة',
        ticketTitle: 'موعد مؤكد',
        ticketTime: 'غداً · ١٨:٣٠ · غرفة الليزر B',
        ticketStatus: 'مُثبت بالجدول',
        cycleNight: 'خارج الدوام',
        cycleDay: 'ساعات العيادة',
      },
      s2: {
        sectionNum: '07',
        eyebrow: 'المشهد 02 · الميزة الفريدة',
        title: 'حارس نبضات الليزر',
        subtitle:
          'كل نبضة تخرج من قبضة الليزر تُسجّل مقابل حجز مريض مؤكد. أي نبضات غير مفوترة يتم رصدها بدرع الحماية الذهبي حتى يصل الفائض غير المفوتر إلى صفر.',
        handpieceLabel: 'انبعاث قبضة الليزر',
        ledgerTitle: 'سجل نبضات العيادة',
        shieldLabel: 'درع حارس النبضات نشط',
        unbilledCounterLabel: 'نبضات غير مفوترة',
        bookingRows: [
          { session: 'حجز #1042 · وجه كامل', pulses: '١,٢٤٠ نبضة', status: 'مطابق' },
          { session: 'حجز #1043 · إبطين', pulses: '٨٦٠ نبضة', status: 'مطابق' },
          { session: 'حجز #1044 · أوعية دموية', pulses: '١,٤٢٠ نبضة', status: 'مطابق' },
        ],
        unbilledRow: {
          session: 'استخدام غير مربوط #1045',
          pulses: '٣٨٠ نبضة',
          status: 'تم الرصد والمطابقة',
        },
        sliderTitle: 'محاكاة مطابقة النبضات التفاعلية',
        sliderSubtitle: 'حرّك المؤشرات لمقارنة النبضات المستخدمة بالمفوترة ومعاينة كشف الفجوة.',
        pulsesUsedLabel: 'النبضات المستخدمة على الجهاز',
        pulsesBilledLabel: 'النبضات المربوطة بحجوزات',
        gapLabel: 'فجوة غير مفوترة',
        gapZeroLabel: '٠ نبضة غير مفوترة · تطابق كامل',
        gapWarningLabel: 'نبضة غير مفوترة · مرصودة بالحارس',
      },
      s3: {
        sectionNum: '08',
        eyebrow: 'المشهد 03 · عائد الإعلانات',
        title: 'احمِ ميزانية إعلاناتك',
        subtitle:
          'الإعلانات تجلب المرضى لبريد العيادة. بدلاً من تسربهم عبر شقوق التأخير، يُغلق النظام المسار ويحولها إلى زيارات مؤكدة.',
        adSpendLabel: 'استفسارات إعلانات إنستغرام وميتا',
        unprotectedLabel: 'ردود يدوية بطيئة · تسرب عملاء',
        protectedLabel: 'مسار Dermaflow المحكم · فرز فوري',
        outcomeLabel: 'مواعيد مؤكدة بالعيادة',
      },
      s4: {
        sectionNum: '09',
        eyebrow: 'المشهد 04 · جدول منظم',
        title: 'حجوزات أذكى، بلا فوضى',
        subtitle:
          'التذكيرات الذكية تخفض التغيب، والمرضى يعدّلون مواعيدهم ذاتياً، وأي موعد ملغى يُملأ فوراً من قائمة الانتظار.',
        calendarTitle: 'جدول عيادة الخميس',
        days: ['14:00', '15:00', '16:00', '17:00', '18:00'],
        slots: [
          { time: '14:00', service: 'تقشير كربوني بالليزر', state: 'مؤكد' },
          { time: '15:00', service: 'جلسة ألكساندريت', state: 'أُرسل التذكير' },
          { time: '16:00', service: 'موعد مُلغى', state: 'مُلئ من الانتظار' },
          { time: '17:00', service: 'هيدرافيشل', state: 'إعادة جدولة ذاتية' },
          { time: '18:00', service: 'استشارة جلدية', state: 'مؤكد' },
        ],
        reminderText: 'تم إرسال تذكير ذكي',
        cancelledText: 'رصد إلغاء → إشعار قائمة الانتظار',
        refilledText: 'تم ملء الموعد تلقائياً',
        rescheduledText: 'نقل المريض الموعد ذاتياً للساعة ١٧:٠٠',
      },
      s5: {
        sectionNum: '10',
        eyebrow: 'المشهد 05 · كفاءة التكلفة',
        title: 'أقل من تكلفة راتب موظف واحد',
        subtitle:
          'المناوبة الواحدة تغطي ٨ ساعات فقط، بينما يعمل Dermaflow AI على مدار ٢٤ ساعة كاملة بأقل من تكلفة راتب موظف استقبال واحد.',
        clockHumanLabel: 'مناوبة استقبال واحدة · ٨ ساعات',
        clockAiLabel: 'تغطية Dermaflow AI · ٢٤ ساعة',
        barHumanLabel: 'تغطية استقبال تقليدية ٢٤ ساعة',
        barAiLabel: 'Dermaflow AI',
        headlineClaim: 'أقل من راتب موظف استقبال واحد',
        note: 'مصمم لمساندة فريق الاستقبال الحالي دون أعباء مناوبات ليلية إضافية.',
      },
      s6: {
        sectionNum: '11',
        eyebrow: 'المشهد 06 · رحلة الشراكة',
        title: 'ست خطوات من الاكتشاف إلى التوصية',
        subtitle:
          'مسار واضح وهادئ مصمم لمديري العيادات المشغولين في مصر.',
        nodes: [
          { step: '01', title: 'اكتشاف', caption: 'رصد الرسائل الفائتة وثغرات النبضات' },
          { step: '02', title: 'تجربة', caption: 'عرض حي لتتبع النبضات والرد التلقائي' },
          { step: '03', title: 'اشتراك', caption: 'اختيار باقة الإطلاق المناسبة' },
          { step: '04', title: 'تجهيز', caption: 'إعداد العيادة خلال الأسبوع الأول' },
          { step: '05', title: 'تجديد وترقية', caption: 'التوسع لغرف وأجهزة إضافية' },
          { step: '06', title: 'ترشيح', caption: 'مشاركة التجربة مع زملاء المهنة' },
        ],
      },
    },
    comparison: {
      sectionNum: '12',
      eyebrow: 'فارق جوهري',
      title: 'Dermaflow AI مقابل أنظمة العيادات العامة',
      subtitle:
        'الأنظمة الطبية التقليدية تنظم الملفات بعد وصول المريض. أما Dermaflow AI فيحمي الحجوزات واقتصاديات الليزر قبل الزيارة وأثناءها.',
      colFeature: 'القدرة التشغيلية',
      colDermaflow: 'Dermaflow AI',
      colGeneric: 'برامج العيادات التقليدية',
      rows: [
        {
          feature: 'رد ذكي فوري ٢٤/٧ على واتساب وإنستغرام',
          dermaflow: 'يرد خلال ثوانٍ ليلاً ونهاراً',
          generic: 'يعتمد على الرد اليدوي فقط',
          dermaflowHas: true,
          genericHas: false,
        },
        {
          feature: 'مصمم خصيصاً لعيادات التجميل والليزر',
          dermaflow: 'مسارات جلسات وحجوزات متخصصة',
          generic: 'قوالب طبية عامة غير متخصصة',
          dermaflowHas: true,
          genericHas: false,
        },
        {
          feature: 'تتبع نبضات الليزر والمستهلكات',
          dermaflow: 'ربط مباشر للنبضات بالحجوزات',
          generic: 'غير متوفر على مستوى الجهاز',
          dermaflowHas: true,
          genericHas: false,
        },
        {
          feature: 'إلغاء وإعادة جدولة ذاتية للمريض',
          dermaflow: 'تعديل سلس عبر المحادثة',
          generic: 'يتطلب اتصالاً بمكتب الاستقبال',
          dermaflowHas: true,
          genericHas: false,
        },
        {
          feature: 'تذكيرات مواعيد ذكية تلقائية',
          dermaflow: 'مدمجة في مسار الحجز الأساسي',
          generic: 'يدوية أو بإضافات مدفوعة',
          dermaflowHas: true,
          genericHas: false,
        },
      ],
    },
    persona: {
      sectionNum: '13',
      label: 'شخصية العميل المستهدف · Persona (نموذج توضيحي وليس شهادة عميل)',
      eyebrow: 'لمن نبني هذا النظام',
      title: 'مصمم لمدير عيادة التجميل الذي يوازن بين جودة الرعاية وحماية الربحية.',
      role: 'مدير عيادة جلدية وليزر',
      location: 'المنصورة، الدقهلية · مصر',
      summary:
        'يدير عيادة متعددة الغرف تقدم جلسات ليزر الألكساندريت والدايود مع استشارات الجلدية، ويستثمر شهرياً في حملات إنستغرام.',
      dailyRealitiesTitle: 'التحديات اليومية في التشغيل',
      dailyRealities: [
        'تراكم رسائل إنستغرام المسائية بعد انتهاء دوام الاستقبال الساعة ١٠ مساءً.',
        'انخفاض حماس عملاء الإعلانات قبل متابعتهم في صباح اليوم التالي.',
        'إطلاق آلاف نبضات الليزر أسبوعياً دون ربط دقيق بين الجهاز وسجل الحجوزات.',
      ],
      whatDermaflowProtectsTitle: 'ما صُمم Dermaflow AI لحمايته',
      whatDermaflowProtects: [
        'تحويل استفسارات الليل وساعات الذروة إلى حجوزات مؤكدة تلقائياً.',
        'مطابقة نبضات الليزر والمستهلكات مع الجلسات المحجوزة.',
        'منح فريق الاستقبال هدوءاً تشغيلياً عبر التذكيرات وإعادة الجدولة الذاتية.',
      ],
    },
    pricing: {
      sectionNum: '14',
      eyebrow: 'خطط واضحة',
      title: 'أسعار الإطلاق للعيادات المؤسسة',
      subtitle:
        'باقات اشتراك شهرية واضحة لعيادات الجلدية والليزر في مصر. استفد من تسعير الإطلاق خلال مرحلة المنصورة.',
      launchLabel: 'تسعير الإطلاق',
      monthly: 'شهري',
      annual: 'سنوي',
      annualBadge: 'خصم ٢٠٪ سنوياً',
      perMonth: '/ شهرياً',
      billedAnnually: 'يُدفع سنوياً',
      currency: 'ج.م',
      selectPlanCta: 'اطلب الانضمام للإطلاق',
      plans: [
        {
          id: 'basic',
          name: 'الأساسية · Basic',
          tagline: 'أتمتة الحجوزات والتذكيرات على مدار الساعة للعيادات المتنامية.',
          monthlyPrice: 2000,
          annualMonthlyPrice: 1600,
          features: [
            'مساعد واتساب وإنستغرام الذكي (٢٤/٧)',
            'تحويل الاستفسارات إلى حجوزات مؤكدة',
            'تذكيرات مواعيد ذكية تلقائية',
            'إلغاء وإعادة جدولة ذاتية للمرضى',
            'تجهيز وإعداد موجه في الأسبوع الأول',
          ],
        },
        {
          id: 'pro',
          name: 'الاحترافية · Pro',
          tagline: 'الحماية والدقة الكاملة مع حارس نبضات الليزر.',
          monthlyPrice: 3000,
          annualMonthlyPrice: 2400,
          featured: true,
          features: [
            'جميع مزايا الباقة الأساسية',
            'حارس نبضات الليزر (تتبع النبضات والمستهلكات)',
            'مطابقة النبضات بالحجوزات وتنبيهات غير المفوتر',
            'أولوية الدعم وعروض تجربة المنصورة',
            'متابعة عدة غرف وأجهزة ليزر',
          ],
        },
      ],
    },
    rollout: {
      sectionNum: '15',
      eyebrow: 'خطة الإطلاق في ٤ أسابيع',
      title: 'من الإعداد إلى حماية العيادة في أربعة أسابيع.',
      subtitle: 'إطلاق منظم ومتدرج يبدأ من مدينة المنصورة.',
      weeks: [
        {
          week: 'الأسبوع ٠١',
          title: 'إعداد العيادة',
          description: 'ربط قنوات واتساب وإنستغرام وضبط قائمة الجلسات وساعات العمل.',
        },
        {
          week: 'الأسبوع ٠٢',
          title: 'المحتوى وعروض تتبع النبضات',
          description: 'تخصيص أسلوب الرد وتقديم عروض عملية حية لآلية حارس نبضات الليزر.',
        },
        {
          week: 'الأسبوع ٠٣',
          title: 'مجتمع العيادات على واتساب',
          description: 'جمع مديري عيادات المنصورة الأوائل في مجموعة تواصل ودعم مباشر.',
        },
        {
          week: 'الأسبوع ٠٤',
          title: 'التجربة الميدانية مع ٥ عيادات في المنصورة',
          description: 'بدء التشغيل التجريبي المباشر داخل خمس عيادات جلدية وليزر بالمنصورة.',
        },
      ],
    },
    faq: {
      sectionNum: '16',
      eyebrow: 'إجابات واضحة',
      title: 'كل ما يسأل عنه مديرو العيادات قبل البدء.',
      items: [
        {
          q: 'ما مدى سرعة رد المساعد الذكي على رسائل واتساب وإنستغرام؟',
          a: 'صُمم Dermaflow AI للرد خلال ثوانٍ على مدار ٢٤ ساعة بالعربية أو الإنجليزية، وتوجيه المريض مباشرة لاختيار موعد مؤكد.',
        },
        {
          q: 'كيف يمنع حارس النبضات تسرب نبضات الليزر والمستهلكات؟',
          a: 'يقوم بتسجيل النبضات والمستهلكات المستخدمة وربطها بالحجوزات المؤكدة في الجدول، ويُظهر تنبيهاً فورياً عند وجود أي نبضات غير مرتبطة بحجز.',
        },
        {
          q: 'هل يشمل النظام ربطاً بنكياً أو تحليلات مالية معقدة؟',
          a: 'لا، نُبقي هذا الإصدار مركزاً على تحويل الحجوزات والتذكيرات وإعادة الجدولة وحارس النبضات. التكاملات البنكية والتحليلات المعقدة مؤجلة لمراحل قادمة.',
        },
        {
          q: 'هل يستطيع المريض تعديل موعده أو إلغاءه دون الاتصال بالاستقبال؟',
          a: 'نعم، تتيح التذكيرات الذكية للمريض إلغاء الموعد أو تغييره من داخل المحادثة مباشرة، مما يخفف العبء على الاستقبال.',
        },
        {
          q: 'كيف تنضم عيادات المنصورة للتجربة الميدانية في الأسبوع الرابع؟',
          a: 'أرسل طلب العرض أدناه باسم العيادة ورقم +20، وسينسق فريقنا معك جلسة عرض لحارس النبضات وأتمتة الحجوزات.',
        },
      ],
    },
    finalCta: {
      sectionNum: '17',
      eyebrow: 'ابدأ حماية عيادتك',
      title: 'كل موعد ضائع له ثمنه.',
      subtitle:
        'اطلب عرضاً موجهاً لنظام Dermaflow AI وحارس نبضات الليزر لعيادتك في المنصورة أو أي مدينة في مصر.',
      demoNote: 'عرض محاكاة · DEMO (نموذج معاينة لا يرسل بيانات خارجية)',
      form: {
        clinicNameLabel: 'اسم العيادة',
        clinicNamePlaceholder: 'مثال: عيادة النيل للتجميل والليزر',
        cityLabel: 'المدينة',
        cityPlaceholder: 'المنصورة',
        phoneLabel: 'رقم الواتساب (+20)',
        phonePlaceholder: '+20 10 0000 0000',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'hello@your-domain.com',
        planLabel: 'الباقة المطلوبة عند الإطلاق',
        planBasic: 'الأساسية · ٢,٠٠٠ ج.م / شهرياً',
        planPro: 'الاحترافية · ٣,٠٠٠ ج.م / شهرياً (تشمل حارس النبضات)',
        submitCta: 'طلب عرض محاكاة',
        errors: {
          clinicRequired: 'يرجى إدخال اسم العيادة.',
          phoneInvalid: 'يرجى إدخال رقم هاتف مصري صحيح يبدأ بـ +20 (مثال: +20 10 1234 5678).',
          emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح (مثال: hello@your-domain.com).',
        },
        successTitle: 'تم تسجيل طلب العرض المحاكى بنجاح',
        successBody:
          'شكراً لك. في بيئة التشغيل الفعلية، يتواصل معك مختص الإعداد في المنصورة عبر واتساب لتحديد موعد العرض المباشر.',
        resetButton: 'إرسال طلب آخر',
      },
    },
    footer: {
      wordmark: 'Dermaflow AI',
      tagline: 'الحماية والدقة لعيادات الجلدية والتجميل والليزر.',
      location: 'الانطلاق من المنصورة · مصر',
      navTitle: 'الأقسام',
      contactTitle: 'تواصل الإطلاق التجريبي',
      emailPlaceholder: 'hello@your-domain.com',
      phonePlaceholder: '+20 10 0000 0000',
      disclaimer: 'جميع لوحات البيانات وأرقام النبضات والمحادثات والنماذج المعروضة هي معاينات محاكاة (DEMO) لتوضيح تصميم المنتج.',
      copyright: '© ٢٠٢٦ Dermaflow AI. جميع الحقوق محفوظة.',
    },
  },
};
