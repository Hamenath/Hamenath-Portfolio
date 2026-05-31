'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: 'Present',
    role: 'Founder',
    company: 'Genz Studio',
    description: 'Started a creative tech studio to build modern websites and automate business tasks.',
  },
  {
    year: 'Present',
    role: 'CTO & Full Stack Engineer',
    company: 'VEXA TECH',
    description: 'Building fast web applications and cloud tools. Creating reusable code systems and connecting AI services.',
  },
  {
    year: '2025',
    role: 'Winner',
    company: 'Smart India Hackathon 2025',
    description: 'Developed a software solution that solves a real government problem and won 1st place in the national competition.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-neutral-50/50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        
        {/* Left Column: Biography */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="col-span-1 md:col-span-5 flex flex-col items-start gap-6"
        >
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 font-heading">
            01 / About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            Building products with simple designs and smart technology.
          </h2>
          <div className="flex flex-col gap-4 text-neutral-600 text-sm sm:text-base">
            <p>
              I am a Full Stack Developer who builds websites and connects them with AI tools. I focus on making clean, fast, and easy-to-use websites that work great on any device.
            </p>
            <p>
              I love simple designs, premium styling, and fast performance. I want to make sure that clicking buttons, changing pages, and using my apps feels smooth and effortless.
            </p>
            <p>
              Whether running <span className="text-neutral-900 font-semibold">Genz Studio</span>, leading tech at <span className="text-neutral-900 font-semibold">VEXA TECH</span>, or winning national hackathons, I enjoy solving coding challenges and making great products.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Career Timeline */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-bold tracking-widest text-neutral-400 font-heading"
          >
            Milestones &amp; Journey
          </motion.span>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l border-neutral-200 pl-6 ml-2 flex flex-col gap-10"
          >
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-31px] top-1.5 w-4.5 h-4.5 rounded-full border border-neutral-200 bg-white flex items-center justify-center">
                  <div className={`w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-neutral-900' : 'bg-neutral-300'}`} />
                </div>

                {/* Event Content */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-neutral-400 font-heading">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight font-heading">
                    {event.role} <span className="text-neutral-400 font-medium">at</span> {event.company}
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-lg mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
