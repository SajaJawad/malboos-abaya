export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'abayas',
    slug: 'abayas',
    name: 'العبايات',
    subtitle: 'تصاميم لكل لحظة',
    image: '/images/malboos/collections/category-abaya.jpg',
    description: 'مجموعة متفردة من العبايات الخليجية الراقية، مصممة بأجود أنواع الأقمشة والتطريزات المتقنة.',
  },
  {
    id: 'makhawer',
    slug: 'makhawer',
    name: 'المخاوير',
    subtitle: 'راحة وفخامة',
    image: '/images/malboos/collections/category-makhawar.jpg',
    description: 'تشكيلة فاخرة من المخاوير التقليدية بروح عصرية، تجمع بين الأصالة والنعومة اللانهائية.',
  },
];
