import { Product } from '@/data/products';
import { SITE_CONFIG, SITE_URL } from './seo';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/malboos/malboos-logo.png`,
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
    name: SITE_CONFIG.name,
    url: SITE_URL,
    inLanguage: 'ar',
  };
}

export function getProductSchema(product: Product) {
  const imageUrl = product.images[0]?.startsWith('http')
    ? product.images[0]
    : `${SITE_URL}${product.images[0] || '/images/malboos/abayas/abaya-1.jpg'}`;

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
      url: `${SITE_URL}/product/${product.slug}`,
      priceCurrency: 'SAR',
      price: product.price,
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
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
      item: el.item.startsWith('http') ? el.item : `${SITE_URL}${el.item}`,
    })),
  };
}
