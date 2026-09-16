'use client';

import React from 'react';
import Link from 'next/link';
import { X, Search, Heart, User, ShoppingBag } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useSearch } from '@/context/SearchContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { totalItems, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { openSearch } = useSearch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#151311]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#F7F2EA] border-l border-[#C4A36B]/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E8DDD0]">
            <Logo size="sm" />
            <button
              onClick={onClose}
              className="p-2 text-[#151311] hover:text-[#C4A36B] transition-colors"
              aria-label="إغلاق القائمة"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Action Icons */}
          <div className="flex items-center justify-around py-4 border-b border-[#E8DDD0] my-4 text-[#151311]">
            <button
              onClick={() => {
                onClose();
                openSearch();
              }}
              className="flex flex-col items-center gap-1 text-xs hover:text-[#C4A36B]"
            >
              <Search className="w-5 h-5" />
              <span>البحث</span>
            </button>
            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex flex-col items-center gap-1 text-xs hover:text-[#C4A36B] relative"
            >
              <Heart className="w-5 h-5" />
              <span>المفضلة</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#C4A36B] text-[#151311] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => {
                onClose();
                openCart();
              }}
              className="flex flex-col items-center gap-1 text-xs hover:text-[#C4A36B] relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>السلة</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#151311] text-[#F7F2EA] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              href="/account"
              onClick={onClose}
              className="flex flex-col items-center gap-1 text-xs hover:text-[#C4A36B]"
            >
              <User className="w-5 h-5" />
              <span>حسابي</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 my-6">
            <Link
              href="/"
              onClick={onClose}
              className="text-lg text-[#151311] hover:text-[#C4A36B] py-2 border-b border-[#E8DDD0]/50 transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/shop?category=abayas"
              onClick={onClose}
              className="text-lg text-[#151311] hover:text-[#C4A36B] py-2 border-b border-[#E8DDD0]/50 transition-colors"
            >
              العبايات
            </Link>
            <Link
              href="/shop?category=makhawer"
              onClick={onClose}
              className="text-lg text-[#151311] hover:text-[#C4A36B] py-2 border-b border-[#E8DDD0]/50 transition-colors"
            >
              المخاوير
            </Link>
            <Link
              href="/shop?filter=new"
              onClick={onClose}
              className="text-lg text-[#151311] hover:text-[#C4A36B] py-2 border-b border-[#E8DDD0]/50 transition-colors"
            >
              الجديد
            </Link>
            <Link
              href="/shop?filter=bestseller"
              onClick={onClose}
              className="text-lg text-[#151311] hover:text-[#C4A36B] py-2 border-b border-[#E8DDD0]/50 transition-colors"
            >
              الأكثر مبيعًا
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="text-lg text-[#151311] hover:text-[#C4A36B] py-2 border-b border-[#E8DDD0]/50 transition-colors"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="text-lg text-[#151311] hover:text-[#C4A36B] py-2 border-b border-[#E8DDD0]/50 transition-colors"
            >
              تواصل معنا
            </Link>
          </nav>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-[#E8DDD0] text-center">
          <p className="font-cormorant text-xs tracking-[0.2em] text-[#C4A36B] uppercase mb-1">
            MORE THAN A PIECE
          </p>
          <p className="text-xs text-[#7B746E]">
            © MALBOOS 2026 — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  );
};
