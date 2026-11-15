import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  reducedMotion?: boolean;
  dark?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  reducedMotion = false,
  dark = false,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - yPct) * 6;
    const ry = (xPct - 0.5) * 6;
    setTilt({ rx, ry, gx: xPct * 100, gy: yPct * 100, active: true });
  };

  const handleMouseLeave = () => {
    setTilt((prev) => ({ ...prev, rx: 0, ry: 0, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl border transition-[border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        dark
          ? 'border-[#C9A84C]/25 bg-[#1E2229] text-[#F5F1EB] hover:border-[#C9A84C]/55'
          : 'border-[#3D332A]/12 bg-[#FAF7F2] text-[#3D332A] hover:border-[#C9A84C]/55'
      } ${className}`}
      style={{
        transform:
          reducedMotion || !tilt.active
            ? 'perspective(900px) rotateX(0deg) rotateY(0deg)'
            : `perspective(900px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg) translate3d(0, -2px, 0)`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: tilt.active && !reducedMotion ? 1 : 0,
          background: `radial-gradient(360px circle at ${tilt.gx}% ${tilt.gy}%, rgba(201, 168, 76, 0.14), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
