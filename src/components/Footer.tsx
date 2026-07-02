export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-[#020203] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-[98%] mx-auto py-8 px-6 sm:px-10 rounded-3xl apple-crystal flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <p className="text-xs text-slate-400">
              &copy; {currentYear} Hamenath B. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              Built with React &bull; TypeScript &bull; Tailwind CSS &bull; Framer Motion
            </p>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            Designed &amp; Developed by <span className="text-white font-semibold">Hamenath B</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
