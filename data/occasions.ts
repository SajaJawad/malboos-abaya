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
    subtitle: 'بساطة وأناقة يومية',
    image: '/images/malboos/occasions/occasion-daily.jpg',
  },
  {
    id: 'events',
    name: 'مناسبات',
    subtitle: 'قطع لحضور لا يُنسى',
    image: '/images/malboos/occasions/occasion-events.jpg',
  },
  {
    id: 'ramadan',
    name: 'رمضان',
    subtitle: 'إطلالات هادئة لأمسيات الشهر',
    image: '/images/malboos/abayas/story-main-abaya.jpg',
  },
  {
    id: 'eid',
    name: 'العيد',
    subtitle: 'تفاصيل صنعت للاحتفال',
    image: '/images/malboos/occasions/occasion-eid.jpg',
  },
  {
    id: 'gifts',
    name: 'هدايا',
    subtitle: 'اختيارات أنيقة لمن تحبين',
    image: '/images/malboos/occasions/occasion-gifts.jpg',
  },
];
