import React from 'react';
import type { Metadata } from 'next';
import { FAQClient } from '@/components/faq/FAQClient';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة | ملبوس',
  description:
    'إجابات شاملة لأكثر الأسئلة تكراراً حول الشحن والتوصيل، طرق الاستبدال والاسترجاع، اختيار المقاسات، والعناية بالأقمشة في متجر ملبوس.',
  alternates: {
    canonical: buildCanonicalUrl('/faq'),
  },
  openGraph: {
    title: 'الأسئلة الشائعة | ملبوس',
    description:
      'إجابات شاملة لأكثر الأسئلة تكراراً حول الشحن والتوصيل والمقاسات في متجر ملبوس.',
    url: buildCanonicalUrl('/faq'),
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
