import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'dark' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-[#151311] text-[#F7F2EA]',
    gold: 'bg-[#C4A36B] text-[#151311]',
    dark: 'bg-[#76604D] text-[#FFFFFF]',
    outline: 'border border-[#C4A36B] text-[#C4A36B] bg-transparent',
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-[2px] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
