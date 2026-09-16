'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft, Tag, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  const recommendations = PRODUCTS.slice(0, 4);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'MALBOOS10') {
      setDiscount(Math.round(subtotal * 0.1));
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('كوبون غير صالح. جربي الكوبون التجريبي: MALBOOS10');
      setCouponApplied(false);
      setDiscount(0);
    }
  };

  const finalTotal = Math.max(0, subtotal - discount);

  return (
    <div className="py-10 lg:py-16">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7B746E] mb-6">
          <Link href="/" className="hover:text-[#151311]">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-[#151311] font-medium">حقيبة التسوق</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-normal text-[#151311] mb-8 pb-4 border-b border-[#E8DDD0]">
          حقيبة التسوق ({totalItems})
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[3px] border border-[#E8DDD0] max-w-2xl mx-auto p-8 my-8">
            <ShoppingBag className="w-20 h-20 text-[#C4A36B]/40 mx-auto mb-4 stroke-[1]" />
            <h2 className="text-2xl font-normal text-[#151311] mb-2">حقيبة التسوق فارغة حالياً</h2>
            <p className="text-[#7B746E] text-sm mb-6 font-light">
              لم تقمي بإضافة أي قطع إلى الحقيبة بعد. تصفحي مجموعات العبايات والمخاوير المميزة
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#151311] text-[#F7F2EA] text-sm font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px]"
            >
              <span>تسوقي التشكيلة الكاملة</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            {/* Cart Items List (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white p-6 rounded-[3px] border border-[#E8DDD0] space-y-6 divide-y divide-[#E8DDD0]">
                {cart.map((item, idx) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${idx}`} className="pt-6 first:pt-0 flex gap-4 md:gap-6">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-32 bg-[#E8DDD0]/40 rounded-[2px] overflow-hidden flex-shrink-0 border border-[#E8DDD0]">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <Link
                              href={`/product/${item.product.slug}`}
                              className="text-base font-normal text-[#151311] hover:text-[#C4A36B] transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            <p className="text-xs text-[#7B746E] mt-1">
                              التصنيف: {item.product.categoryAr}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                            className="text-[#7B746E] hover:text-red-700 transition-colors p-1"
                            title="حذف القطعة"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-[#7B746E] mt-2">
                          <span>المقاس: <strong className="text-[#151311]">{item.selectedSize}</strong></span>
                          {item.selectedColor && (
                            <span>اللون: <strong className="text-[#151311]">{item.selectedColor}</strong></span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Qty Controls */}
                        <div className="flex items-center border border-[#E8DDD0] rounded-[2px] bg-[#F7F2EA]">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                            className="p-1.5 text-[#151311] hover:text-[#C4A36B]"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-4 text-xs font-medium text-[#151311]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                            className="p-1.5 text-[#151311] hover:text-[#C4A36B]"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-base font-medium text-[#151311]">
                          {item.product.price * item.quantity} ر.س
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Box */}
              <div className="bg-white p-6 rounded-[3px] border border-[#E8DDD0]">
                <form onSubmit={handleApplyCoupon} className="flex gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="أدخلي رمز كود الخصم (جربي: MALBOOS10)"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] px-4 py-3 text-xs text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px]"
                    />
                    <Tag className="w-4 h-4 text-[#7B746E] absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px]"
                  >
                    تطبيق
                  </button>
                </form>
                {couponApplied && (
                  <p className="text-xs text-green-700 mt-2 font-medium">
                    تم تطبيق خصم 10% بنجاح!
                  </p>
                )}
                {couponError && (
                  <p className="text-xs text-red-600 mt-2">{couponError}</p>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-white p-6 rounded-[3px] border border-[#E8DDD0] space-y-6 sticky top-28">
                <h3 className="text-lg font-medium text-[#151311] pb-3 border-b border-[#E8DDD0]">
                  ملخص الطلب
                </h3>

                <div className="space-y-3 text-sm text-[#7B746E]">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي:</span>
                    <span className="text-[#151311] font-medium">{subtotal} ر.س</span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between text-green-700">
                      <span>خصم الكوبون (10%):</span>
                      <span className="font-medium">-{discount} ر.س</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>قيمة الشحن والتوصيل:</span>
                    <span className="text-[#C4A36B] font-medium">
                      {subtotal >= 300 ? 'مجاني' : '25 ر.س'}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#E8DDD0] flex justify-between text-base font-semibold text-[#151311]">
                    <span>الإجمالي النهائي:</span>
                    <span className="text-xl text-[#151311]">
                      {subtotal >= 300 ? finalTotal : finalTotal + 25} ر.س
                    </span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-4 bg-[#151311] text-[#F7F2EA] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] shadow-sm block text-center"
                >
                  <span>الاستمرار لإتمام الطلب</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-center gap-2 text-xs text-[#7B746E] pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#C4A36B]" />
                  <span>دفع آمن ومشفر 100% مع ملبوس</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Add-ons Section */}
        <div className="pt-12 border-t border-[#E8DDD0]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-[#C4A36B]" />
            <h2 className="text-2xl font-normal text-[#151311]">قد تكمل إطلالتك</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recommendations.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
