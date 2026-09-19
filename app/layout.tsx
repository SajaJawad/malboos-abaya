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
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  alternates: {
    canonical: SITE_CONFIG.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/malboos/malboos-logo.png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/images/malboos/malboos-logo.png',
    apple: '/images/malboos/malboos-logo.png',
  },
  openGraph: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    siteName: 'ملبوس | MALBOOS',
    locale: SITE_CONFIG.locale,
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}/images/malboos/hero/hero-1.jpg`,
        width: 1200,
        height: 630,
        alt: 'ملبوس — عبايات ومخاوير بتصاميم عصرية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.siteUrl}/images/malboos/hero/hero-1.jpg`],
  },
};

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
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/images/malboos/malboos-logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/malboos/malboos-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/malboos/malboos-logo.png" />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#F7F2EA] text-[#151311] selection:bg-[#C4A36B] selection:text-[#151311]"
        suppressHydrationWarning
      >
        <CartProvider>
          <WishlistProvider>
            <SearchProvider>
              <AnnouncementBar />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CartDrawer />
              <SearchOverlay />
              <ScrollToTop />
            </SearchProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
