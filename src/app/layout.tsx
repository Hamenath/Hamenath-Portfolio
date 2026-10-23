import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hamenath.online'),
  title: {
    default: 'Hamenath B — Modern Websites & AI Digital Experiences | Tamil Nadu',
    template: '%s | Hamenath B',
  },
  description:
    'Senior AI and Web Engineer based in Tamil Nadu. Designing and engineering high-impact modern websites, startup platforms, and intelligent digital experiences for ambitious businesses.',
  keywords: [
    'Website developer Tamil Nadu',
    'Freelance web developer Tamil Nadu',
    'Website designer Madurai',
    'Business website development',
    'Startup website development',
    'AI website development',
    'Modern web design Tamil Nadu',
    'Hamenath B',
    'Next.js developer',
    'React developer',
  ],
  authors: [{ name: 'Hamenath B', url: 'https://hamenath.online' }],
  creator: 'Hamenath B',
  alternates: {
    canonical: 'https://hamenath.online',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hamenath.online',
    title: 'Hamenath B — Modern Websites & AI Digital Experiences',
    description:
      'I design and build modern websites and AI-powered digital experiences for businesses, startups and personal brands. Based in Tamil Nadu, working worldwide.',
    siteName: 'Hamenath B',
    images: [
      {
        url: 'https://hamenath.online/images/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Hamenath B - Modern Websites & AI Digital Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamenath B — Modern Websites & AI Digital Experiences',
    description:
      'Designing and engineering modern websites and AI experiences for businesses, startups, and personal brands.',
    creator: '@HamenathOffi',
    images: ['https://hamenath.online/images/profile.jpeg'],
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://hamenath.online/#person',
        'name': 'Hamenath B',
        'url': 'https://hamenath.online',
        'jobTitle': 'AI & Web Engineer',
        'image': 'https://hamenath.online/images/profile.jpeg',
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': 'Tamil Nadu',
          'addressCountry': 'IN',
        },
        'sameAs': [
          'https://github.com/Hamenath',
          'https://www.linkedin.com/in/hamenathbdesigner',
          'https://x.com/HamenathOffi',
          'https://www.instagram.com/editor_ak._?igsh=MXI0MmlhajI1YWRvNg==',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://hamenath.online/#service',
        'name': 'Hamenath B — Web Design & Digital Product Development',
        'url': 'https://hamenath.online',
        'image': 'https://hamenath.online/images/profile.jpeg',
        'description':
          'Modern website design, business web development, and AI digital experiences in Tamil Nadu and worldwide.',
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': 'Tamil Nadu',
          'addressCountry': 'IN',
        },
        'priceRange': '₹₹',
        'founder': {
          '@id': 'https://hamenath.online/#person',
        },
        'areaServed': [
          'Tamil Nadu',
          'Madurai',
          'Chennai',
          'Coimbatore',
          'India',
          'Worldwide',
        ],
        'knowsAbout': [
          'Website Development',
          'Next.js',
          'React',
          'Business Websites',
          'AI Integrations',
          'UI/UX Design',
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
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
