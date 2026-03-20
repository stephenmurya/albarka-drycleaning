import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Albarka Dry Cleaning | Katsina',
  description: 'Albarka Dry Cleaning - Blessings in every clean garment in Kabren, Katsina'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand.offwhite text-slate-800">
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
