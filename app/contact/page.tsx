import React from 'react';
import type { Metadata } from 'next';
import { ContactClient } from '@/components/contact/ContactClient';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'تواصل معنا | ملبوس',
  description:
    'يسعدنا تواصلك معنا في ملbوس. فريق خدمة العملاء جاهز للرد على جميع استفساراتك بشأن المنتجات، المقاسات، أو تتبع الطلبات.',
  alternates: {
    canonical: buildCanonicalUrl('/contact'),
  },
  openGraph: {
    title: 'تواصل معنا | ملبوس',
    description:
      'يسعدنا تواصلك معنا في ملبوس. فريق خدمة العملاء جاهز للرد على جميع استفساراتك.',
    url: buildCanonicalUrl('/contact'),
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
