import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export const InspirationGrid: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: '/images/malboos/hero/hero-1.jpg',
      caption: 'إطلالة عباية ملكية فاخرة بلمسة ذهبية دافئة',
    },
    {
      id: 2,
      image: '/images/malboos/collections/makhawar-detail.jpg',
      caption: 'دقة التطريز اليدوي على المخاوير الإماراتية الأصيلة',
    },
    {
      id: 3,
      image: '/images/malboos/abayas/abaya-1.jpg',
      caption: 'حرير كوري ناعم بانسيابية لا مثيل لها',
    },
    {
      id: 4,
      image: '/images/malboos/collections/new-collection.jpg',
      caption: 'تفاصيل تعكس حضورك في كل مناسبة',
    },
    {
      id: 5,
      image: '/images/malboos/makhawer/makhawar-1.jpg',
      caption: 'تغليف ملبوس الفاخر المستعد للإهداء مباشرة',
    },
    {
      id: 6,
      image: '/images/malboos/collections/category-makhawar.jpg',
      caption: 'ألوان الوردي الهادئ والموكا الملكي',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#F7F2EA] border-t border-[#E8DDD0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center mb-8">
        <span className="font-cormorant text-xs tracking-[0.3em] text-[#C4A36B] uppercase font-semibold block mb-2">
          @MALBOOS
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#151311]">
          إطلالات ملبوس
        </h2>
        <p className="text-[#7B746E] text-sm mt-2 font-light">
          شاركينا إطلالتك بقطع ملبوس على إنستغرام عبر الهاشتاق #ملبوس
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-[3px] border border-[#E8DDD0] bg-[#E8DDD0]/40 block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#151311]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-[#F7F2EA]">
                <Instagram className="w-6 h-6 text-[#C4A36B] mb-2" />
                <span className="text-[11px] font-light line-clamp-2">
                  {post.caption}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
