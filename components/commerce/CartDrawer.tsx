'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#151311]/60 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#F7F2EA] shadow-2xl border-l border-[#C4A36B]/30 flex flex-col justify-between z-10">
        {/* Header */}
        <div className="p-6 border-b border-[#E8DDD0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#C4A36B]" />
            <h2 className="text-xl font-normal text-[#151311]">
              حقيبة التسوق ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-[#151311] hover:text-[#C4A36B] transition-colors"
            aria-label="إغلاق السلة"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-[#E8DDD0]">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-16 h-16 text-[#C4A36B]/40 mb-4 stroke-[1]" />
              <p className="text-lg font-normal text-[#151311] mb-2">حقيبة التسوق فارغة</p>
              <p className="text-sm text-[#7B746E] max-w-xs mb-6 font-light">
                استكشفي أحدث مجموعاتنا من العبايات والمخاوير الفاخرة
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-[#151311] text-[#F7F2EA] text-sm font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all"
              >
                متابعة التسوق
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.product.id}-${item.selectedSize}-${idx}`} className="pt-4 first:pt-0 flex gap-4">
                <div className="relative w-20 h-24 bg-[#E8DDD0]/50 rounded-[2px] overflow-hidden flex-shrink-0 border border-[#E8DDD0]">
                  <Image
                    src={item.product.images[0] || '/images/malboos/abayas/abaya-1.jpg'}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-normal text-[#151311]">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-[#7B746E] hover:text-red-700 transition-colors p-1"
                        aria-label="حذف"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-xs text-[#7B746E] mt-1 space-x-2 space-x-reverse font-light">
                      <span>المقاس: <strong className="font-medium text-[#151311]">{item.selectedSize}</strong></span>
                      {item.selectedColor && (
                        <span>• اللون: <strong className="font-medium text-[#151311]">{item.selectedColor}</strong></span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#C4A36B]/40 rounded-[2px] bg-white">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                        className="p-1 hover:text-[#C4A36B] transition-colors"
                        aria-label="تقليل"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-medium text-[#151311]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                        className="p-1 hover:text-[#C4A36B] transition-colors"
                        aria-label="زيادة"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-sm font-medium text-[#151311]">
                      {item.product.price * item.quantity} ر.س
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#E8DDD0]/40 border-t border-[#E8DDD0] space-y-4">
            <div className="flex justify-between items-center text-base font-medium text-[#151311]">
              <span>المجموع الفرعي:</span>
              <span className="text-lg font-semibold text-[#151311]">{subtotal} ر.س</span>
            </div>
            <p className="text-xs text-[#7B746E] font-light text-center">
              الشحن والضرائب يُحسب عند إتمام الطلب
            </p>

            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full py-3.5 bg-[#151311] text-[#F7F2EA] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#C4A36B] hover:text-[#151311] transition-all shadow-md"
              >
                <span>إتمام الطلب</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              <Link
                href="/cart"
                onClick={closeCart}
                className="w-full py-2.5 text-center block text-xs text-[#151311] font-medium hover:text-[#C4A36B] transition-colors"
              >
                عرض السلة التفصيلية
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
