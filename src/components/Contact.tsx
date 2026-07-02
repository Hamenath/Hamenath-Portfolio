'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter, FiMail, FiFileText } from 'react-icons/fi';

const socials = [
  {
    name: 'Gmail',
    icon: FiMail,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=hamenathmurali@gmail.com',
    description: 'Send me an email',
    color: 'group-hover:text-red-400',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/Hamenath',
    description: 'Explore my code',
    color: 'group-hover:text-slate-200',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/hamenathbdesigner',
    description: 'Connect professionally',
    color: 'group-hover:text-blue-400',
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://www.instagram.com/editor_ak._?igsh=MXI0MmlhajI1YWRvNg==',
    description: 'Behind the scenes',
    color: 'group-hover:text-pink-400',
  },
  {
    name: 'X (Twitter)',
    icon: FiTwitter,
    url: 'https://x.com/HamenathOffi',
    description: 'Thoughts & updates',
    color: 'group-hover:text-sky-400',
  },
  {
    name: 'Resume',
    icon: FiFileText,
    url: '/HamenathResumefinal.pdf',
    description: 'Download PDF',
    color: 'group-hover:text-emerald-400',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#020203] border-t border-white/5 relative overflow-hidden">
      {/* Background glow offsets */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="apple-section-glass p-8 sm:p-12 md:p-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 mb-16 max-w-3xl"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
              09 / Contact
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight">
              Let&apos;s Build Something Amazing Together.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I&apos;m open to full-time opportunities, freelance work, startup collaborations, and exciting product ideas.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hamenathmurali@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-6 py-3 apple-btn-crystal text-white text-sm font-semibold rounded-full shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all duration-300 mt-4 hover:scale-[1.02]"
            >
              <FiMail size={15} />
              Send me a message
            </a>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="group flex flex-col items-start gap-3 p-5 rounded-2xl apple-crystal"
                >
                  <div className={`p-2.5 rounded-xl apple-badge-crystal text-slate-400 transition-all ${social.color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white font-heading">
                      {social.name}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                      {social.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
