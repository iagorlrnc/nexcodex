import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

export const TechStack: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto px-4"
    >
      {TECH_STACK.map((tech) => (
        <motion.div
          variants={itemVariants}
          key={tech.name}
          className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-light-border/60 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 -translate-y-0"
          whileHover={{ y: -5 }}
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-2xl bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="w-14 h-14 flex items-center justify-center mb-4 relative z-10">
            <img
              src={tech.logo}
              alt={tech.name}
              loading="lazy"
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              onError={(e) => {
                // simple fallback if image fail to load
                (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg';
              }}
            />
          </div>

          <h4 className="font-sans font-bold text-sm text-text-dark group-hover:text-primary transition-colors relative z-10">
            {tech.name}
          </h4>
          <span className="font-sans text-[10px] text-text-light font-medium mt-1 relative z-10">
            {tech.category}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
