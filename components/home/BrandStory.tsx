import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Feather, ShieldCheck } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#E8DDD0]/30 border-y border-[#E8DDD0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Image Grid */}
          <div className="lg:col-span-6 relative flex gap-2">
            <div className="w-2/3 aspect-[9/16] sm:aspect-[2/3] lg:aspect-[9/16] relative rounded-[4px] overflow-hidden border border-[#E8DDD0] shadow-md">
              <Image
                src="/images/malboos/abayas/story-main-abaya.jpg"
                alt="عالم ملبوس"
                fill
                sizes="(max-width: 1024px) 70vw, 35vw"
                className="object-cover object-center"
              />
            </div>
            <div className="w-1/3 aspect-[3/4] relative rounded-[4px] overflow-hidden border border-[#C4A36B]/40 shadow-sm mt-12">
              <Image
                src="/images/malboos/collections/makhawar-fabric.jpg"
                alt="تفاصيل القماش المطرز"
                fill
                sizes="(max-width: 1024px) 30vw, 15vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-cormorant text-xs tracking-[0.35em] text-[#C4A36B] uppercase font-semibold block mb-2">
                THE MALBOOS STORY
              </span>
              <div className="w-10 h-[1.5px] bg-[#C4A36B] mb-4" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#151311] leading-tight">
                ملبوس... أكثر من قطعة
              </h2>
            </div>

            <p className="text-[#151311] text-lg md:text-xl font-light leading-relaxed">
              في ملبوس، نؤمن أن ما ترتدينه ليس مجرد زيّ، بل هو امتدادٌ لحضورك وتفاصيلك العميقة.
            </p>

            <p className="text-[#7B746E] text-base font-light leading-relaxed">
              نختار تصاميم تجمع بين أصالة التراث الخليجي والراحة الفائقة، لنصنع قطعاً تعبر عن أناقتك الهادئة في كل لحظة ومناسبة.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E8DDD0]">
              <div className="flex flex-col items-center text-center p-2">
                <Sparkles className="w-5 h-5 text-[#C4A36B] mb-1" />
                <span className="text-xs font-medium text-[#151311]">أصالة خليجية</span>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <Feather className="w-5 h-5 text-[#C4A36B] mb-1" />
                <span className="text-xs font-medium text-[#151311]">راحة انسيابية</span>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <ShieldCheck className="w-5 h-5 text-[#C4A36B] mb-1" />
                <span className="text-xs font-medium text-[#151311]">دقة التفاصيل</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#151311] text-[#F7F2EA] text-sm font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] shadow-sm group cursor-pointer"
              >
                <span>اكتشفي قصتنا</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
