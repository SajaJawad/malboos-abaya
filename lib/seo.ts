export const SITE_CONFIG = {
  name: 'ملبوس — MALBOOS',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://malboos.com',
  defaultTitle: 'ملبوس | عبايات ومخاوير بتصاميم عصرية',
  titleTemplate: '%s | ملبوس',
  description:
    'اكتشفي ملبوس، وجهتك الأولى للعبايات الفاخرة والمخاوير بتصاميم تجمع بين الأصالة الخليجية والأناقة المعاصرة.',
  keywords: [
    'ملبوس',
    'عبايات',
    'مخاوير',
    'ازياء خليجية',
    'عبايات فاخرة',
    'مخاوير اماراتية',
    'عبايات كلوش',
    'مخوار مطرز',
    'جلابيات رمضانية',
    'عبايات العيد',
    'تغليف هدايا',
  ],
  locale: 'ar_SA',
  socialHandles: {
    instagram: 'https://instagram.com/malboos',
    snapchat: 'https://snapchat.com/add/malboos',
    tiktok: 'https://tiktok.com/@malboos',
  },
};

export function buildCanonicalUrl(pathname = ''): string {
  const cleanPath = pathname.split('?')[0].replace(/\/$/, '');
  return `${SITE_CONFIG.siteUrl}${cleanPath}`;
}
