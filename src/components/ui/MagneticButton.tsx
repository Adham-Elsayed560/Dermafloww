import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'gold' | 'espresso' | 'outline-gold' | 'outline-espresso';
  reducedMotion?: boolean;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'gold',
  reducedMotion = false,
  className = '',
  onClick,
  type = 'button',
  ...rest
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion || !btnRef.current) return;
    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = btnRef.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * 0.18, y: relY * 0.22 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const variantClasses: Record<NonNullable<MagneticButtonProps['variant']>, string> = {
    gold: 'bg-gold-metallic text-[#2B231C] font-semibold shadow-[0_10px_30px_-10px_rgba(201,168,76,0.45)] hover:brightness-105',
    espresso:
      'bg-[#3D332A] text-[#F5F1EB] border border-[#C9A84C]/35 hover:bg-[#2B231C] hover:border-[#C9A84C]/65',
    'outline-gold':
      'bg-transparent text-[#E8D3A0] border border-[#C9A84C]/55 hover:bg-[#C9A84C]/12 hover:border-[#E8D3A0]',
    'outline-espresso':
      'bg-transparent text-[#3D332A] border border-[#3D332A]/30 hover:border-[#3D332A] hover:bg-[#3D332A]/5',
  };

  return (
    <button
      ref={btnRef}
      type={type}
      data-cursor="magnetic"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-6 py-3 text-sm tracking-wide transition-[transform,filter,background-color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] ${variantClasses[variant]} ${className}`}
      style={{
        transform: reducedMotion
          ? undefined
          : `translate3d(${offset.x.toFixed(1)}px, ${offset.y.toFixed(1)}px, 0)`,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
