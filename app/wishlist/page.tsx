'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/product/ProductCard';

export default function WishlistPage() {
  const { wishlist, wishlistCount } = useWishlist();

  return (
    <div className="py-10 lg:py-16">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7B746E] mb-6">
          <Link href="/" className="hover:text-[#151311]">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-[#151311] font-medium">قائمة المفضلة</span>
        </div>

        <div className="text-center mb-10 pb-6 border-b border-[#E8DDD0]">
          <span className="font-cormorant text-xs tracking-[0.3em] text-[#C4A36B] uppercase font-semibold block mb-2">
            MY WISHLIST
          </span>
          <h1 className="text-3xl md:text-4xl font-normal text-[#151311]">
            القطع المفضلة ({wishlistCount})
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[3px] border border-[#E8DDD0] max-w-xl mx-auto p-8">
            <Heart className="w-16 h-16 text-[#C4A36B]/40 mx-auto mb-4 stroke-[1]" />
            <h2 className="text-xl font-normal text-[#151311] mb-2">قائمة المفضلة فارغة حالياً</h2>
            <p className="text-[#7B746E] text-xs mb-6 font-light">
              احفظي القطع التي تنال إعجابك أثناء التصفح للرجوع إليها لاحقاً
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px]"
            >
              <span>استكشاف المنتجات</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
