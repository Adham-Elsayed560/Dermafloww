import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  reducedMotion: boolean;
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ reducedMotion, onComplete }) => {
  const [visible, setVisible] = useState(!reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 1550);

    return () => window.clearTimeout(timer);
  }, [reducedMotion, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2B231C] px-6 text-[#F5F1EB]"
        >
          <div className="w-full max-w-xs text-center">
            <svg viewBox="0 0 280 56" className="mx-auto mb-5 h-14 w-64 overflow-visible">
              <defs>
                <linearGradient id="preloaderGold" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8F7330" />
                  <stop offset="50%" stopColor="#E8D3A0" />
                  <stop offset="100%" stopColor="#C9A84C" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 10 28 L 88 28 L 106 10 L 122 46 L 138 14 L 152 38 L 166 28 L 270 28"
                fill="none"
                stroke="url(#preloaderGold)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl tracking-wide text-[#E8D3A0]"
            >
              Dermaflow AI
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
