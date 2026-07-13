import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Check, Layers } from 'lucide-react';
import { PORTFOLIO } from '../constants';
import type { ProjectItem } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Lock scroll on background when a portfolio modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      (window as any).lenis?.stop();
    } else {
      document.body.style.overflow = '';
      (window as any).lenis?.start();
    }

    return () => {
      document.body.style.overflow = '';
      (window as any).lenis?.start();
    };
  }, [selectedProject]);

  return (
    <div className="w-full">
      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {PORTFOLIO.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-light-border/60 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden relative bg-zinc-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider bg-primary px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    Ver detalhes <ExternalLink size={12} />
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                  {project.category.toUpperCase()}
                </span>
                <h3 className="font-sans font-bold text-xl text-text-dark mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-text-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="font-sans text-[10px] font-semibold text-text-light bg-light-card px-2 py-0.5 rounded border border-light-border/40">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="font-sans text-[10px] font-semibold text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto custom-modal-scrollbar bg-white rounded-3xl border border-light-border shadow-2xl z-10"
              data-lenis-prevent
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-light-card hover:bg-light-border text-text-dark transition-all z-20 cursor-pointer"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              {/* Image banner */}
              <div className="aspect-[21/9] w-full bg-zinc-100 relative overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 md:left-8">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary bg-white/95 px-3 py-1 rounded-full shadow-sm mb-2 inline-block">
                    {selectedProject.category.toUpperCase()}
                  </span>
                  <h2 className="font-sans font-bold text-2xl md:text-3xl text-text-dark mt-1">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Long Description and Architecture */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div>
                    <h4 className="font-sans font-bold text-base text-text-dark mb-2">Visão Geral</h4>
                    <p className="font-sans text-sm text-text-light leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h5 className="font-sans font-bold text-sm text-rose-700 flex items-center gap-1.5 mb-2">
                        <Layers size={16} /> O Desafio
                      </h5>
                      <p className="font-sans text-xs text-text-light leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                      <h5 className="font-sans font-bold text-sm text-emerald-800 flex items-center gap-1.5 mb-2">
                        <Check size={16} /> A Solução
                      </h5>
                      <p className="font-sans text-xs text-text-light leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Technologies details */}
                <div className="flex flex-col gap-6 p-6 rounded-2xl bg-light-card border border-light-border/40">
                  <div>
                    <h4 className="font-sans font-bold text-sm text-text-dark flex items-center gap-2 mb-3">
                      <Cpu size={16} className="text-primary" /> Tecnologias
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-sans text-xs font-semibold text-text-dark bg-white border border-light-border px-3 py-1 rounded-full shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.projectUrl && (
                    <div className="pt-4 border-t border-light-border/60">
                      <a
                        href={selectedProject.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl bg-white hover:bg-light-card border border-light-border text-text-dark text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Visitar Site Oficial
                        <ExternalLink size={14} className="text-primary" />
                      </a>
                    </div>
                  )}

                  <div className="pt-4 border-t border-light-border/60">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Voltar ao portfólio
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
