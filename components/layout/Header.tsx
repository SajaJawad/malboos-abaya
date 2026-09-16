'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useSearch } from '@/context/SearchContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { openSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F2EA]/95 backdrop-blur-md border-b border-[#C4A36B]/20 py-4 shadow-xs'
            : 'bg-[#F7F2EA] py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-normal text-[#151311]">
            <Link
              href="/"
              className="hover:text-[#C4A36B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#C4A36B] hover:after:w-full after:transition-all"
            >
              الرئيسية
            </Link>
            <Link
              href="/shop?category=abayas"
              className="hover:text-[#C4A36B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#C4A36B] hover:after:w-full after:transition-all"
            >
              العبايات
            </Link>
            <Link
              href="/shop?category=makhawer"
              className="hover:text-[#C4A36B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#C4A36B] hover:after:w-full after:transition-all"
            >
              المخاوير
            </Link>
            <Link
              href="/shop?filter=new"
              className="hover:text-[#C4A36B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#C4A36B] hover:after:w-full after:transition-all"
            >
              الجديد
            </Link>
          </nav>

          {/* Mobile Right: Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-[#151311] hover:text-[#C4A36B] transition-colors"
              aria-label="القائمة الرئيسية"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex-1 lg:flex-none text-center">
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </div>

          {/* Desktop Left Nav + Icons */}
          <div className="flex items-center gap-6">
            <nav className="hidden xl:flex items-center gap-6 text-sm font-normal text-[#151311] ml-4">
              <Link
                href="/about"
                className="hover:text-[#C4A36B] transition-colors"
              >
                من نحن
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#C4A36B] transition-colors"
              >
                تواصل معنا
              </Link>
            </nav>

            <div className="flex items-center gap-4 text-[#151311]">
              <button
                onClick={openSearch}
                className="p-1.5 hover:text-[#C4A36B] transition-colors"
                aria-label="بحث"
              >
                <Search className="w-5 h-5 stroke-[1.5]" />
              </button>

              <Link
                href="/account"
                className="hidden sm:block p-1.5 hover:text-[#C4A36B] transition-colors"
                aria-label="حسابي"
              >
                <User className="w-5 h-5 stroke-[1.5]" />
              </Link>

              <Link
                href="/wishlist"
                className="hidden sm:block p-1.5 hover:text-[#C4A36B] transition-colors relative"
                aria-label="المفضلة"
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
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
