'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Package, MapPin, Heart, LogOut, ChevronLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/product/ProductCard';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses' | 'wishlist'>('orders');
  const { wishlist } = useWishlist();

  const mockOrders = [
    {
      id: 'MLB-2026-8942',
      date: '14 سبتمبر 2026',
      status: 'قيد التوصيل',
      statusColor: 'bg-amber-100 text-amber-800',
      total: 840,
      itemsCount: 2,
      items: ['عباية كلوش ملكي', 'مخوار مطرز فاخر'],
    },
    {
      id: 'MLB-2026-7120',
      date: '02 أغسطس 2026',
      status: 'تم التسليم',
      statusColor: 'bg-emerald-100 text-emerald-800',
      total: 360,
      itemsCount: 1,
      items: ['عباية لينن كلاسيك'],
    },
  ];

  return (
    <div className="py-10 lg:py-16">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7B746E] mb-6">
          <Link href="/" className="hover:text-[#151311]">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-[#151311] font-medium">حسابي الشخصي</span>
        </div>

        <h1 className="text-3xl font-normal text-[#151311] mb-8 pb-4 border-b border-[#E8DDD0]">
          مرحباً بك، سارة الجواد
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Dashboard Navigation Tabs (3 cols) */}
          <aside className="lg:col-span-3 bg-white p-4 rounded-[3px] border border-[#E8DDD0] h-fit">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-xs md:text-sm font-medium rounded-[2px] transition-all ${
                  activeTab === 'orders'
                    ? 'bg-[#151311] text-[#F7F2EA]'
                    : 'text-[#151311] hover:bg-[#F7F2EA]'
                }`}
              >
                <Package className="w-4 h-4 text-[#C4A36B]" />
                <span>طلباتي</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-xs md:text-sm font-medium rounded-[2px] transition-all ${
                  activeTab === 'profile'
                    ? 'bg-[#151311] text-[#F7F2EA]'
                    : 'text-[#151311] hover:bg-[#F7F2EA]'
                }`}
              >
                <User className="w-4 h-4 text-[#C4A36B]" />
                <span>بياناتي الشخصية</span>
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-xs md:text-sm font-medium rounded-[2px] transition-all ${
                  activeTab === 'addresses'
                    ? 'bg-[#151311] text-[#F7F2EA]'
                    : 'text-[#151311] hover:bg-[#F7F2EA]'
                }`}
              >
                <MapPin className="w-4 h-4 text-[#C4A36B]" />
                <span>عناويني</span>
              </button>

              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-xs md:text-sm font-medium rounded-[2px] transition-all ${
                  activeTab === 'wishlist'
                    ? 'bg-[#151311] text-[#F7F2EA]'
                    : 'text-[#151311] hover:bg-[#F7F2EA]'
                }`}
              >
                <Heart className="w-4 h-4 text-[#C4A36B]" />
                <span>المفضلة</span>
              </button>

              <Link
                href="/"
                className="w-full flex items-center gap-3 px-4 py-3 text-xs font-medium text-red-600 hover:bg-red-50 rounded-[2px] transition-colors pt-4 border-t border-[#E8DDD0]"
              >
                <LogOut className="w-4 h-4" />
                <span>تسجيل الخروج</span>
              </Link>
            </nav>
          </aside>

          {/* Main Dashboard Panel (9 cols) */}
          <main className="lg:col-span-9 bg-white p-6 md:p-8 rounded-[3px] border border-[#E8DDD0]">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="text-xl font-normal text-[#151311] pb-3 border-b border-[#E8DDD0]">
                  سجل الطلبات
                </h2>

                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="p-5 border border-[#E8DDD0] rounded-[3px] bg-[#F7F2EA]/20 space-y-3"
                    >
                      <div className="flex flex-wrap justify-between items-center gap-2 text-xs">
                        <div>
                          <span className="font-bold text-[#151311]">رقم الطلب: #{order.id}</span>
                          <span className="text-[#7B746E] mr-3">• {order.date}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[11px] font-medium ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>

                      <div className="text-xs text-[#7B746E]">
                        <p>المنتجات ({order.itemsCount}): <span className="text-[#151311] font-medium">{order.items.join('، ')}</span></p>
                      </div>

                      <div className="pt-2 border-t border-[#E8DDD0]/50 flex justify-between items-center text-xs">
                        <span className="font-bold text-[#151311]">الإجمالي: {order.total} ر.س</span>
                        <button className="text-[#C4A36B] font-medium hover:underline flex items-center gap-1">
                          <span>تفاصيل الشحنة والتتبع</span>
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-normal text-[#151311] pb-3 border-b border-[#E8DDD0]">
                  بياناتي الشخصية
                </h2>
                <form className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">الاسم الكامل</label>
                    <input
                      type="text"
                      defaultValue="سارة الجواد"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] rounded-[2px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      defaultValue="saja@example.com"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] rounded-[2px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#151311] mb-1">رقم الجوال</label>
                    <input
                      type="tel"
                      defaultValue="+966 50 123 4567"
                      className="w-full bg-[#F7F2EA] border border-[#E8DDD0] p-3 text-xs text-[#151311] rounded-[2px]"
                    />
                  </div>
                  <button
                    type="button"
                    className="px-6 py-2.5 bg-[#151311] text-[#F7F2EA] text-xs font-medium rounded-[2px]"
                  >
                    حفظ التغييرات
                  </button>
                </form>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-3 border-b border-[#E8DDD0]">
                  <h2 className="text-xl font-normal text-[#151311]">عناويني المحفوظة</h2>
                  <button className="px-4 py-2 bg-[#151311] text-[#F7F2EA] text-xs font-medium rounded-[2px]">
                    + إضافة عنوان جديد
                  </button>
                </div>

                <div className="p-4 border border-[#C4A36B] rounded-[3px] bg-[#F7F2EA]/30 max-w-md space-y-2">
                  <span className="px-2 py-0.5 bg-[#151311] text-[#F7F2EA] text-[10px] rounded">العنوان الرئيسي</span>
                  <h4 className="text-sm font-bold text-[#151311]">الرياض — حي النخيل</h4>
                  <p className="text-xs text-[#7B746E]">شارع التخصصي، عمارة 42، شقة 12</p>
                  <p className="text-xs text-[#7B746E]">جوال: +966 50 123 4567</p>
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <h2 className="text-xl font-normal text-[#151311] pb-3 border-b border-[#E8DDD0]">
                  المفضلة
                </h2>
                {wishlist.length === 0 ? (
                  <p className="text-xs text-[#7B746E]">لا توجد قطع محفوظة حالياً.</p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlist.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </Container>
    </div>
  );
}
