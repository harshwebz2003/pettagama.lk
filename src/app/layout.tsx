import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { QuickViewModal } from '@/components/common/QuickViewModal';
import { Toast } from '@/components/common/Toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pettagama.lk | Everything You Need for Your Creativity | Sri Lanka Arts, Crafts & Gifts',
  description: 'Sri Lanka’s premier online store for resin products, silicone moulds, air-dry clay, pipe cleaners, embroidery threads, beads, jewellery supplies, craft kits, and gift items. Store located at 241 Galle Road, Kalutara.',
  keywords: ['Pettagama.lk', 'Sri Lanka craft store', 'Epoxy resin Sri Lanka', 'Resin moulds Kalutara', 'Pipe cleaners Sri Lanka', 'Embroidery threads', 'Jewellery supplies', 'Kalutara craft store'],
  openGraph: {
    title: 'Pettagama.lk | Everything You Need for Your Creativity',
    description: 'Shop resin art supplies, moulds, clay, beads, embroidery & handmade gifts in Sri Lanka with islandwide delivery.',
    url: 'https://pettagama.lk',
    siteName: 'Pettagama.lk',
    locale: 'en_LK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <ShopProvider>
          <AnnouncementBar />
          <Header />
          <Navbar />
          
          <main className="flex-1">
            {children}
          </main>

          <Footer />
          <MobileBottomNav />
          <FloatingWhatsApp />
          <QuickViewModal />
          <Toast />
        </ShopProvider>
      </body>
    </html>
  );
}
