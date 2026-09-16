import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const imageSizes = {
    sm: { width: 140, height: 50, className: 'h-10 sm:h-12 w-auto' },
    md: { width: 220, height: 80, className: 'h-14 sm:h-18 md:h-20 w-auto' },
    lg: { width: 280, height: 100, className: 'h-20 sm:h-24 lg:h-28 w-auto' },
  };

  const selected = imageSizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center group ${className}`}
    >
      <div className={`relative ${selected.className} flex items-center justify-center`}>
        <Image
          src="/images/malboos/malboos-logo.png"
          alt="ملبوس — MALBOOS"
          width={selected.width}
          height={selected.height}
          priority
          className="object-contain h-full w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
};
