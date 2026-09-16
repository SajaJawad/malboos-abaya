import React from 'react';
import { Container } from '@/components/ui/Container';

export default function PrivacyPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#F7F2EA]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-[4px] border border-[#E8DDD0]">
          <div className="border-b border-[#E8DDD0] pb-6">
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase font-semibold block mb-1">
              PRIVACY POLICY
            </span>
            <h1 className="text-3xl font-normal text-[#151311]">سياسة الخصوصية</h1>
          </div>

          <div className="space-y-6 text-xs md:text-sm text-[#7B746E] leading-relaxed font-light">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">1. جمع البيانات والمعلومات</h2>
              <p>
                نلتزم في ملبوس بالحفاظ على خصوصية بياناتك الشخصية والتزام أعلى معايير الأمان المتبعة عالمياً. نجمع فقط المعلومات الضرورية لإتمام طلباتك (مثل الاسم، العنوان، رقم التواصل والبريد الإلكتروني).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">2. استخدام البيانات</h2>
              <p>
                تُستخدم بياناتك فقط لمعالجة الطلبات وشحنها وتزويدك بتحديثات الشحنة، ولا يتم مشاركتها أو بيعها لأي أطراف ثالثة خارج شركات الشحن والدفع المعتمدة لدى المتجر.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[#151311]">3. حماية عمليات الدفع</h2>
              <p>
                جميع عمليات الدفع الإلكتروني المنجزة عبر المتجر مشفرة بروتوكوليا بتشفير SSL عالي الأمان، ولا نقوم بتخزين تفاصيل بطاقاتك الائتمانية في خوادمنا.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
