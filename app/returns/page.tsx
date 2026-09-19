import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'سياسة الاستبدال والاسترجاع | ملبوس',
  description:
    'تعرفي على شروط وإجراءات الاستبدال والاسترجاع المرنة خلال 7 أيام في متجر ملبوس لضمان تجربة تسوق آمنة ومريحة.',
  alternates: {
    canonical: buildCanonicalUrl('/returns'),
  },
  openGraph: {
    title: 'سياسة الاستبدال والاسترجاع | ملبوس',
    description:
      'شروط وإجراءات الاستبدال والاسترجاع المرنة خلال 7 أيام في متجر ملبوس.',
    url: buildCanonicalUrl('/returns'),
  },
};

export default function ReturnsPolicyPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#F7F2EA]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-[4px] border border-[#E8DDD0]">
          <div className="border-b border-[#E8DDD0] pb-6">
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase font-semibold block mb-1">
              RETURNS & EXCHANGES
            </span>
            <h1 className="text-3xl font-normal text-[#151311]">الاستبدال والاسترجاع</h1>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-[#7B746E] leading-relaxed font-light">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">1. المدوّلة والمهلة المتاحة</h2>
              <p>
                يحق للعميلة طلب استبدال أو استرجاع المنتجات خلال 7 أيام من تاريخ استلام الشحنة، شريطة أن تكون القطعة بحالتها الأصلية مع بطاقات السعر وتغليف ملبوس الأنيق غير متضرر.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">2. شروط القبول</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>أن تكون القطعة غير مستخدمة، غير مغسولة، وخالية من أي روائح عطرية أو تلفيات.</li>
                <li>إرفاق الفاتورة أو رقم الطلب الإلكتروني عند تقديم الطلب.</li>
                <li>القطع المعدلة بناءً على طلب خاص من العميلة لا تُسترجع إلا في حال وجود عيب مصنعي.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">3. كيفية تقديم طلب الاسترجاع</h2>
              <p>
                يمكنك تقديم الطلب بالتواصل المباشر مع فريق خدمة العملاء عبر الواتساب على الرقم المخصص أو عبر البريد الإلكتروني support@malboos.com وسيتولى مندوبنا استلام الشحنة منك.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
