'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-[#E8DDD0] text-[#151311] border-y border-[#C4A36B]/30">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#151311] text-[#C4A36B] mx-auto flex items-center justify-center">
          <Mail className="w-5 h-5 stroke-[1.5]" />
        </div>

        <span className="font-cormorant text-xs tracking-[0.3em] text-[#76604D] uppercase font-semibold block">
          NEWSLETTER
        </span>

        <h2 className="text-3xl md:text-4xl font-normal text-[#151311]">
          كوني أول من يعرف
        </h2>

        <p className="text-[#76604D] text-sm md:text-base font-light max-w-lg mx-auto">
          اشتركي ليصلك جديد ملبوس، الإصدارات الحصرية والعروض الخاصة مباشرة إلى بريدك.
        </p>

        {submitted ? (
          <div className="p-4 bg-white/80 rounded-[3px] border border-[#C4A36B] flex items-center justify-center gap-2 text-[#151311] text-sm max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5 text-[#C4A36B]" />
            <span>شكراً لاشتراكك! يسعدنا انضمامك إلى مجتمع ملبوس.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخلي بريدك الإلكتروني..."
              required
              className="flex-1 bg-white border border-[#C4A36B]/40 px-4 py-3.5 text-sm text-[#151311] placeholder-[#7B746E] focus:outline-none focus:border-[#151311] rounded-[2px]"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#151311] text-[#F7F2EA] text-sm font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] shadow-sm whitespace-nowrap"
            >
              اشتركي
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
