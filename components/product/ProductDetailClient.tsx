'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, Truck, ShieldCheck, Ruler, ChevronDown, ChevronUp, Share2, Check } from 'lucide-react';
import { Product } from '@/data/products';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/product/ProductCard';
import { Badge } from '@/components/ui/Badge';
import { SizeGuideModal } from '@/components/commerce/SizeGuideModal';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [sizeError, setSizeError] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [openAccordion, setOpenAccordion] = useState<string>('details');
  const [copied, setCopied] = useState<boolean>(false);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? '' : id));
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-8 lg:py-16">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7B746E] mb-8">
          <Link href="/" className="hover:text-[#151311] cursor-pointer">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-[#151311] cursor-pointer">
            {product.categoryAr}
          </Link>
          <span>/</span>
          <span className="text-[#151311] font-medium">{product.name}</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          {/* Left: Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image */}
            <div className="relative aspect-[3/4] max-h-[680px] w-full rounded-[4px] overflow-hidden bg-[#FAF7F2] border border-[#E8DDD0] shadow-sm flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center p-2 transition-all duration-500"
              />
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="primary">{product.badge}</Badge>
                </div>
              )}
            </div>

            {/* Thumbnails strip */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 aspect-[3/4] rounded-[2px] overflow-hidden border bg-[#FAF7F2] transition-all cursor-pointer ${
                      selectedImage === img
                        ? 'border-[#151311] ring-1 ring-[#151311]'
                        : 'border-[#E8DDD0] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-contain object-center p-0.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-cormorant text-xs tracking-[0.25em] text-[#C4A36B] uppercase font-semibold block mb-1">
                MALBOOS SIGNATURE
              </span>
              <h1 className="text-3xl lg:text-4xl font-normal text-[#151311] mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-[#151311]">
                  {product.price} ر.س
                </span>
                {product.oldPrice && (
                  <span className="text-base text-[#7B746E] line-through font-light">
                    {product.oldPrice} ر.س
                  </span>
                )}
                <span className="text-xs px-2 py-0.5 bg-[#C4A36B]/20 text-[#76604D] rounded-[2px]">
                  شامل الضريبة
                </span>
              </div>
            </div>

            <p className="text-[#7B746E] text-sm font-light leading-relaxed border-y border-[#E8DDD0] py-4">
              {product.description}
            </p>

            {/* Colors picker */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#151311] uppercase tracking-wider block">
                  اللون: <span className="font-normal text-[#76604D]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                        selectedColor === col.name
                          ? 'border-[#151311] scale-110'
                          : 'border-transparent opacity-80 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: col.hex }}
                      title={col.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-[#151311] uppercase tracking-wider">
                  المقاس (بالطول/القياسي):
                </label>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[#C4A36B] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>دليل المقاسات</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`py-2.5 text-xs md:text-sm font-medium rounded-[2px] border transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#151311] text-[#F7F2EA] border-[#151311]'
                        : 'bg-white text-[#151311] border-[#E8DDD0] hover:border-[#C4A36B]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="text-xs text-[#C4A36B] font-medium bg-[#151311] px-3 py-1.5 rounded-[2px] text-center border border-[#C4A36B]/30 animate-fadeIn">
                  اختاري المقاس أولاً
                </p>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-4">
              <div className="flex gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-[#E8DDD0] rounded-[2px] bg-white px-2">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-[#151311] hover:text-[#C4A36B] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-medium text-[#151311]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-[#151311] hover:text-[#C4A36B] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag CTA */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-[#151311] text-[#F7F2EA] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#C4A36B] hover:text-[#151311] transition-all rounded-[2px] shadow-sm cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>إضافة إلى حقيبة التسوق</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`w-12 rounded-[2px] border flex items-center justify-center transition-colors cursor-pointer ${
                    isFavorite
                      ? 'bg-[#151311] border-[#151311] text-[#C4A36B]'
                      : 'border-[#E8DDD0] bg-white text-[#151311] hover:border-[#C4A36B]'
                  }`}
                  title="حفظ في المفضلة"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#C4A36B]' : ''}`} />
                </button>
              </div>

              {/* Share button */}
              <div className="flex justify-end">
                <button
                  onClick={handleShare}
                  className="text-xs text-[#7B746E] hover:text-[#151311] flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'تم نسخ الرابط!' : 'مشاركة القطعة'}</span>
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-6 border-t border-[#E8DDD0] divide-y divide-[#E8DDD0]">
              {/* Details */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('details')}
                  className="w-full flex justify-between items-center text-sm font-medium text-[#151311] text-right cursor-pointer"
                >
                  <span>تفاصيل المنتج والخامة</span>
                  {openAccordion === 'details' ? <ChevronUp className="w-4 h-4 text-[#C4A36B]" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === 'details' && (
                  <div className="pt-3 text-xs text-[#7B746E] space-y-2 font-light leading-relaxed">
                    <p><strong>نوع القماش:</strong> {product.fabric}</p>
                    <p><strong>طريقة العناية:</strong> {product.care}</p>
                    <p><strong>التصنيف:</strong> {product.categoryAr}</p>
                    <p><strong>المناسبة:</strong> {product.occasion}</p>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex justify-between items-center text-sm font-medium text-[#151311] text-right cursor-pointer"
                >
                  <span>الشحن والتوصيل</span>
                  {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4 text-[#C4A36B]" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pt-3 text-xs text-[#7B746E] space-y-2 font-light leading-relaxed">
                    <p className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#C4A36B]" />
                      <span>توصيل داخل الرياض خلال 24-48 ساعة.</span>
                    </p>
                    <p>توصيل لجميع مناطق المملكة ودول الخليج خلال 2-5 أيام عمل عبر الشحن السريع.</p>
                  </div>
                )}
              </div>

              {/* Returns */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('returns')}
                  className="w-full flex justify-between items-center text-sm font-medium text-[#151311] text-right cursor-pointer"
                >
                  <span>الاستبدال والاسترجاع</span>
                  {openAccordion === 'returns' ? <ChevronUp className="w-4 h-4 text-[#C4A36B]" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === 'returns' && (
                  <div className="pt-3 text-xs text-[#7B746E] space-y-2 font-light leading-relaxed">
                    <p className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C4A36B]" />
                      <span>استرجاع واستبدال مرن خلال 7 أيام من استلام الطلب.</span>
                    </p>
                    <p>يجب أن تكون القطعة بحالتها الأصلية وغير مستخدمة وفي تغليف ملبوس الأصلي.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-[#E8DDD0]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[1.5px] bg-[#C4A36B]" />
              <h2 className="text-2xl font-normal text-[#151311]">قد يعجبك أيضاً</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        defaultTab={product.category}
      />
    </div>
  );
}
