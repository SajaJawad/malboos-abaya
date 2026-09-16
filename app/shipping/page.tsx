import React from 'react';
import { Container } from '@/components/ui/Container';

export default function ShippingPolicyPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#F7F2EA]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-[4px] border border-[#E8DDD0]">
          <div className="border-b border-[#E8DDD0] pb-6">
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase font-semibold block mb-1">
              POLICY & DELIVERY
            </span>
            <h1 className="text-3xl font-normal text-[#151311]">الشحن والتوصيل</h1>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-[#7B746E] leading-relaxed font-light">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">1. مدة التوصيل داخل المملكة</h2>
              <p>
                نحرص في ملبوس على تجهيز الطلبات بسرعة فائقة. يستغرق التوصيل داخل مدينة الرياض من 24 إلى 48 ساعة عمل. أما باقي مدن ومناطق المملكة، فيستغرق الشحن عبر شركائنا من 2 إلى 4 أيام عمل.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">2. تكلفة الشحن</h2>
              <p>
                الشحن مجاني لجميع الطلبات التي تزيد قيمتها عن 300 ريال سعودي. للطلبات أقل من 300 ريال، تبلغ رسوم الشحن الثابتة 25 ريالات سعودي فقط.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">3. الشحن لدول مجلس التعاون الخليجي</h2>
              <p>
                نشحن لجميع دول الخليج العربي (الإمارات، الكويت، قطر، البحرين، عمان) عبر خدمة الشحن الجوي السريع، ويستغرق التوصيل عادةً من 3 إلى 6 أيام عمل.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">4. تتبع الشحنة</h2>
              <p>
                بمجرد تسليم طلبك لشركة الشحن، سيصلك رابط تتبع إلكتروني عبر الرسائل النصية القصيرة والبريد الإلكتروني لمتابعة خط سير الشحنة حتى وصولها لباب منزلك.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
