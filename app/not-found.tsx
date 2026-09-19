import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-20 lg:py-32 bg-[#F7F2EA] flex items-center justify-center min-h-[70vh]">
      <Container>
        <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-8 md:p-14 rounded-[4px] border border-[#E8DDD0] shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[#151311] text-[#C4A36B] mx-auto flex items-center justify-center">
            <Sparkles className="w-7 h-7 stroke-[1.5]" />
          </div>

          <span className="font-cormorant text-sm tracking-[0.35em] text-[#C4A36B] uppercase font-semibold block">
            404 — PAGE NOT FOUND
          </span>

          <h1 className="text-3xl md:text-4xl font-normal text-[#151311]">
            الصفحة غير موجودة
          </h1>

          <div className="w-12 h-[1.5px] bg-[#C4A36B] mx-auto" />

          <p className="text-[#7B746E] text-sm md:text-base font-light leading-relaxed">
            عذراً، يبدو أن الصفحة أو القطعة التي تبحثين عنها غير متوفرة حالياً أو تم نقلها إلى عنوان آخر.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للرئيسية</span>
            </Link>
            <Link
              href="/shop"
              className="w-full sm:w-auto px-6 py-3.5 bg-white border border-[#151311] text-[#151311] text-xs font-medium hover:bg-[#151311] hover:text-[#F7F2EA] transition-all rounded-[2px] flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>تصفح المتجر</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
