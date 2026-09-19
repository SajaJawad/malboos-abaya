'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ShieldCheck, Truck, CreditCard, ArrowLeft, ChevronLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<number>(1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'الرياض',
    district: '',
    address: '',
    paymentMethod: 'mada',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      clearCart();
    }
  };

  const shippingFee = subtotal >= 300 ? 0 : 25;
  const grandTotal = subtotal + shippingFee;

  if (isCompleted) {
    return (
      <div className="py-20 bg-[#F7F2EA]">
        <Container>
          <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-[4px] border border-[#C4A36B]/40 text-center space-y-6 shadow-md">
            <div className="w-16 h-16 bg-[#151311] text-[#C4A36B] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <span className="font-cormorant text-xs tracking-[0.3em] text-[#C4A36B] uppercase block">
              ORDER CONFIRMED
            </span>
            <h1 className="text-3xl font-normal text-[#151311]">
              تم إستلام طلبك بنجاح!
            </h1>
            <p className="text-xs text-[#7B746E]">
              رقم الطلب الخاص بك: <strong className="text-[#151311]">#MLB-2026-8942</strong>
            </p>
            <p className="text-sm text-[#7B746E] font-light leading-relaxed">
              شكراً لتسوقك من ملبوس. تم ارسال تفاصيل الشحنة ورابط التتبع إلى بريدك الإلكتروني{' '}
              <strong className="text-[#151311]">{formData.email || 'المدخل'}</strong>.
            </p>
            <div className="pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#151311] text-[#F7F2EA] text-sm font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px]"
              >
                <span>متابعة التسوق</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-10 bg-[#F7F2EA] min-h-screen">
      <Container>
        {/* Checkout Header */}
        <div className="flex justify-between items-center pb-6 border-b border-[#E8DDD0] mb-8">
          <Logo size="sm" />
          <div className="flex items-center gap-2 text-xs text-[#7B746E]">
            <ShieldCheck className="w-4 h-4 text-[#C4A36B]" />
            <span>إتمام طلب آمن ومحمي 100%</span>
          </div>
        </div>

        {/* Step Wizard Progress */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between text-xs text-center">
            {['1. التواصل', '2. العنوان', '3. طريقة الشحن', '4. الدفع والمراجعة'].map((title, idx) => (
              <div
                key={idx}
                className={`flex-1 flex flex-col items-center gap-2 ${
                  step === idx + 1
                    ? 'text-[#151311] font-bold'
                    : step > idx + 1
                    ? 'text-[#C4A36B]'
                    : 'text-[#7B746E]'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                    step === idx + 1
                      ? 'bg-[#151311] text-[#F7F2EA]'
                      : step > idx + 1
                      ? 'bg-[#C4A36B] text-[#151311]'
                      : 'bg-[#E8DDD0] text-[#7B746E]'
                  }`}
                >
                  {idx + 1}
                </div>
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Steps Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleNextStep} className="bg-white p-6 md:p-8 rounded-[3px] border border-[#E8DDD0] space-y-6">
              {/* Step 1: Contact Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-normal text-[#151311] pb-2 border-b border-[#E8DDD0]">
                    1. معلومات التواصل
                  </h2>
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">الاسم الكامل *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="أدخلي اسمك الرباعي"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-sm text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#151311] mb-1">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@mail.com"
                        className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-sm text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#151311] mb-1">رقم الجوال (واتساب) *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="05XXXXXXXX"
                        className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-sm text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping Address */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-normal text-[#151311] pb-2 border-b border-[#E8DDD0]">
                    2. عنوان التوصيل
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#151311] mb-1">المدينة *</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-sm text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                      >
                        <option value="الرياض">الرياض</option>
                        <option value="جدة">جدة</option>
                        <option value="الدمام">الدمام</option>
                        <option value="مكة المكرمة">مكة المكرمة</option>
                        <option value="المدينة المنورة">المدينة المنورة</option>
                        <option value="دبي (الإمارات)">دبي (الإمارات)</option>
                        <option value="الكويت">الكويت</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#151311] mb-1">الحي *</label>
                      <input
                        type="text"
                        name="district"
                        required
                        value={formData.district}
                        onChange={handleInputChange}
                        placeholder="اسم الحي"
                        className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-sm text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">تفاصيل الشارع والمنزل *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="اسم الشارع، رقم العمارة أو الشقة"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-sm text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Shipping Method */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-normal text-[#151311] pb-2 border-b border-[#E8DDD0]">
                    3. طريقة الشحن
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border border-[#C4A36B] bg-[#F7F2EA]/40 rounded-[2px] cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input type="radio" checked readOnly className="accent-[#C4A36B]" />
                        <div>
                          <p className="text-sm font-medium text-[#151311]">الشحن السريع الفاخر</p>
                          <p className="text-xs text-[#7B746E]">توصيل خلال 2-4 أيام عمل مع التغليف الفاخر</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-[#151311]">
                        {shippingFee === 0 ? 'مجاني' : '25 ر.س'}
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-normal text-[#151311] pb-2 border-b border-[#E8DDD0]">
                    4. وسيلة الدفع والمراجعة
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'mada', name: 'مدى (Mada)' },
                      { id: 'visa', name: 'فيزا / ماستركارد' },
                      { id: 'apple', name: 'Apple Pay' },
                      { id: 'stc', name: 'STC Pay' },
                    ].map((pm) => (
                      <label
                        key={pm.id}
                        className={`p-4 border rounded-[2px] cursor-pointer flex items-center justify-between transition-all ${
                          formData.paymentMethod === pm.id
                            ? 'border-[#151311] bg-[#151311] text-[#F7F2EA]'
                            : 'border-[#E8DDD0] bg-white text-[#151311]'
                        }`}
                      >
                        <span className="text-xs font-medium">{pm.name}</span>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={pm.id}
                          checked={formData.paymentMethod === pm.id}
                          onChange={handleInputChange}
                          className="accent-[#C4A36B]"
                        />
                      </label>
                    ))}
                  </div>

                  <div className="p-4 bg-[#F7F2EA] rounded-[2px] text-xs text-[#7B746E] space-y-1">
                    <p>✓ بياناتك محمية بتشفير SSL أمان 100%.</p>
                    <p>✓ سيتم إصدار فاتورة رسمية إلكترونية فور تأكيد الدفع.</p>
                    <p className="text-[11px] text-[#C4A36B] font-medium pt-1">✦ وضع تجريبي للعرض (Demo Checkout Mode)</p>
                  </div>
                </div>
              )}

              {/* Step Action Buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-[#E8DDD0]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((prev) => prev - 1)}
                    className="px-6 py-3 border border-[#E8DDD0] text-xs font-medium text-[#151311] hover:bg-[#F7F2EA]"
                  >
                    السابق
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px]"
                >
                  {step === 4 ? 'تأكيد وإتمام الطلب الآن' : 'متابعة الخطوة التالية'}
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Order Summary (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-[3px] border border-[#E8DDD0] space-y-6 sticky top-28">
              <h3 className="text-base font-medium text-[#151311] pb-3 border-b border-[#E8DDD0]">
                القطع المطلوبة ({cart.length})
              </h3>

              <div className="max-h-64 overflow-y-auto space-y-3 divide-y divide-[#E8DDD0]">
                {cart.map((item, idx) => (
                  <div key={idx} className="pt-3 first:pt-0 flex gap-3 text-xs">
                    <div className="relative w-12 h-16 bg-[#F7F2EA] rounded-[2px] overflow-hidden flex-shrink-0 border border-[#E8DDD0]">
                      <Image src={item.product.images[0]} alt="" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#151311] line-clamp-1">{item.product.name}</p>
                      <p className="text-[#7B746E]">المقاس: {item.selectedSize} | العدد: {item.quantity}</p>
                      <p className="font-semibold text-[#151311] mt-1">{item.product.price * item.quantity} ر.س</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E8DDD0] space-y-2 text-xs">
                <div className="flex justify-between text-[#7B746E]">
                  <span>المجموع الفرعي:</span>
                  <span className="font-medium text-[#151311]">{subtotal} ر.س</span>
                </div>
                <div className="flex justify-between text-[#7B746E]">
                  <span>رسوم الشحن:</span>
                  <span className="font-medium text-[#C4A36B]">
                    {shippingFee === 0 ? 'مجاني' : '25 ر.س'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#151311] pt-2 border-t border-[#E8DDD0]">
                  <span>الإجمالي:</span>
                  <span>{grandTotal} ر.س</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
