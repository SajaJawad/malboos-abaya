'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useSearch } from '@/context/SearchContext';

function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  const isAboutActive = pathname === '/about';
  const isContactActive = pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (isActive: boolean) =>
    `transition-all duration-300 relative py-1 ${
      isActive
        ? 'text-[#C4A36B] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:right-0 after:w-full after:h-[2px] after:bg-[#C4A36B]'
        : 'text-[#151311] font-normal hover:text-[#C4A36B] after:content-[\'\'] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1.5px] after:bg-[#C4A36B] hover:after:w-full after:transition-all'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F2EA]/95 backdrop-blur-md border-b border-[#C4A36B]/30 py-3 shadow-xs'
            : 'bg-[#F7F2EA] border-b border-[#E8DDD0]/80 py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 grid grid-cols-12 items-center relative">
          {/* Right Navigation Links (RTL Right side -> 4 cols) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm col-span-4">
            <Link href="/" className={getLinkClass(isHomeActive)}>
              الرئيسية
            </Link>
            <Link href="/shop?category=abayas" className={getLinkClass(isAbayasActive)}>
              العبايات
            </Link>
            <Link href="/shop?category=makhawer" className={getLinkClass(isMakhawerActive)}>
              المخاوير
            </Link>
            <Link href="/shop?filter=new" className={getLinkClass(isNewActive)}>
              الجديد
            </Link>
          </nav>

          {/* Mobile Hamburger (RTL Right side on mobile) */}
          <div className="flex items-center lg:hidden col-span-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-[#151311] hover:text-[#C4A36B] transition-colors"
              aria-label="القائمة الرئيسية"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Centered Logo with Curved Bottom Frame */}
          <div className="col-span-6 lg:col-span-4 flex justify-center text-center relative z-20">
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </div>

          {/* Left Navigation Links & Far Left Icons (RTL Left side -> 4 cols) */}
          <div className="col-span-3 lg:col-span-4 flex items-center justify-end gap-6">
            <nav className="hidden xl:flex items-center gap-6 text-sm">
              <Link href="/about" className={getLinkClass(isAboutActive)}>
                من نحن
              </Link>
              <Link href="/contact" className={getLinkClass(isContactActive)}>
                تواصل معنا
              </Link>
            </nav>

            {/* Far Left Action Icons */}
            <div className="flex items-center gap-3.5 text-[#151311]">
              <button
                onClick={openSearch}
                className="p-1.5 hover:text-[#C4A36B] transition-colors"
                aria-label="بحث"
                title="البحث"
              >
                <Search className="w-5 h-5 stroke-[1.5]" />
              </button>

              <Link
                href="/account"
                className="hidden sm:block p-1.5 hover:text-[#C4A36B] transition-colors"
                aria-label="حسابي"
                title="حسابي"
              >
                <User className="w-5 h-5 stroke-[1.5]" />
              </Link>

              <Link
                href="/wishlist"
                className="hidden sm:block p-1.5 hover:text-[#C4A36B] transition-colors relative"
                aria-label="المفضلة"
                title="المفضلة"
              >
                <Heart className="w-5 h-5 stroke-[1.5]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C4A36B] text-[#151311] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <button
                onClick={openCart}
                className="p-1.5 hover:text-[#C4A36B] transition-colors relative"
                aria-label="سلة التسوق"
                title="حقيبة التسوق"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#151311] text-[#F7F2EA] text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Elegant Curved Bottom Arch Under Centered Logo */}
        {!isScrolled && (
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 hidden lg:block pointer-events-none">
            <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
              <path
                d="M0 0 C65 0 65 22 120 22 C175 22 175 0 240 0 Z"
                fill="#F7F2EA"
              />
              <path
                d="M0 0 C65 0 65 22 120 22 C175 22 175 0 240 0"
                stroke="#E8DDD0"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        )}
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export const Header: React.FC = () => {
  return (
    <Suspense fallback={<div className="h-20 bg-[#F7F2EA] w-full" />}>
      <HeaderNav />
    </Suspense>
  );
};

