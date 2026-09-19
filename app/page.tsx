import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { BestSellers } from '@/components/home/BestSellers';
import { TrustBar } from '@/components/home/TrustBar';
import { CollectionBanner } from '@/components/home/CollectionBanner';
import { NewArrivals } from '@/components/home/NewArrivals';
import { BrandStory } from '@/components/home/BrandStory';
import { ShopByOccasion } from '@/components/home/ShopByOccasion';
import { InspirationGrid } from '@/components/home/InspirationGrid';
import { Newsletter } from '@/components/home/Newsletter';
import { JsonLd } from '@/components/seo/JsonLd';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/schema';
import { SITE_CONFIG, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'ملبوس | عبايات ومخاوير فاخرة بتصاميم خليجية عصرية',
  },
  description:
    'تسوقي أحدث العبايات والمخاوير من ملبوس، بتصاميم تجمع بين الأصالة الخليجية، التفاصيل الراقية، والأناقة المعاصرة.',
  keywords: SITE_CONFIG.keywords,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'ملبوس | عبايات ومخاوير فاخرة بتصاميم خليجية عصرية',
    description:
      'تسوقي أحدث العبايات والمخاوير من ملبوس، بتصاميم تجمع بين الأصالة الخليجية، التفاصيل الراقية، والأناقة المعاصرة.',
    url: SITE_URL,
    type: 'website',
  },
};

export default function Home() {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <>
      <JsonLd data={[orgSchema, websiteSchema]} />
      <Hero />
      <CategoryGrid />
      <BestSellers />
      <TrustBar />
      <CollectionBanner />
      <NewArrivals />
      <BrandStory />
      <ShopByOccasion />
      <InspirationGrid />
      <Newsletter />
    </>
  );
}
