import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 relative">
      {/* Quote Icon Background */}
      <div className="absolute top-0 left-10 text-primary/10 select-none pointer-events-none hidden md:block">
        <Quote size={120} />
      </div>

      <div className="relative min-h-[300px] flex items-center justify-center py-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full text-center flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 p-1 shadow-md">
              <img
                src={current.avatarUrl}
                alt={current.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <p className="font-sans text-lg md:text-xl italic text-text-dark max-w-2xl leading-relaxed">
              "{current.text}"
            </p>

            <div>
              <h4 className="font-sans font-bold text-base text-text-dark">{current.name}</h4>
              <p className="font-sans text-xs text-text-light">
                {current.role} &mdash; <span className="text-primary font-medium">{current.company}</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-light-border hover:border-primary hover:text-primary transition-all bg-white text-text-dark shadow-sm cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft size={16} />
        </button>
        
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary w-4' : 'bg-zinc-300 hover:bg-zinc-400'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-light-border hover:border-primary hover:text-primary transition-all bg-white text-text-dark shadow-sm cursor-pointer"
          aria-label="Próximo"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
