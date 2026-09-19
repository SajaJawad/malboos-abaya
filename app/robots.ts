import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', '/checkout', '/account', '/wishlist'],
    },
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
  };
}
