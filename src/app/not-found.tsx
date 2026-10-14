import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary p-6 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">404 Error</span>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
        The page you are looking for does not exist or has been relocated.
      </p>
      <Link href="/" className="btn-primary text-xs">
        <FiArrowLeft size={14} />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
