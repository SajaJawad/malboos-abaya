'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { X, Search as SearchIcon } from 'lucide-react';
import { useSearch } from '@/context/SearchContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, closeSearch, query, setQuery } = useSearch();

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryAr.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q)
    );
  }, [query]);

  const popularSearches = [
    'عباية سوداء',
    'عبايات مطرزة',
    'مخاوير',
    'الجديد',
    'مناسبات',
    'عباية بشت',
  ];

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#F7F2EA] flex flex-col overflow-y-auto animate-fadeIn">
      {/* Top Header Bar */}
      <div className="max-w-[1440px] w-full mx-auto p-6 flex justify-between items-center border-b border-[#E8DDD0]">
        <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase">
          SEARCH MALBOOS
        </span>
        <button
          onClick={closeSearch}
          className="p-2 text-[#151311] hover:text-[#C4A36B] transition-colors"
          aria-label="إغلاق البحث"
        >
          <X className="w-8 h-8 stroke-[1.5]" />
        </button>
      </div>

      <div className="max-w-4xl w-full mx-auto px-6 py-12 flex-1 flex flex-col">
        <h2 className="text-2xl md:text-3xl font-light text-[#151311] text-center mb-8">
          عن ماذا تبحثين؟
        </h2>

        {/* Input Bar */}
        <div className="relative mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحثي عن عباية، مخوار، قماش، أو مناسبة..."
            autoFocus
            className="w-full bg-white border-b-2 border-[#151311] py-4 pr-12 pl-4 text-lg text-[#151311] placeholder-[#7B746E] focus:outline-none focus:border-[#C4A36B] transition-colors"
          />
          <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#7B746E]" />
        </div>

        {/* Popular Tags */}
        {!query && (
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#7B746E] mb-4">
                الأكثر بحثاً:
              </p>
              <div className="flex flex-wrap gap-3">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-[#E8DDD0]/50 hover:bg-[#151311] hover:text-[#F7F2EA] text-sm text-[#151311] transition-all rounded-[2px]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#7B746E] mb-4">
                التصنيفات الرئيسية:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/shop?category=abayas"
                  onClick={closeSearch}
                  className="p-4 bg-white border border-[#E8DDD0] hover:border-[#C4A36B] transition-all text-center rounded-[2px]"
                >
                  <span className="block font-medium text-[#151311]">العبايات</span>
                  <span className="text-xs text-[#7B746E]">تصاميم لكل لحظة</span>
                </Link>
                <Link
                  href="/shop?category=makhawer"
                  onClick={closeSearch}
                  className="p-4 bg-white border border-[#E8DDD0] hover:border-[#C4A36B] transition-all text-center rounded-[2px]"
                >
                  <span className="block font-medium text-[#151311]">المخاوير</span>
                  <span className="text-xs text-[#7B746E]">راحة وفخامة</span>
                </Link>
                <Link
                  href="/shop?filter=new"
                  onClick={closeSearch}
                  className="p-4 bg-white border border-[#E8DDD0] hover:border-[#C4A36B] transition-all text-center rounded-[2px]"
                >
                  <span className="block font-medium text-[#151311]">الجديد</span>
                  <span className="text-xs text-[#7B746E]">أحدث التشكيلات</span>
                </Link>
                <Link
                  href="/shop?filter=bestseller"
                  onClick={closeSearch}
                  className="p-4 bg-white border border-[#E8DDD0] hover:border-[#C4A36B] transition-all text-center rounded-[2px]"
                >
                  <span className="block font-medium text-[#151311]">الأكثر مبيعاً</span>
                  <span className="text-xs text-[#7B746E]">قطع مميزة</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-[#7B746E]">
                نتائج البحث عن &quot;<span className="text-[#151311] font-medium">{query}</span>&quot;: ({filteredProducts.length})
              </p>
              {filteredProducts.length > 0 && (
                <button
                  onClick={() => setQuery('')}
                  className="text-xs text-[#C4A36B] hover:underline"
                >
                  مسح البحث
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white/60 rounded-[2px] p-8 border border-[#E8DDD0]">
                <p className="text-base text-[#151311] mb-2">عفواً، لم نجد نتائج تطابق بحثك</p>
                <p className="text-xs text-[#7B746E]">جربي البحث باستخدام كلمات أخرى مثل عباية، مخوار، أو خامات الحرير والكتان</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} onClick={closeSearch}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
