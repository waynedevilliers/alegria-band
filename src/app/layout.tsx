import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alegría! — Akustik-Sound mit Fiesta-Feeling',
  description:
    'Alegría! ist eine professionelle Live-Band aus Nordheim am Main mit gipsy, lateinamerikanischer und Party-Musik im akustischen Sound. Buchen Sie uns für Ihre Veranstaltung!',
  metadataBase: new URL('https://alegria-band.de'),
  openGraph: {
    title: 'Alegría! — Akustik-Sound mit Fiesta-Feeling',
    description: 'Gipsy-, Latin- und Party-Hits in mitreißenden Akustik-Versionen',
    url: 'https://alegria-band.de',
    siteName: 'Alegría! Band',
    images: [
      {
        url: 'https://alegria-band.de/images/hero/hero_image.jpeg',
        width: 1600,
        height: 900,
        alt: 'Alegría! live auf der Bühne',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alegría! — Akustik-Sound mit Fiesta-Feeling',
    description: 'Gipsy-, Latin- und Party-Hits in mitreißenden Akustik-Versionen',
    images: ['https://alegria-band.de/images/hero/hero_image.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
