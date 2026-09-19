'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'أناقة تعكسك',
      subheading: 'عبايات ومخاوير بتصاميم عصرية تجمع بين الأصالة والحداثة',
      image: '/images/malboos/hero/hero-abaya.jpg',
      ctaText: 'تسوقي العبايات',
      ctaLink: '/shop?category=abayas',
    },
    {
      title: 'فخامة التفاصيل',
      subheading: 'مخاوير فاخرة بتطريزات يدوية مستوحاة من التراث الخليجي الأصيل',
      image: '/images/malboos/hero/hero-makhawar.jpg',
      ctaText: 'اكتشفي المخاوير',
      ctaLink: '/shop?category=makhawer',
    },
    {
      title: 'تشكيلة العيد 2026',
      subheading: 'قصات متميزة وأقمشة ملكية مختارة بعناية لتكتمل إطلالتك',
      image: '/images/malboos/hero/mekhware-hero2.jpg',
      ctaText: 'استكشفي المجموعة',
      ctaLink: '/shop?filter=new',
    },
  ];

  // Auto-play interval for continuous slide changes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F2EA] py-4 lg:py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[680px] rounded-[4px] overflow-hidden border border-[#E8DDD0] bg-[#F7F2EA]">
          {/* Left Visual Side (52% on desktop -> col-span-7) */}
          <div className="lg:col-span-7 relative min-h-[450px] lg:min-h-full bg-[#F7F2EA] order-1 lg:order-1 overflow-hidden group flex items-center justify-center p-4 lg:p-6">
            {/* Elegant Subtle Panel Frame */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] bg-[#E8DDD0]/20 rounded-[3px] border border-[#E8DDD0]/60 flex items-center justify-center overflow-hidden">
              {/* 100% Full Uncropped Image with Fade Transition */}
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain object-center p-2 md:p-4 transition-all duration-700 transform group-hover:scale-[1.01]"
                  />
                </div>
              ))}

              {/* Bottom Left Warm Slider Indicator */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md text-[#151311] px-3.5 py-1.5 text-xs font-cormorant tracking-widest flex items-center gap-2 rounded-[2px] border border-[#E8DDD0] shadow-xs">
                <span className="font-semibold text-[#151311]">0{currentSlide + 1}</span>
                <span className="text-[#C4A36B]">|</span>
                <span className="text-[#7B746E]">0{slides.length}</span>
              </div>
            </div>
          </div>

          {/* Right Content Side (48% on desktop -> col-span-5) */}
          <div className="lg:col-span-5 bg-[#F7F2EA] p-8 md:p-12 lg:p-16 flex flex-col justify-between order-2 lg:order-2 border-t lg:border-t-0 lg:border-r border-[#E8DDD0] relative">
            {/* Top Tagline */}
            <div className="space-y-4">
              <span className="inline-block text-xs uppercase font-cormorant tracking-[0.3em] text-[#C4A36B] font-semibold">
                MALBOOS LUXURY COLLECTION
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#151311] leading-tight transition-all duration-700 ease-in-out">
                {activeSlide.title}
              </h1>

              <p className="text-[#7B746E] text-base md:text-lg font-light leading-relaxed max-w-md pt-2 transition-all duration-700 ease-in-out">
                {activeSlide.subheading}
              </p>

              {/* Primary CTA */}
              <div className="pt-6">
                <Link
                  href={activeSlide.ctaLink}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#151311] text-[#F7F2EA] text-sm font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all duration-300 rounded-[2px] shadow-sm group"
                >
                  <span>{activeSlide.ctaText}</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Middle Branding details */}
            <div className="my-8 pt-8 border-t border-[#E8DDD0]">
              <div className="w-12 h-[1px] bg-[#C4A36B] mb-3" />
              <span className="font-cormorant uppercase text-xs tracking-[0.35em] text-[#76604D] font-medium block">
                MORE THAN A PIECE
              </span>
            </div>

            {/* Bottom Slider Control Arrows */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 transition-all duration-500 ${
                      currentSlide === idx ? 'w-8 bg-[#C4A36B]' : 'w-2 bg-[#E8DDD0]'
                    }`}
                    aria-label={`انتقل للشريحة ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#151311]/20 flex items-center justify-center text-[#151311] hover:bg-[#151311] hover:text-[#F7F2EA] transition-colors"
                  aria-label="السابق"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#151311]/20 flex items-center justify-center text-[#151311] hover:bg-[#151311] hover:text-[#F7F2EA] transition-colors"
                  aria-label="التالي"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
