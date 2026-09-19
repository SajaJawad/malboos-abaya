'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 lg:py-20 bg-[#F7F2EA]">
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-cormorant text-xs tracking-[0.35em] text-[#C4A36B] uppercase font-semibold block">
            CONTACT US
          </span>
          <h1 className="text-3xl md:text-5xl font-normal text-[#151311]">
            تواصل معنا
          </h1>
          <p className="text-[#7B746E] text-sm md:text-base font-light">
            يسعدنا استقبال استفساراتك واقتراحاتك، فريق ملبوس في خدمتك دائماً
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#151311] text-[#F7F2EA] p-8 md:p-10 rounded-[4px] border border-[#C4A36B]/30 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-normal text-[#C4A36B]">قنوات التواصل المباشرة</h2>
              <p className="text-xs text-[#E8DDD0]/70 font-light leading-relaxed">
                يسعدنا الرد على جميع تساؤلاتك بشأن مقاسات القطع، تفاصيل الشحن والتوصيل، أو المساعدة في اختيار الهدايا.
              </p>

              <div className="space-y-4 pt-4 text-sm">
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-[#C4A36B] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-[#C4A36B]/40 flex items-center justify-center text-[#C4A36B]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#7B746E]">خدمة العملاء عبر الواتساب</span>
                    <span className="font-medium">+966 50 000 0000</span>
                  </div>
                </a>

                <a
                  href="mailto:support@malboos.com"
                  className="flex items-center gap-4 hover:text-[#C4A36B] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-[#C4A36B]/40 flex items-center justify-center text-[#C4A36B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#7B746E]">البريد الإلكتروني الرسمي</span>
                    <span className="font-medium">support@malboos.com</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-[#C4A36B] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-[#C4A36B]/40 flex items-center justify-center text-[#C4A36B]">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#7B746E]">حساب إنستغرام الرسمي</span>
                    <span className="font-medium">@MALBOOS</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#7B746E]/30 text-xs text-[#7B746E]">
              <p>أوقات عمل خدمة العملاء:</p>
              <p className="text-[#F7F2EA]">الأحد – الخميس: 9:00 صباحاً – 10:00 مساءً</p>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[4px] border border-[#E8DDD0]">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#C4A36B] mx-auto" />
                <h3 className="text-2xl font-normal text-[#151311]">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-xs text-[#7B746E]">
                  شكراً لتواصلك معنا. سيقوم فريق خدمة العملاء بالرد عليك خلال 24 ساعة.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-normal text-[#151311] mb-6 pb-2 border-b border-[#E8DDD0]">
                  أرسلي لنا رسالة
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">الاسم *</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخلي اسمك الكامل"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      required
                      placeholder="example@mail.com"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">رقم الجوال</label>
                    <input
                      type="tel"
                      placeholder="05XXXXXXXX"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">الموضوع *</label>
                    <input
                      type="text"
                      required
                      placeholder="استفسار عن طلب، مقاس، شحن..."
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#151311] mb-1">الرسالة *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="اكتبي تفاصيل الرسالة هنا..."
                    className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] shadow-sm"
                >
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
