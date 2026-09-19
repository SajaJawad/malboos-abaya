import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';

export const BestSellers: React.FC = () => {
  // Balanced 50/50 mix: 2 Abayas + 2 Makhawer
  const abayas = PRODUCTS.filter((p) => p.category === 'abayas' && p.bestSeller).slice(0, 2);
  const makhawer = PRODUCTS.filter((p) => p.category === 'makhawer' && p.bestSeller).slice(0, 2);
  const bestSellers = [abayas[0], makhawer[0], abayas[1], makhawer[1]].filter(Boolean);

  return (
    <section className="py-12 lg:py-16 bg-[#F7F2EA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <SectionHeading
          title="الأكثر مبيعًا"
          englishLabel="BEST SELLERS"
          subtitle="مجموعة من أكثر قطع ملبوس طلباً من العبايات والمخاوير الفاخرة"
          linkHref="/shop?filter=bestseller"
          linkText="عرض التشكيلة الكاملة"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
