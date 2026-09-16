import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  englishLabel?: string;
  linkHref?: string;
  linkText?: string;
  align?: 'right' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  englishLabel,
  linkHref,
  linkText,
  align = 'right',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 border-b border-[#E8DDD0]/50 pb-4 ${
        align === 'center' ? 'text-center md:text-center' : ''
      } ${className}`}
    >
      <div>
        {englishLabel && (
          <span className="font-cormorant text-xs md:text-sm tracking-[0.25em] text-[#C4A36B] uppercase block mb-1">
            {englishLabel}
          </span>
        )}
        <div className="flex items-center gap-3">
          <div className="w-6 h-[1.5px] bg-[#C4A36B]" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#151311]">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-[#7B746E] text-sm md:text-base mt-2 font-light max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 text-sm text-[#151311] hover:text-[#C4A36B] transition-colors mt-4 md:mt-0 font-medium group"
        >
          <span>{linkText}</span>
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#C4A36B]" />
        </Link>
      )}
    </div>
  );
};
