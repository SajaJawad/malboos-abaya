import React, { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  description?: string;
  retryLabel?: string;
  onRetry?: () => void | Promise<void>;
  showHomeAction?: boolean;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'حدث خطأ غير متوقع',
  description = 'تعذر تحميل المحتوى الآن. يرجى المحاولة مرة أخرى.',
  retryLabel = 'إعادة المحاولة',
  onRetry,
  showHomeAction = true,
  className = '',
}) => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    if (!onRetry) return;
    try {
      setIsRetrying(true);
      await onRetry();
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-14 px-6 bg-white rounded-[4px] border border-[#E8DDD0] shadow-xs max-w-lg mx-auto ${className}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#C4A36B]/40 flex items-center justify-center mb-5 text-[#C4A36B] shadow-2xs">
        <AlertCircle className="w-7 h-7 stroke-[1.25]" />
      </div>

      <h3 className="text-xl font-normal text-[#151311] mb-2 leading-tight">
        {title}
      </h3>

      <p className="text-[#7B746E] text-xs md:text-sm font-light leading-relaxed max-w-sm mb-6">
        {description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {onRetry && (
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] disabled:opacity-60 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRetrying ? 'animate-spin' : ''}`} />
            <span>{isRetrying ? 'جاري التحقيق...' : retryLabel}</span>
          </button>
        )}

        {showHomeAction && (
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#E8DDD0] text-[#151311] text-xs font-medium hover:border-[#C4A36B] transition-all rounded-[2px]"
          >
            <Home className="w-3.5 h-3.5 text-[#C4A36B]" />
            <span>العودة للرئيسية</span>
          </Link>
        )}
      </div>
    </div>
  );
};
