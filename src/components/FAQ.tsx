import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 px-4">
      {FAQS.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-light-border/60 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-sans font-bold text-sm md:text-base text-text-dark group-hover:text-primary transition-colors">
                {item.question}
              </span>
              <span className="p-1 rounded-full bg-light-card group-hover:bg-primary/5 transition-colors">
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-text-light group-hover:text-primary transition-colors"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 border-t border-light-border/20">
                    <p className="font-sans text-sm text-text-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
