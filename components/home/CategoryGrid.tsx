import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#F7F2EA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group relative h-[420px] md:h-[500px] overflow-hidden rounded-[4px] border border-[#E8DDD0] flex flex-col justify-end p-8 md:p-12 shadow-sm"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151311]/80 via-[#151311]/30 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Text Content */}
              <div className="relative z-10 text-[#F7F2EA] space-y-2">
                <span className="font-cormorant text-xs tracking-[0.3em] text-[#C4A36B] uppercase font-semibold block">
                  CATEGORY COLLECTION
                </span>
                <h3 className="text-3xl md:text-4xl font-normal text-[#F7F2EA]">
                  {cat.name}
                </h3>
                <p className="text-[#E8DDD0]/80 text-sm font-light">
                  {cat.subtitle}
                </p>

                <div className="pt-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full border border-[#C4A36B] flex items-center justify-center text-[#C4A36B] group-hover:bg-[#C4A36B] group-hover:text-[#151311] transition-all">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </span>
                  <span className="text-sm font-medium text-[#F7F2EA] group-hover:text-[#C4A36B] transition-colors">
                    استكشفي المجموعات
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
