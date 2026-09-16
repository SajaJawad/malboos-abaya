import type { Metadata } from 'next';
import { Noto_Kufi_Arabic, Noto_Sans_Arabic, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { SearchProvider } from '@/context/SearchContext';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/commerce/CartDrawer';
import { SearchOverlay } from '@/components/commerce/SearchOverlay';

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-kufi',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const notoSans = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ملبوس | MALBOOS — عبايات ومخاوير بتصاميم عصرية',
  description: 'اكتشفي ملبوس، وجهتك الأولى للعبايات الفاخرة والمخاوير بتصاميم تجمع بين الأصالة الخليجية والأناقة المعاصرة.',
  keywords: ['ملبوس', 'عبايات', 'مخاوير', 'ازياء خليجية', 'عباية كلوش', 'مخوار مطرز'],
  openGraph: {
    title: 'ملبوس | MALBOOS — MORE THAN A PIECE',
    description: 'عبايات ومخاوير بتصاميم عصرية تجمع بين الأصالة والحداثة',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${notoKufi.variable} ${notoSans.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F2EA] text-[#151311] selection:bg-[#C4A36B] selection:text-[#151311]">
        <CartProvider>
          <WishlistProvider>
            <SearchProvider>
              <AnnouncementBar />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CartDrawer />
              <SearchOverlay />
            </SearchProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
