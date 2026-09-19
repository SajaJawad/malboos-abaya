import React from 'react';
import Link from 'next/link';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 bg-white rounded-[4px] border border-[#E8DDD0] shadow-xs max-w-xl mx-auto ${className}`}
      role="status"
      aria-live="polite"
    >
      {Icon && (
        <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#C4A36B]/30 flex items-center justify-center mb-5 text-[#C4A36B] shadow-2xs">
          <Icon className="w-7 h-7 stroke-[1.25]" />
        </div>
      )}

      <h3 className="text-xl md:text-2xl font-normal text-[#151311] mb-2 leading-tight">
        {title}
      </h3>

      {description && (
        <p className="text-[#7B746E] text-xs md:text-sm font-light leading-relaxed max-w-md mb-6">
          {description}
        </p>
      )}

      {actionLabel && (
        <div>
          {actionHref ? (
            <Link
              href={actionHref}
              className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] shadow-sm group"
            >
              <span>{actionLabel}</span>
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            </Link>
          ) : onAction ? (
            <button
              onClick={onAction}
              className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] shadow-sm group cursor-pointer"
            >
              <span>{actionLabel}</span>
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};
