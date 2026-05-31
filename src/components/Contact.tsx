'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';

const socials = [
  {
    name: 'Gmail',
    icon: FiMail,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=hamenathmurali@gmail.com',
    description: 'Send me an email',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/Hamenath',
    description: 'Explore my code',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/hamenathbdesigner',
    description: 'Connect professionally',
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://www.instagram.com/editor_ak._?igsh=MXI0MmlhajI1YWRvNg==',
    description: 'Behind the scenes',
  },
  {
    name: 'X (Twitter)',
    icon: FiTwitter,
    url: 'https://x.com/HamenathOffi',
    description: 'Thoughts & updates',
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
    <section id="contact" className="section-padding bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 mb-16 max-w-2xl"
        >
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 font-heading">
            07 / Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            Let&apos;s build something together
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            I&apos;m currently open to full-time roles, freelance projects, and interesting collaborations. Whether you have an idea, opportunity, or just want to say hello — I&apos;d love to connect.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hamenathmurali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-neutral-950 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all duration-200 mt-2"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
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
                className="group flex flex-col items-start gap-3 p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:border-neutral-200 hover:bg-neutral-50 hover:shadow-xs transition-all duration-200"
              >
                <div className="p-2.5 rounded-xl bg-white border border-neutral-100 text-neutral-600 group-hover:text-neutral-950 group-hover:border-neutral-200 transition-colors shadow-2xs">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 font-heading">
                    {social.name}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {social.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
