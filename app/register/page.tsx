import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/ui/Logo';

export default function RegisterPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-4 bg-[#F7F2EA]">
      <div className="max-w-4xl w-full bg-white rounded-[4px] border border-[#E8DDD0] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
        {/* Visual Image Side */}
        <div className="relative min-h-[300px] md:min-h-full hidden md:block bg-[#E8DDD0]/40">
          <Image
            src="/images/malboos/collections/new-collection.jpg"
            alt="إنشاء حساب - ملبوس"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151311]/60 via-transparent to-transparent flex flex-col justify-end p-8 text-[#F7F2EA]">
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase font-semibold">
              JOIN THE CLUB
            </span>
            <p className="text-xl font-light mt-1">انضمي إلى مجتمع ملبوس الراقي</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
          <div className="text-center md:text-right">
            <Logo size="sm" />
            <h1 className="text-2xl font-normal text-[#151311] mt-4">إنشاء حساب جديد</h1>
            <p className="text-xs text-[#7B746E] mt-1">استمتعي بتجربة تسوق فريدة وعروض حصرية</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#151311] mb-1">الاسم الكامل *</label>
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

            <div>
              <label className="block text-xs font-semibold text-[#151311] mb-1">رقم الجوال *</label>
              <input
                type="tel"
                required
                placeholder="05XXXXXXXX"
                className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#151311] mb-1">كلمة المرور *</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px]"
            >
              إنشاء حساب جديد
            </button>
          </form>

          <div className="text-center pt-4 border-t border-[#E8DDD0] text-xs text-[#7B746E]">
            لديك حساب بالفعل؟{' '}
            <Link href="/login" className="text-[#151311] font-bold hover:text-[#C4A36B]">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
