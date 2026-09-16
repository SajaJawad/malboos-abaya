'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';
import { Badge } from '@/components/ui/Badge';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isFavorite = isInWishlist(product.id);

  const mainImage = product.images[0] || '/images/malboos/abayas/abaya-1.jpg';
  const secondaryImage = product.images[1] || mainImage;

  return (
    <div
      className={`group flex flex-col relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Wrapper */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E8DDD0]/30 rounded-[3px] border border-[#E8DDD0]/50">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={isHovered && secondaryImage ? secondaryImage : mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Badge Top Right */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10">
            <Badge
              variant={
                product.badge === 'الأكثر مبيعًا'
                  ? 'primary'
                  : product.badge === 'حصري'
                  ? 'gold'
                  : 'dark'
              }
            >
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Wishlist Heart Top Left */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-3 left-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            isFavorite
              ? 'bg-[#151311] text-[#C4A36B]'
              : 'bg-[#F7F2EA]/80 backdrop-blur-xs text-[#151311] hover:bg-[#151311] hover:text-[#F7F2EA]'
          }`}
          aria-label="إضافة للمفضلة"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#C4A36B]' : ''}`} />
        </button>

        {/* Quick Add Button Bottom Left */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1);
          }}
          className="absolute bottom-3 left-3 z-10 w-10 h-10 rounded-full bg-[#151311] text-[#F7F2EA] flex items-center justify-center opacity-90 group-hover:opacity-100 hover:bg-[#C4A36B] hover:text-[#151311] transition-all duration-300 shadow-md transform group-hover:scale-110"
          aria-label="إضافة سريعة للسلة"
          title="إضافة سريعة للسلة"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* Info Block */}
      <div className="pt-3 pb-1 flex flex-col">
        <div className="flex items-center justify-between text-[11px] text-[#7B746E] mb-1">
          <span>{product.categoryAr}</span>
          {product.occasion && <span>{product.occasion}</span>}
        </div>

        <Link
          href={`/product/${product.slug}`}
          className="text-sm font-normal text-[#151311] hover:text-[#C4A36B] transition-colors line-clamp-1"
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-medium text-[#151311]">
            {product.price} ر.س
          </span>
          {product.oldPrice && (
            <span className="text-xs text-[#7B746E] line-through font-light">
              {product.oldPrice} ر.س
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
