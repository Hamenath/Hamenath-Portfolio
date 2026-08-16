import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white p-6 text-center">
      <h1 className="text-6xl font-bold font-heading mb-4">404</h1>
      <p className="text-slate-400 text-lg mb-8">Page Not Found</p>
      <Link href="/" className="portfolio-pill-btn px-8 py-3.5 text-sm">
        Return Home
      </Link>
    </div>
  );
}
