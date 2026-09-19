import React from 'react';
import { Truck, Gift, ShieldCheck, RefreshCw } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'شحن سريع وآمن',
      description: 'لجميع مناطق المملكة ودول الخليج',
    },
    {
      icon: Gift,
      title: 'تغليف فاخر',
      description: 'يليق بهديتك ويكمل تفاصيلها',
    },
    {
      icon: ShieldCheck,
      title: 'دفع آمن 100%',
      description: 'بطرق متعددة مشفرة وموثوقة',
    },
    {
      icon: RefreshCw,
      title: 'إرجاع واستبدال مرن',
      description: 'خلال 7 أيام من تاريخ الاستلام',
    },
  ];

  return (
    <section className="py-10 bg-[#151311] text-[#F7F2EA] border-y border-[#C4A36B]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#C4A36B]/20">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-4 ${
                  idx !== 0 ? 'pt-6 lg:pt-0' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full border border-[#C4A36B]/40 flex items-center justify-center text-[#C4A36B] mb-3 bg-[#151311]">
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="text-base font-medium text-[#F7F2EA] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#E8DDD0]/70 font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
