'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SlidersHorizontal, ChevronDown, X, RefreshCw } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Container } from '@/components/ui/Container';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialFilter = searchParams.get('filter') || 'all';
  const initialOccasion = searchParams.get('occasion') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>(initialOccasion);
  const [sortOption, setSortOption] = useState<string>('newest');
  const [priceRange, setPriceRange] = useState<number>(600);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Filter products logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (initialFilter === 'bestseller') {
      result = result.filter((p) => p.bestSeller);
    } else if (initialFilter === 'new') {
      result = result.filter((p) => p.newArrival);
    }

    if (selectedSize !== 'all') {
      result = result.filter((p) => p.sizes.includes(selectedSize));
    }

    if (selectedOccasion !== 'all') {
      result = result.filter((p) => p.occasion === selectedOccasion);
    }

    result = result.filter((p) => p.price <= priceRange);

    // Sorting
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'bestseller') {
      result.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
    } else {
      // default newest
      result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    }

    return result;
  }, [selectedCategory, initialFilter, selectedSize, selectedOccasion, priceRange, sortOption]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSize('all');
    setSelectedOccasion('all');
    setPriceRange(600);
    setSortOption('newest');
  };

  return (
    <div className="py-8 lg:py-12">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7B746E] mb-6">
          <Link href="/" className="hover:text-[#151311]">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-[#151311] font-medium">متجر ملبوس</span>
        </div>

        {/* Page Title & Header */}
        <div className="text-center mb-10 pb-8 border-b border-[#E8DDD0]">
          <span className="font-cormorant text-xs tracking-[0.3em] text-[#C4A36B] uppercase font-semibold block mb-2">
            MALBOOS BOUTIQUE
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#151311]">
            جميع المجموعات
          </h1>
          <p className="text-[#7B746E] text-sm md:text-base mt-2 font-light max-w-lg mx-auto">
            تصفحي أحدث ابتكاراتنا من العبايات والمخاوير المصممة بروح خليجية متفردة
          </p>
        </div>

        {/* Top Filter Bar & Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#E8DDD0]/30 p-4 rounded-[3px] border border-[#E8DDD0]">
          {/* Category Quick Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs md:text-sm font-medium transition-all rounded-[2px] whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#151311] text-[#F7F2EA]'
                  : 'bg-white text-[#151311] border border-[#E8DDD0] hover:border-[#C4A36B]'
              }`}
            >
              جميع المنتجات ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('abayas')}
              className={`px-4 py-2 text-xs md:text-sm font-medium transition-all rounded-[2px] whitespace-nowrap ${
                selectedCategory === 'abayas'
                  ? 'bg-[#151311] text-[#F7F2EA]'
                  : 'bg-white text-[#151311] border border-[#E8DDD0] hover:border-[#C4A36B]'
              }`}
            >
              العبايات (8)
            </button>
            <button
              onClick={() => setSelectedCategory('makhawer')}
              className={`px-4 py-2 text-xs md:text-sm font-medium transition-all rounded-[2px] whitespace-nowrap ${
                selectedCategory === 'makhawer'
                  ? 'bg-[#151311] text-[#F7F2EA]'
                  : 'bg-white text-[#151311] border border-[#E8DDD0] hover:border-[#C4A36B]'
              }`}
            >
              المخاوير (8)
            </button>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Filter Button Trigger */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-[#E8DDD0] text-xs font-medium text-[#151311] rounded-[2px]"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#C4A36B]" />
              <span>تصفية النتائج</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#7B746E] hidden sm:inline">ترتيب حسب:</span>
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-white border border-[#E8DDD0] px-3 py-2 pr-8 text-xs md:text-sm text-[#151311] focus:outline-none focus:border-[#C4A36B] rounded-[2px] cursor-pointer appearance-none"
                >
                  <option value="newest">الأحدث وصولاً</option>
                  <option value="bestseller">الأكثر مبيعاً</option>
                  <option value="price-asc">السعر: من الأقل</option>
                  <option value="price-desc">السعر: من الأعلى</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#7B746E] absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid with Sidebar Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Filters Sidebar (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8 bg-white p-6 rounded-[3px] border border-[#E8DDD0] h-fit sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DDD0]">
              <h3 className="text-base font-medium text-[#151311] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#C4A36B]" />
                <span>خيارات التصفية</span>
              </h3>
              <button
                onClick={resetFilters}
                className="text-xs text-[#C4A36B] hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>إعادة ضبط</span>
              </button>
            </div>

            {/* Filter: Sizes */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-[#151311] uppercase tracking-wider">
                المقاس
              </h4>
              <div className="flex flex-wrap gap-2">
                {['all', '52', '54', '56', '58', '60', 'S', 'M', 'L', 'XL'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3 py-1.5 text-xs rounded-[2px] border transition-all ${
                      selectedSize === sz
                        ? 'bg-[#151311] text-[#F7F2EA] border-[#151311]'
                        : 'bg-white text-[#151311] border-[#E8DDD0] hover:border-[#C4A36B]'
                    }`}
                  >
                    {sz === 'all' ? 'الكل' : sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter: Occasion */}
            <div className="space-y-3 pt-4 border-t border-[#E8DDD0]">
              <h4 className="text-xs font-semibold text-[#151311] uppercase tracking-wider">
                المناسبة
              </h4>
              <div className="space-y-2 text-xs">
                {['all', 'إطلالات يومية', 'مناسبات', 'رمضان', 'العيد', 'هدايا'].map((occ) => (
                  <label
                    key={occ}
                    className="flex items-center gap-2 text-[#151311] cursor-pointer hover:text-[#C4A36B]"
                  >
                    <input
                      type="radio"
                      name="occasion"
                      checked={selectedOccasion === occ}
                      onChange={() => setSelectedOccasion(occ)}
                      className="accent-[#C4A36B]"
                    />
                    <span>{occ === 'all' ? 'جميع المناسبات' : occ}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter: Price Range */}
            <div className="space-y-3 pt-4 border-t border-[#E8DDD0]">
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-semibold text-[#151311] uppercase tracking-wider">
                  السعر الأقصى
                </h4>
                <span className="font-bold text-[#151311]">{priceRange} ر.س</span>
              </div>
              <input
                type="range"
                min={250}
                max={600}
                step={10}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#151311]"
              />
              <div className="flex justify-between text-[11px] text-[#7B746E]">
                <span>250 ر.س</span>
                <span>600 ر.s</span>
              </div>
            </div>
          </aside>

          {/* Products Catalog Grid (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[3px] border border-[#E8DDD0] p-8">
                <p className="text-lg font-normal text-[#151311] mb-2">لا توجد منتجات تطابق الخيارات المحددة</p>
                <p className="text-xs text-[#7B746E] mb-6">جربي تغيير المقاس أو السعر لعرض المزيد من المنتجات</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#151311] text-[#F7F2EA] text-xs font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all"
                >
                  إعادة ضبط الخيارات
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination placeholder */}
                <div className="mt-12 text-center pt-8 border-t border-[#E8DDD0]">
                  <p className="text-xs text-[#7B746E] mb-4">
                    عرض {filteredProducts.length} من أصل {PRODUCTS.length} منتجات
                  </p>
                  <button className="px-8 py-3 bg-white border border-[#151311] text-[#151311] text-xs font-medium hover:bg-[#151311] hover:text-[#F7F2EA] transition-all rounded-[2px]">
                    تحميل المزيد من القطع
                  </button>
                </div>
              </>
            )}
          </main>
        </div>
      </Container>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#151311]/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#F7F2EA] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#E8DDD0] mb-6">
                <h3 className="text-lg font-normal text-[#151311]">تصفية المنتجات</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-[#151311]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Sizes */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold text-[#151311]">المقاس</h4>
                <div className="flex flex-wrap gap-2">
                  {['all', '52', '54', '56', '58', '60', 'S', 'M', 'L', 'XL'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs rounded-[2px] border ${
                        selectedSize === sz
                          ? 'bg-[#151311] text-[#F7F2EA] border-[#151311]'
                          : 'bg-white text-[#151311] border-[#E8DDD0]'
                      }`}
                    >
                      {sz === 'all' ? 'الكل' : sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Occasions */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold text-[#151311]">المناسبة</h4>
                <div className="space-y-2 text-xs">
                  {['all', 'إطلالات يومية', 'مناسبات', 'رمضان', 'العيد', 'هدايا'].map((occ) => (
                    <label key={occ} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-occ"
                        checked={selectedOccasion === occ}
                        onChange={() => setSelectedOccasion(occ)}
                        className="accent-[#C4A36B]"
                      />
                      <span>{occ === 'all' ? 'جميع المناسبات' : occ}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DDD0] space-y-2">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-[#151311] text-[#F7F2EA] text-xs font-medium"
              >
                تطبيق التصفية ({filteredProducts.length})
              </button>
              <button
                onClick={resetFilters}
                className="w-full py-2 text-center text-xs text-[#7B746E]"
              >
                إعادة ضبط
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">جاري تحميل المعرض...</div>}>
      <ShopContent />
    </Suspense>
  );
}
