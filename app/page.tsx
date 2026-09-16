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

export default function Home() {
  return (
    <>
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
