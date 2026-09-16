export interface Occasion {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

export const OCCASIONS: Occasion[] = [
  {
    id: 'daily',
    name: 'إطلالات يومية',
    subtitle: 'قصات مريحة وأنيقة',
    image: '/images/malboos/abayas/abaya-1.jpg',
  },
  {
    id: 'events',
    name: 'مناسبات',
    subtitle: 'حضور ملكي فاخر',
    image: '/images/malboos/hero/hero-1.jpg',
  },
  {
    id: 'ramadan',
    name: 'رمضان',
    subtitle: 'طابع دافئ وهادئ',
    image: '/images/malboos/makhawer/makhawar-1.jpg',
  },
  {
    id: 'eid',
    name: 'العيد',
    subtitle: 'بهجة وتطريزات أصيلة',
    image: '/images/malboos/collections/new-collection.jpg',
  },
  {
    id: 'gifts',
    name: 'هدايا',
    subtitle: 'تغليف يليق بعنايتك',
    image: '/images/malboos/collections/category-makhawar.jpg',
  },
];
