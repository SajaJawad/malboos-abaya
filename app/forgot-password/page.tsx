'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 bg-[#F7F2EA]">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-[4px] border border-[#E8DDD0] shadow-sm text-center space-y-6">
        <Logo size="sm" />
        <h1 className="text-2xl font-normal text-[#151311]">استعادة كلمة المرور</h1>

        {submitted ? (
          <div className="space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#C4A36B] mx-auto" />
            <p className="text-sm text-[#151311]">
              تم إرسال رابط استعادة كلمة المرور إلى البريد الإلكتروني: <strong>{email}</strong>
            </p>
            <p className="text-xs text-[#7B746E]">
              يرجى مراجعة صندوق الوارد والضغط على الرابط المرفق لإعادة تعيين كلمة المرور.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#151311] hover:text-[#C4A36B] pt-4"
            >
              <span>العودة لصفحة تسجيل الدخول</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            <p className="text-xs text-[#7B746E] text-center">
              أدخلي بريدك الإلكتروني المسجل وسنرسل لك رابطاً لإعادة تعيين كلمة المرور.
            </p>

            <div>
              <label className="block text-xs font-semibold text-[#151311] mb-1">البريد الإلكتروني</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px]"
            >
              إرسال رابط الاستعادة
            </button>

            <div className="text-center pt-2">
              <Link href="/login" className="text-xs text-[#7B746E] hover:text-[#151311]">
                تذكرت كلمة المرور؟ تسجيل الدخول
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
