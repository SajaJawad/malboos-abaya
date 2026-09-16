import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';

export const BestSellers: React.FC = () => {
  const bestSellers = PRODUCTS.filter((p) => p.bestSeller).slice(0, 4);

  return (
    <section className="py-12 lg:py-16 bg-[#F7F2EA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <SectionHeading
          title="الأكثر مبيعًا"
          englishLabel="BEST SELLERS"
          subtitle="مجموعة من أكثر قطع ملبوس طلباً من العبايات والمخاوير الفاخرة"
          linkHref="/shop?filter=bestseller"
          linkText="عرض جميع المنتجات"
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
