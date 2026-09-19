import React from 'react';
import type { Metadata } from 'next';
import { SizeGuideClient } from '@/components/size-guide/SizeGuideClient';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'دليل المقاسات | ملبوس',
  description:
    'دليل مقاسات العبايات والمخاوير من ملبوس. جداول قياس دقيقة بالطول والسانتي والإنش لاختيار المقاس الأنسب لإطلالتك.',
  alternates: {
    canonical: buildCanonicalUrl('/size-guide'),
  },
  openGraph: {
    title: 'دليل المقاسات | ملبوس',
    description:
      'دليل مقاسات العبايات والمخاوير التفصيلي من ملبوس لاختيار المقاس الأنسب.',
    url: buildCanonicalUrl('/size-guide'),
  },
};

export default function SizeGuidePage() {
  return <SizeGuideClient />;
}
