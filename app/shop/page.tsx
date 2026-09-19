import type { Metadata } from 'next';
import { getFilteredProducts } from '@/data/products';
import { ShopClient } from '@/components/shop/ShopClient';
import { buildCanonicalUrl } from '@/lib/seo';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function getShopSeo(params: { [key: string]: string | string[] | undefined }) {
  const category = typeof params.category === 'string' ? params.category : undefined;
  const occasion = typeof params.occasion === 'string' ? params.occasion : undefined;
  const size = typeof params.size === 'string' ? params.size : undefined;
  const filter = typeof params.filter === 'string' ? params.filter : undefined;
  const price = typeof params.price === 'string' ? params.price : undefined;
  const sort = typeof params.sort === 'string' ? params.sort : undefined;
  const q = typeof params.q === 'string' ? params.q : undefined;

  const hasSecondaryFilters = Boolean(size || filter || price || sort || q);

  let title = 'متجر العبايات والمخاوير';
  let description =
    'تصفحي تشكيلة ملبوس الحصرية من العبايات الفاخرة والمخاوير التطريزية الخليجية المصممة بأعلى معايير الجودة والأناقة.';
  let parentCanonicalPath = '/shop';

  if (category === 'abayas') {
    title = 'عبايات فاخرة بكتان وحرير كوري';
    description =
      'تصفحي مجموعة العبايات من ملبوس. عبايات كلوش، نص كلوش، رسمية، ومطرزة بتصاميم تجمع بين الاحتشام والأناقة الخليجية المعاصرة.';
    parentCanonicalPath = '/shop?category=abayas';
  } else if (category === 'makhawer') {
    title = 'مخاوير إماراتية وتطريزات خليجية فاخرة';
    description =
      'اكتشفي تشكيلة المخاوير الخليجية من ملبوس. مخاوير حريرية ومطرزة بزري وقصب فاخر تناسب كافة الزيارات والمناسبات السعيدة.';
    parentCanonicalPath = '/shop?category=makhawer';
  } else if (occasion === 'رمضان') {
    title = 'تشكيلة رمضان المبارك';
    description =
      'استقبلي شهر رمضان المبارك بتصاميم تجمع بين الوقار الخليجي والراحة الفائقة. عبايات ومخاوير وأطقم رمضانية حصرية من ملبوس.';
    parentCanonicalPath = '/shop?occasion=رمضان';
  } else if (occasion === 'العيد') {
    title = 'تشكيلة العيد الفاخرة';
    description =
      'تألقي في العيد بأجمل العبايات والمخاوير المطرزة بالخرز والقصب والزري. حضور ملكي وتصاميم مبهرة من ملبوس.';
    parentCanonicalPath = '/shop?occasion=العيد';
  } else if (occasion === 'هدايا') {
    title = 'قسم الهدايا الفاخرة وتغليف ملبوس الملكي';
    description =
      'أهدي من تحبين عباية أو مخوار فاخر في صندوق ملبوس الملكي مع باقة ورد وبطاقة إهداء مخصصة.';
    parentCanonicalPath = '/shop?occasion=هدايا';
  }

  const canonicalUrl = buildCanonicalUrl(parentCanonicalPath);

  return {
    title,
    description,
    canonicalUrl,
    indexable: !hasSecondaryFilters,
  };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const seo = getShopSeo(params);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    robots: {
      index: seo.indexable,
      follow: true,
    },
    openGraph: {
      title: `${seo.title} | ملبوس`,
      description: seo.description,
      url: seo.canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${seo.title} | ملبوس`,
      description: seo.description,
    },
  };
}

export default async function ShopPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = typeof params.category === 'string' ? params.category : undefined;
  const occasion = typeof params.occasion === 'string' ? params.occasion : undefined;
  const filter = typeof params.filter === 'string' ? params.filter : undefined;
  const size = typeof params.size === 'string' ? params.size : undefined;
  const price = typeof params.price === 'string' ? Number(params.price) : undefined;
  const sort = typeof params.sort === 'string' ? params.sort : undefined;
  const q = typeof params.q === 'string' ? params.q : undefined;

  const initialProducts = getFilteredProducts({
    category,
    occasion,
    filter,
    size,
    priceRange: price,
    sort,
    searchQuery: q,
  });

  return <ShopClient initialProducts={initialProducts} />;
}
