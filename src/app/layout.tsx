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
  metadataBase: new URL('https://hamenath.online'),
  title: {
    default: 'Hamenath B | Full Stack Developer & AI Builder',
    template: '%s | Hamenath B',
  },
  description:
    'Hamenath B is a Full Stack Developer and AI Builder specializing in React, Next.js, Node.js, MongoDB and modern web applications.',
  keywords: [
    'Hamenath B',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'AI Builder',
    'Web Developer',
  ],
  authors: [{ name: 'Hamenath B', url: 'https://hamenath.online' }],
  creator: 'Hamenath B',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hamenath.online',
    title: 'Hamenath B | Full Stack Developer',
    description: 'Official Portfolio of Hamenath B',
    siteName: 'Hamenath B Portfolio',
    images: [
      {
        url: 'https://hamenath.online/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Hamenath B - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamenath B | Full Stack Developer',
    description: 'Official Portfolio of Hamenath B',
    creator: '@hamenath',
    images: ['https://hamenath.online/images/profile.jpg'],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Hamenath B',
    'url': 'https://hamenath.online',
    'jobTitle': 'Full Stack Developer',
    'sameAs': [
      'https://github.com/Hamenath',
      'https://www.linkedin.com/in/hamenathbdesigner',
      'https://x.com/HamenathOffi',
      'https://www.instagram.com/editor_ak._?igsh=MXI0MmlhajI1YWRvNg=='
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
