import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { ProductDetailClient } from '@/components/product/ProductDetailClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { getProductSchema, getBreadcrumbSchema } from '@/lib/schema';
import { SITE_CONFIG, buildCanonicalUrl } from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'المنتج غير موجود | ملبوس',
      description: 'المنتج المطلوب غير متاح حالياً في متجر ملبوس.',
    };
  }

  const title = `${product.name} | ملبوس`;
  const description = `${product.name} من ملبوس. ${product.description} قماش ${product.fabric} فاخر. تسوقي أحدث العبايات والمخاوير بتصاميم خليجية عصرية.`;
  const canonicalUrl = buildCanonicalUrl(`/product/${product.slug}`);

  const imageUrl = product.images[0]?.startsWith('http')
    ? product.images[0]
    : `${SITE_CONFIG.siteUrl}${product.images[0] || '/images/malboos/hero/hero-1.jpg'}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 1067,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const productSchema = getProductSchema(product);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'الرئيسية', item: '/' },
    { name: product.categoryAr, item: `/shop?category=${product.category}` },
    { name: product.name, item: `/product/${product.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[productSchema, breadcrumbSchema]} />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
