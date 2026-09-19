import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export const CollectionBanner: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-[#F7F2EA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[4px] overflow-hidden border border-[#E8DDD0] bg-[#E8DDD0]/20 shadow-xs">
          {/* Left Visual Side (Close-up Embroidery) */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px]">
            <Image
              src="/images/malboos/collections/new-collection.jpg"
              alt="تطريز ملبوس الفاخر"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#151311]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Editorial Content */}
          <div className="lg:col-span-6 p-8 md:p-14 lg:p-20 flex flex-col justify-center space-y-6 bg-[#F7F2EA] border-t lg:border-t-0 lg:border-r border-[#E8DDD0]">
            <div>
              <span className="font-cormorant text-xs tracking-[0.35em] text-[#C4A36B] uppercase font-semibold block mb-2">
                NEW COLLECTION
              </span>
              <div className="w-8 h-[1.5px] bg-[#C4A36B] mb-4" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#151311] leading-tight">
                مجموعة جديدة
              </h2>
            </div>

            <p className="text-[#7B746E] text-base md:text-lg font-light leading-relaxed max-w-lg">
              تصاميم تستلهم روح التراث الخليجي بتفاصيل معاصرة وأناقة هادئة.
            </p>

            <div className="pt-2">
              <Link
                href="/shop?filter=new"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#151311] text-[#F7F2EA] text-sm font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all duration-300 rounded-[2px] shadow-sm group cursor-pointer"
              >
                <span>اكتشفي المجموعة</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
