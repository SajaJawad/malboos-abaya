'use client';

import React, { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';

export const NewArrivals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'abayas' | 'makhawer'>('all');

  const filteredProducts = useMemo(() => {
    if (activeTab === 'abayas') {
      return PRODUCTS.filter((p) => p.category === 'abayas' && p.newArrival).slice(0, 4);
    }
    if (activeTab === 'makhawer') {
      return PRODUCTS.filter((p) => p.category === 'makhawer' && p.newArrival).slice(0, 4);
    }
    // 'all' tab: balanced 50/50 mix
    const abayas = PRODUCTS.filter((p) => p.category === 'abayas' && p.newArrival).slice(0, 2);
    const makhawer = PRODUCTS.filter((p) => p.category === 'makhawer' && p.newArrival).slice(0, 2);
    return [abayas[0], makhawer[0], abayas[1], makhawer[1]].filter(Boolean);
  }, [activeTab]);

  return (
    <section className="py-12 lg:py-16 bg-[#F7F2EA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#E8DDD0]/50 pb-4">
          <div>
            <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase block mb-1">
              NEW ARRIVALS
            </span>
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1.5px] bg-[#C4A36B]" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#151311]">
                وصل حديثًا
              </h2>
            </div>
            <p className="text-[#7B746E] text-sm md:text-base mt-2 font-light">
              أحدث قطع ملبوس اختيرت لتكمل إطلالتك
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 bg-[#E8DDD0]/40 p-1 rounded-[3px] border border-[#E8DDD0]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 text-xs md:text-sm font-medium transition-all rounded-[2px] cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#151311] text-[#F7F2EA] shadow-xs'
                  : 'text-[#7B746E] hover:text-[#151311]'
              }`}
            >
              الكل
            </button>
            <button
              onClick={() => setActiveTab('abayas')}
              className={`px-5 py-2 text-xs md:text-sm font-medium transition-all rounded-[2px] cursor-pointer ${
                activeTab === 'abayas'
                  ? 'bg-[#151311] text-[#F7F2EA] shadow-xs'
                  : 'text-[#7B746E] hover:text-[#151311]'
              }`}
            >
              عبايات
            </button>
            <button
              onClick={() => setActiveTab('makhawer')}
              className={`px-5 py-2 text-xs md:text-sm font-medium transition-all rounded-[2px] cursor-pointer ${
                activeTab === 'makhawer'
                  ? 'bg-[#151311] text-[#F7F2EA] shadow-xs'
                  : 'text-[#7B746E] hover:text-[#151311]'
              }`}
            >
              مخاوير
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 transition-all duration-300">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
