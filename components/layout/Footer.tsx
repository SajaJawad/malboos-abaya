import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Instagram, MessageCircle, CreditCard, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151311] text-[#F7F2EA] pt-16 pb-8 border-t border-[#C4A36B]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#7B746E]/30">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="gold" size="lg" className="items-start" />
            <p className="text-[#7B746E] text-sm font-light leading-relaxed max-w-sm mt-4">
              في ملبوس نؤمن أن ما ترتدينه ليس مجرد قطعة، بل جزء من حضورك وتفاصيلك اليومية. تصميمات تدمج بين الأصالة الخليجية والحرفية المعاصرة.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C4A36B]/30 flex items-center justify-center text-[#C4A36B] hover:bg-[#C4A36B] hover:text-[#151311] transition-all"
                aria-label="إنستغرام"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C4A36B]/30 flex items-center justify-center text-[#C4A36B] hover:bg-[#C4A36B] hover:text-[#151311] transition-all font-bold text-xs"
                aria-label="تيك توك"
              >
                TK
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C4A36B]/30 flex items-center justify-center text-[#C4A36B] hover:bg-[#C4A36B] hover:text-[#151311] transition-all"
                aria-label="واتساب"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h3 className="text-[#C4A36B] text-base font-medium mb-4 pb-2 border-b border-[#C4A36B]/20">
              تسوقي
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E8DDD0]/80">
              <li>
                <Link href="/shop?category=abayas" className="hover:text-[#C4A36B] transition-colors">
                  العبايات
                </Link>
              </li>
              <li>
                <Link href="/shop?category=makhawer" className="hover:text-[#C4A36B] transition-colors">
                  المخاوير
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=new" className="hover:text-[#C4A36B] transition-colors">
                  الجديد
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=bestseller" className="hover:text-[#C4A36B] transition-colors">
                  الأكثر مبيعًا
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Col */}
          <div>
            <h3 className="text-[#C4A36B] text-base font-medium mb-4 pb-2 border-b border-[#C4A36B]/20">
              المساعدة
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E8DDD0]/80">
              <li>
                <Link href="/faq" className="hover:text-[#C4A36B] transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#C4A36B] transition-colors">
                  الشحن والتوصيل
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#C4A36B] transition-colors">
                  الاستبدال والاسترجاع
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-[#C4A36B] transition-colors">
                  دليل المقاسات
                </Link>
              </li>
            </ul>
          </div>

          {/* About Col */}
          <div>
            <h3 className="text-[#C4A36B] text-base font-medium mb-4 pb-2 border-b border-[#C4A36B]/20">
              ملبوس
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E8DDD0]/80">
              <li>
                <Link href="/about" className="hover:text-[#C4A36B] transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C4A36B] transition-colors">
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#C4A36B] transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C4A36B] transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & payment methods */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7B746E]">
          <p>© MALBOOS 2026 — جميع الحقوق محفوظة</p>
          <div className="flex items-center gap-3">
            <span className="border border-[#7B746E]/40 px-2 py-0.5 rounded text-[10px] text-[#E8DDD0]">مدى Mada</span>
            <span className="border border-[#7B746E]/40 px-2 py-0.5 rounded text-[10px] text-[#E8DDD0]">Visa</span>
            <span className="border border-[#7B746E]/40 px-2 py-0.5 rounded text-[10px] text-[#E8DDD0]">Mastercard</span>
            <span className="border border-[#7B746E]/40 px-2 py-0.5 rounded text-[10px] text-[#E8DDD0]">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
