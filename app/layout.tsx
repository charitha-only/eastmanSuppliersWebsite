import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eastmansuppliers.lk'),
  title: {
    default: 'Eastman Suppliers | Premium Sewing Machine Spare Parts Sri Lanka',
    template: '%s | Eastman Suppliers'
  },
  description: 'Sri Lanka\'s premier supplier of industrial sewing machine spare parts, cutting room equipment, and garment machinery accessories.',
  keywords: ['Eastman Suppliers', 'sewing machine parts Sri Lanka', 'garment machinery', 'cutting room equipment', 'industrial sewing parts', 'apparel manufacturing', 'clothing industry machinery'],
  authors: [{ name: 'Eastman Suppliers' }],
  creator: 'Eastman Suppliers',
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    url: 'https://eastmansuppliers.lk',
    title: 'Eastman Suppliers | Premium Sewing Machine Spare Parts Sri Lanka',
    description: 'Sri Lanka\'s premier supplier of industrial sewing machine spare parts and cutting room equipment.',
    siteName: 'Eastman Suppliers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eastman Suppliers | Premium Sewing Machine Spare Parts',
    description: 'Sri Lanka\'s premier supplier of industrial sewing machine spare parts and cutting room equipment.',
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-cream font-sans text-ink antialiased`}>
        <Providers>
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
