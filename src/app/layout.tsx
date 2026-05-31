import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hamenath.dev'),
  title: {
    default: 'Hamenath B | Full Stack Developer',
    template: '%s | Hamenath B',
  },
  description:
    'Official portfolio of Hamenath B, Full Stack Developer, React Developer and Frontend Developer.',
  keywords: [
    'Hamenath B',
    'Full Stack Developer',
    'AI Builder',
    'Next.js Developer',
    'React Developer',
    'Portfolio',
    'Smart India Hackathon 2025',
    'VEXA TECH',
    'Genz Studio',
  ],
  authors: [{ name: 'Hamenath B', url: 'https://hamenath.dev' }],
  creator: 'Hamenath B',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hamenath.dev',
    title: 'Hamenath B — Full Stack Developer & AI Builder',
    description:
      'Full Stack Developer and AI Builder. Smart India Hackathon 2025 Winner. Building premium digital products at VEXA TECH and Genz Studio.',
    siteName: 'Hamenath B Portfolio',
    images: [
      {
        url: '/images/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Hamenath B - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamenath B — Full Stack Developer & AI Builder',
    description:
      'Full Stack Developer and AI Builder. Smart India Hackathon 2025 Winner.',
    creator: '@hamenath',
    images: ['/images/profile.jpeg'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <SmoothScroll>
          <Navbar />
          {children}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
