import type { Metadata } from 'next';
import { ShopClient } from '@/components/shop/ShopClient';
import { buildCanonicalUrl } from '@/lib/seo';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const category = typeof params.category === 'string' ? params.category : undefined;
  const occasion = typeof params.occasion === 'string' ? params.occasion : undefined;
  const size = typeof params.size === 'string' ? params.size : undefined;
  const filter = typeof params.filter === 'string' ? params.filter : undefined;

  let title = 'متجر العبايات والمخاوير | ملبوس';
  let description =
    'تصفحي تشكيلة ملبوس الحصرية من العبايات الفاخرة والمخاوير التطريزية الخليجية المصممة بأعلى معايير الجودة والأناقة.';

  if (category === 'abayas') {
    title = 'عبايات فاخرة بكتان وحرير كوري | ملبوس';
    description =
      'تصفحي مجموعة العبايات من ملبوس. عبايات كلوش، نص كلوش، رسمية، ومطرزة بتصاميم تجمع بين الاحتشام والأناقة الخليجية المعاصرة.';
  } else if (category === 'makhawer') {
    title = 'مخاوير إماراتية وتطريزات خليجية فاخرة | ملبوس';
    description =
      'اكتشفي تشكيلة المخاوير الخليجية من ملبوس. مخاوير حريرية ومطرزة بزري وقصب فاخر تناسب كافة الزيارات والمناسبات السعيدة.';
  } else if (occasion === 'رمضان') {
    title = 'تشكيلة رمضان المبارك | ملبوس';
    description =
      'استقبلي شهر رمضان المبارك بتصاميم تجمع بين الوقار الخليجي والراحة الفائقة. عبايات ومخاوير وأطقم رمضانية حصرية من ملبوس.';
  } else if (occasion === 'العيد') {
    title = 'تشكيلة العيد الفاخرة | ملبوس';
    description =
      'تألقي في العيد بأجمل العبايات والمخاوير المطرزة بالخرز والقصب والزري. حضور ملكي وتصاميم مبهرة من ملبوس.';
  } else if (occasion === 'هدايا') {
    title = 'قسم الهدايا الفاخرة وتغليف ملبوس الملكي | ملبوس';
    description =
      'أهدي من تحبين عباية أو مخوار فاخر في صندوق ملبوس الملكي مع باقة ورد وبطاقة إهداء مخصصة.';
  }

  // Prevent search query & secondary filter index bloat while keeping follow
  const hasSecondaryFilters = Boolean(size || filter || params.price || params.sort);
  const canonicalUrl = category !== 'all' && category ? buildCanonicalUrl(`/shop?category=${category}`) : buildCanonicalUrl('/shop');

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !hasSecondaryFilters,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ShopPage() {
  return <ShopClient />;
}
