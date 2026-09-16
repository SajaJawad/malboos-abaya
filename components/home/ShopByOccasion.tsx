import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { OCCASIONS } from '@/data/occasions';

export const ShopByOccasion: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#F7F2EA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <SectionHeading
          title="اختاري حسب المناسبة"
          englishLabel="SHOP BY OCCASION"
          subtitle="تصاميم مصممة خصيصاً لتتناسب مع كافة أوقاتك وسعيد مناسباتك"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {OCCASIONS.map((item) => (
            <Link
              key={item.id}
              href={`/shop?occasion=${encodeURIComponent(item.name)}`}
              className="group relative h-64 md:h-80 overflow-hidden rounded-[3px] border border-[#E8DDD0] flex flex-col justify-end p-6 transition-all duration-500 hover:shadow-md"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#151311]/90 via-[#151311]/30 to-transparent transition-opacity group-hover:opacity-95" />

              <div className="relative z-10 text-[#F7F2EA] space-y-1">
                <h3 className="text-lg md:text-xl font-medium text-[#F7F2EA] group-hover:text-[#C4A36B] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#E8DDD0]/75 font-light">
                  {item.subtitle}
                </p>
                <div className="pt-2 w-6 h-[1.5px] bg-[#C4A36B] group-hover:w-12 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
