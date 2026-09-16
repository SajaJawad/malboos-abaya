'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { X, Search, Heart, User, ShoppingBag } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useSearch } from '@/context/SearchContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenuContent({ isOpen, onClose }: MobileMenuProps) {
  const { totalItems, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { openSearch } = useSearch();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get('category');
  const filterParam = searchParams.get('filter');

  const isHomeActive = pathname === '/';
  const isAbayasActive = pathname === '/shop' && categoryParam === 'abayas';
  const isMakhawerActive = pathname === '/shop' && categoryParam === 'makhawer';
  const isNewActive = pathname === '/shop' && filterParam === 'new';
  const isBestSellerActive = pathname === '/shop' && filterParam === 'bestseller';
  const isAboutActive = pathname === '/about';
  const isContactActive = pathname === '/contact';

  if (!isOpen) return null;

  const getMobileLinkClass = (isActive: boolean) =>
    `text-lg py-2.5 px-3 border-b border-[#E8DDD0]/50 transition-all rounded-[2px] flex items-center justify-between ${
      isActive
        ? 'text-[#C4A36B] font-semibold bg-[#C4A36B]/10 border-r-2 border-r-[#C4A36B]'
        : 'text-[#151311] hover:text-[#C4A36B]'
    }`;

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
          <nav className="flex flex-col gap-2 my-6">
            <Link
              href="/"
              onClick={onClose}
              className={getMobileLinkClass(isHomeActive)}
            >
              <span>الرئيسية</span>
            </Link>
            <Link
              href="/shop?category=abayas"
              onClick={onClose}
              className={getMobileLinkClass(isAbayasActive)}
            >
              <span>العبايات</span>
            </Link>
            <Link
              href="/shop?category=makhawer"
              onClick={onClose}
              className={getMobileLinkClass(isMakhawerActive)}
            >
              <span>المخاوير</span>
            </Link>
            <Link
              href="/shop?filter=new"
              onClick={onClose}
              className={getMobileLinkClass(isNewActive)}
            >
              <span>الجديد</span>
            </Link>
            <Link
              href="/shop?filter=bestseller"
              onClick={onClose}
              className={getMobileLinkClass(isBestSellerActive)}
            >
              <span>الأكثر مبيعًا</span>
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className={getMobileLinkClass(isAboutActive)}
            >
              <span>من نحن</span>
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className={getMobileLinkClass(isContactActive)}
            >
              <span>تواصل معنا</span>
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
}

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  return (
    <Suspense fallback={null}>
      <MobileMenuContent {...props} />
    </Suspense>
  );
};

