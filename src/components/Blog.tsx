'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineCalendar, HiOutlineClock, HiOutlineX } from 'react-icons/hi';

interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
}

const articles: Article[] = [
  {
    slug: 'how-i-built-my-portfolio',
    category: 'Engineering',
    title: 'How I Built My Portfolio: Behind the Premium Architecture',
    excerpt: 'An inside look at the technologies, animations, and design choices behind my professional portfolio, prioritizing speed, SEO, and visual excellence.',
    date: 'May 31, 2026',
    readTime: '5 min read',
    content: [
      'When building a personal portfolio, the temptation is always to use a basic template or standard UI kit. However, to truly stand out, I wanted to engineer a modern, premium experience from scratch. I chose Next.js and React as the core foundation, leveraging vanilla styling and clean layout patterns to maintain absolute control over every pixel.',
      'One of the major engineering goals was achieving a flawless lighthouse score. By using next/font optimization, next/image with responsive sizes, and minimizing external JS bloat, the initial paint is virtually instantaneous. For animations, I integrated Framer Motion, utilizing smooth spring physics rather than rigid linear animations. This creates a natural, responsive feedback loop as users scroll and interact.',
      'From an SEO perspective, I structured the metadata using Next.js Metadata API, defined Open Graph properties for high-fidelity social shares, and integrated a complete Person schema. This tells search engines exactly who I am, what I build, and where to find my work, turning a simple resume website into a powerful authority domain.',
    ]
  },
  {
    slug: 'my-react-projects',
    category: 'Development',
    title: 'Modern React Architecture: Building Production-Ready Projects',
    excerpt: 'Deep-diving into state management, rendering performance, and custom UI components across my popular React and Next.js applications.',
    date: 'May 20, 2026',
    readTime: '6 min read',
    content: [
      'React is incredibly powerful, but as projects scale, maintaining a clean structure is paramount. Across applications like SkillMate AI and Lanzy, I established a strictly modular architecture separating UI display elements, state containers, and custom utility hooks.',
      'For heavy data flows, I rely on modern React patterns such as Context API coupled with custom reducers or light external state managers. In weather apps or media discovery hubs (like Weatherify and Film Finder), optimizing re-renders is key. I extensively employ React.memo, useMemo, and useCallback to ensure that dynamic lists containing dozens of items can render at a consistent 60fps, even on low-end mobile devices.',
      'A key learning from these builds is the benefit of accessible UI components. Building customized forms, dropdowns, and interactive modals that respect ARIA roles and keyboard navigation ensures that the finished products are not only fast and visual, but usable by absolutely everyone.',
    ]
  },
  {
    slug: 'smart-india-hackathon-experience',
    category: 'Achievement',
    title: 'Winning the Smart India Hackathon: Lessons from the National Arena',
    excerpt: 'The stories, technical challenges, and strategic design choices that led our team to become National Winners in the SIH competition.',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    content: [
      'The Smart India Hackathon (SIH) is one of the world\'s largest open hackathons, gathering hundreds of thousands of student developers. Standing on that stage as a National Winner was an unforgettable achievement, but the real reward was the intense 36-hour sprint of engineering, validation, and design.',
      'Our team was tasked with building a high-impact solution addressing critical public infrastructure monitoring. While others focused solely on code, we treated our solution as a true production-grade digital product. We split our workflows efficiently: backend APIs were deployed as high-throughput serverless functions, and the frontend dashboard was engineered using React with real-time WebSocket feeds.',
      'The biggest lesson was the value of user-centric design. In a high-pressure environment, presenting complex analytical data in an elegant, understandable layout was what ultimately won over the panel. This experience cemented my belief that software engineering is not just about writing logical algorithms, but about creating intuitive human-computer interfaces.',
    ]
  },
  {
    slug: 'building-ai-applications',
    category: 'AI / LLMs',
    title: 'Building Intelligent AI Applications: Beyond the Prompt',
    excerpt: 'How to design next-generation applications with direct LLM integrations, retrieval pipelines, and responsive UX design patterns.',
    date: 'Mar 10, 2026',
    readTime: '7 min read',
    content: [
      'AI is redefining how users interact with software. However, creating an intelligent application goes far beyond simple API prompt wrappers. It requires a robust retrieval framework, responsive UX feedback loops, and intelligent handling of conversational context.',
      'In building modern AI integrations, I utilize semantic vector search models for Retrieval-Augmented Generation (RAG). By embedding documentation or localized data into a vector database (like Pinecone or pgvector), we can pass highly relevant context to LLMs, reducing hallucination and producing highly reliable domain responses.',
      'Equally important is handling stream states. Instead of forcing users to stare at static loaders, streaming text response tokens sequentially through Server-Sent Events (SSE) or WebSockets elevates the user experience. Combining streaming data with dynamic markdown renderers creates interfaces that feel incredibly fast, alive, and interactive.',
    ]
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="blog" className="section-padding bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background glow offsets */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="apple-section-glass p-8 sm:p-12 md:p-16">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12 md:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
              08 / Blog &amp; Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Thoughts on Code, Design &amp; AI
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mt-1">
              Sharing lessons learned from hackathons, building premium user experiences, and integrating intelligent AI architectures.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <motion.div
                key={article.slug}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl apple-crystal cursor-pointer group"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest font-heading text-slate-300 px-2.5 py-1 apple-badge-crystal">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-450">
                      <HiOutlineCalendar size={13} className="text-slate-500" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-slate-400 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="portfolio-pill-btn px-4 py-2 text-xs flex items-center gap-1.5 mt-6 w-fit">
                  <span>Read Article</span>
                  <HiOutlineArrowRight size={13} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Detail Modal Overlay */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="w-full max-w-3xl max-h-[85vh] bg-background/90 rounded-3xl border border-white/12 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/5 bg-white/3">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest font-heading text-slate-350 px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
                      {selectedArticle.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <HiOutlineCalendar size={13} />
                      <span>{selectedArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <HiOutlineClock size={13} />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                    {selectedArticle.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="portfolio-pill-btn p-2 text-slate-300 hover:text-white"
                  aria-label="Close modal"
                >
                  <HiOutlineX size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-transparent">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end p-6 border-t border-white/5 bg-white/3">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="portfolio-pill-btn px-6 py-2.5 text-xs"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
