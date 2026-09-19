export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://malboos.com'
).replace(/\/$/, '');

export const SITE_CONFIG = {
  name: 'ملبوس — MALBOOS',
  siteUrl: SITE_URL,
  defaultTitle: 'ملبوس | عبايات ومخاوير فاخرة بتصاميم خليجية عصرية',
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
  if (!pathname) return SITE_URL;
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${cleanPath}`;
}
