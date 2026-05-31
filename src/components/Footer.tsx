export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-neutral-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-400">
          &copy; {currentYear} Hamenath B. All rights reserved.
        </p>
        <p className="text-xs text-neutral-500 font-medium">
          Designed & Developed by <span className="text-neutral-900 font-semibold">Hamenath</span>
        </p>
      </div>
    </footer>
  );
}
