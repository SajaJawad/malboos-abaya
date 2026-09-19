import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'الشروط والأحكام | ملبوس',
  description:
    'الشروط والأحكام الخاصة باستعمال متجر ملبوس وحقوق الملكية الفكرية وضوابط الشراء والطلب.',
  alternates: {
    canonical: buildCanonicalUrl('/terms'),
  },
  openGraph: {
    title: 'الشروط والأحكام | ملبوس',
    description:
      'الشروط والأحكام الخاصة باستعمال متجر ملبوس وحقوق الملكية الفكرية.',
    url: buildCanonicalUrl('/terms'),
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#F7F2EA]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-[4px] border border-[#E8DDD0]">
          <div className="border-b border-[#E8DDD0] pb-6">
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase font-semibold block mb-1">
              TERMS OF SERVICE
            </span>
            <h1 className="text-3xl font-normal text-[#151311]">الشروط والأحكام</h1>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-[#7B746E] leading-relaxed font-light">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">1. القبول بالشروط</h2>
              <p>
                استخدامك لمتجر ملبوس وشراء منتجاتنا يعني موافقتك الكاملة على جميع الشروط والأحكام الواردة في هذه الصفحة والسياسات المرتبطة بها.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">2. أسعار وتوافر المنتجات</h2>
              <p>
                جميع الأسعار المعروضة في المتجر شاملة لضريبة القيمة المضافة ومسعرة بالريال السعودي. نحتفظ بالحق في تعديل الأسعار أو إيقاف المنتجات في أي وقت دون إشعار مسبق.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">3. الملكية الفكرية</h2>
              <p>
                جميع التصاميم، الصور، النصوص، وشعار ملبوس هي ملكية فكرية وحصرية لعلامة ملبوس، ويحظر إعادة استخدامها أو نسخها لأغراض تجارية دون إذن كتابي صريح.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
