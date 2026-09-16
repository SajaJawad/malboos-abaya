import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light' | 'gold';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const textColors = {
    dark: 'text-[#151311]',
    light: 'text-[#F7F2EA]',
    gold: 'text-[#C4A36B]',
  };

  const sizes = {
    sm: 'text-lg tracking-[0.2em]',
    md: 'text-2xl tracking-[0.25em]',
    lg: 'text-3xl lg:text-4xl tracking-[0.3em]',
  };

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center group ${className}`}
    >
      <span className={`font-kufi font-bold text-2xl lg:text-3xl ${textColors[variant]}`}>
        ملبوس
      </span>
      <span
        className={`font-cormorant uppercase font-light -mt-1 ${sizes[size]} ${textColors[variant]}`}
      >
        MALBOOS
      </span>
      <div className="w-4 h-[1px] bg-[#C4A36B] mt-0.5 group-hover:w-8 transition-all duration-300" />
    </Link>
  );
};
