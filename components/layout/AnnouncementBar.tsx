import React from 'react';
import { Truck, ShieldCheck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#151311] text-[#F7F2EA] py-2 px-4 text-xs font-light transition-all border-b border-[#C4A36B]/20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <Truck className="w-3.5 h-3.5 text-[#C4A36B]" />
          <span>شحن مجاني للطلبات فوق 300 ريال داخل المملكة</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[#E8DDD0]/80">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C4A36B]" />
          <span>تسوقي بأمان مع ملبوس — جودة وتغليف فاخر</span>
        </div>
      </div>
    </div>
  );
};
