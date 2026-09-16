'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { FAQS } from '@/data/faq';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="py-12 lg:py-20 bg-[#F7F2EA]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-[4px] border border-[#E8DDD0]">
          <div className="border-b border-[#E8DDD0] pb-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#151311] text-[#C4A36B] mx-auto flex items-center justify-center mb-3">
              <HelpCircle className="w-6 h-6 stroke-[1.5]" />
            </div>
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase font-semibold block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="text-3xl font-normal text-[#151311]">الأسئلة الشائعة</h1>
            <p className="text-xs text-[#7B746E] mt-2 font-light">
              إليك إجابات حول أبرز الاستفسارات المتعلقة بالطلبات، الشحن، والمقاسات
            </p>
          </div>

          <div className="divide-y divide-[#E8DDD0]">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center text-right text-sm md:text-base font-medium text-[#151311] hover:text-[#C4A36B] transition-colors py-2"
                >
                  <span className="flex-1 ml-4">{faq.question}</span>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#C4A36B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#7B746E]" />
                  )}
                </button>

                {openIndex === idx && (
                  <div className="pt-2 pb-3 text-xs md:text-sm text-[#7B746E] font-light leading-relaxed">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-2 text-[10px] px-2 py-0.5 bg-[#F7F2EA] text-[#76604D] rounded">
                      التصنيف: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
