import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Sparkles, Heart, ShieldCheck, Feather, Award } from 'lucide-react';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'عن ملبوس | قصتنا وأصالتنا',
  description:
    'تعرفي على قصتنا في ملبوس. علامة تجارية سُعودية وخليجية متخصصة في تصميم العبايات والمخاوير الفاخرة برؤية تجمع بين عراقة التراث والأناقة المعاصرة.',
  alternates: {
    canonical: buildCanonicalUrl('/about'),
  },
  openGraph: {
    title: 'عن ملبوس | قصتنا وأصالتنا',
    description:
      'تعرفي على قصتنا في ملبوس. علامة تجارية سُعودية وخليجية متخصصة في تصميم العبايات والمخاوير الفاخرة.',
    url: buildCanonicalUrl('/about'),
  },
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Sparkles,
      title: 'الأصالة الخليجية',
      description: 'نستلهم تصاميمنا من عمق التراث الخليجي الأصيل، مبرزين هوية المرأة وعراقة زيها الإقليمي.',
    },
    {
      icon: Award,
      title: 'الجودة العالية',
      description: 'نختار أجود أقمشة الكريب والحرير والكتان الكوري والياباني لضمان ثبات الجودة مع كل ارتداء.',
    },
    {
      icon: Heart,
      title: 'دقة التفاصيل',
      description: 'كل غرزة وتطريز يمران عبر أيدي حرفيين متخصصين لضمان إخراج قطعة فنية متكاملة.',
    },
    {
      icon: Feather,
      title: 'الراحة المطلقة',
      description: 'نصمم قصات انسيابية تمنحك حرية الحركة الكاملة دون المساومة على الفخامة.',
    },
    {
      icon: ShieldCheck,
      title: 'الأناقة المعاصرة',
      description: 'نواكب أحدث اتجاهات الأزياء العالمية برؤية هادئة تناسب أسلوب الحياة الحديث.',
    },
  ];

  return (
    <div className="py-12 lg:py-20 bg-[#F7F2EA]">
      <Container>
        {/* Editorial Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-cormorant text-xs tracking-[0.35em] text-[#C4A36B] uppercase font-semibold block">
            ABOUT MALBOOS
          </span>
          <h1 className="text-3xl md:text-5xl font-normal text-[#151311] leading-tight">
            ملبوس... حيث تبدأ الإطلالة من التفاصيل
          </h1>
          <div className="w-12 h-[1.5px] bg-[#C4A36B] mx-auto" />
          <p className="text-[#7B746E] text-base md:text-lg font-light leading-relaxed">
            علامة تجارية سُعودية وخليجية متخصصة في تصميم العبايات والمخاوير الفاخرة، صُممت لتواكب المرأة التي ترى في أزيائها امتداداً لشخصيتها وأصالتها.
          </p>
        </div>

        {/* Large Visual Section */}
        <div className="relative h-[400px] md:h-[550px] rounded-[4px] overflow-hidden border border-[#E8DDD0] shadow-md mb-20">
          <Image
            src="/images/malboos/hero/hero-1.jpg"
            alt="عالم ملبوس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151311]/70 via-transparent to-transparent flex items-end p-8 md:p-12 text-[#F7F2EA]">
            <p className="font-cormorant text-xl md:text-2xl font-light italic max-w-xl">
              &quot;كل قطعة ننتجها هي حكاية شغف بالحرفة، وتقدير للحضور الأنثوي المستقل.&quot;
            </p>
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div className="space-y-12 mb-20">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-[#151311]">
              ركائزنا الخمس في التصميم
            </h2>
            <p className="text-xs text-[#7B746E] mt-2">قيمنا التي نلتزم بها في كل تشكيلة تصدر عن ملبوس</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-[3px] border border-[#E8DDD0] text-center space-y-3 hover:border-[#C4A36B] transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F7F2EA] text-[#C4A36B] mx-auto flex items-center justify-center">
                    <IconComp className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-medium text-[#151311]">{pillar.title}</h3>
                  <p className="text-xs text-[#7B746E] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
