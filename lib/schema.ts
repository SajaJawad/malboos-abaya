import { Product } from '@/data/products';
import { SITE_CONFIG } from './seo';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ملبوس — MALBOOS',
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/images/malboos/malboos-logo.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.socialHandles.instagram,
      SITE_CONFIG.socialHandles.snapchat,
      SITE_CONFIG.socialHandles.tiktok,
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ملبوس — MALBOOS',
    url: SITE_CONFIG.siteUrl,
    inLanguage: 'ar',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.siteUrl}/shop?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getProductSchema(product: Product) {
  const imageUrl = product.images[0]?.startsWith('http')
    ? product.images[0]
    : `${SITE_CONFIG.siteUrl}${product.images[0] || '/images/malboos/abayas/abaya-1.jpg'}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [imageUrl],
    description: product.description,
    sku: product.id,
    category: product.categoryAr,
    brand: {
      '@type': 'Brand',
      name: 'ملبوس | MALBOOS',
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_CONFIG.siteUrl}/product/${product.slug}`,
      priceCurrency: 'SAR',
      price: product.price,
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'ملبوس — MALBOOS',
      },
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((el, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: el.name,
      item: el.item.startsWith('http') ? el.item : `${SITE_CONFIG.siteUrl}${el.item}`,
    })),
  };
}
