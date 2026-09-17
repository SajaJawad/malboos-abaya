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
    image: '/images/malboos/occasions/occasion-daily.jpg',
  },
  {
    id: 'events',
    name: 'مناسبات',
    subtitle: 'حضور ملكي فاخر',
    image: '/images/malboos/occasions/occasion-events.jpg',
  },
  {
    id: 'ramadan',
    name: 'رمضان',
    subtitle: 'طابع دافئ وهادئ',
    image: '/images/malboos/abayas/story-main-abaya.jpg',
  },
  {
    id: 'eid',
    name: 'العيد',
    subtitle: 'بهجة وتطريزات أصيلة',
    image: '/images/malboos/occasions/occasion-eid.jpg',
  },
  {
    id: 'gifts',
    name: 'هدايا',
    subtitle: 'تغليف يليق بعنايتك',
    image: '/images/malboos/occasions/occasion-gifts.jpg',
  },
];
