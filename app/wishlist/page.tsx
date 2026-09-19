'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { EmptyState } from '@/components/ui/EmptyState';
import { ProductCard } from '@/components/product/ProductCard';
import { useWishlist } from '@/context/WishlistContext';

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
          <EmptyState
            icon={Heart}
            title="قائمة المفضلة فارغة"
            description="احفظي القطع التي أحببتِها أثناء التصفح لتعودي إليها لاحقاً بضغطة واحدة."
            actionLabel="ابدئي التسوق"
            actionHref="/shop"
          />
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
