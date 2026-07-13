import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Layers, Cpu, Globe } from 'lucide-react';

const TRAJECTORY = [
  {
    year: '2023',
    title: 'Fundação & Código Limpo',
    description: 'Surgimento da NexCodex com o propósito de unir engenharia de software avançada com design de nível mundial, entregando sistemas limpos e escaláveis.',
    icon: Rocket,
  },
  {
    year: '2024',
    title: 'Expansão & Plataformas SaaS',
    description: 'Ampliamos nosso escopo para criar arquiteturas multi-tenant sofisticadas, consolidando a entrega de plataformas SaaS de alta performance.',
    icon: Layers,
  },
  {
    year: '2025',
    title: 'Sistemas Distribuídos e Cloud',
    description: 'Migração e escalabilidade de grandes plataformas para nuvem híbrida, otimizando custos e processamento sob demanda.',
    icon: Cpu,
  },
  {
    year: '2026',
    title: 'Consolidação e Expansão Global',
    description: 'Lançamento de produtos digitais robustos para o mercado internacional, operando com infraestrutura global distribuída de altíssima disponibilidade.',
    icon: Globe,
  },
];

export const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-6">
      {/* Scrollable container on mobile, 4-column grid on desktop */}
      <div className="flex flex-row overflow-x-auto gap-6 pb-6 pt-2 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-8 md:overflow-x-visible">
        {TRAJECTORY.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div
              key={item.year}
              className="flex-1 min-w-[280px] md:min-w-0 flex flex-col items-center relative snap-start"
            >
              {/* Connector line */}
              <div
                className="absolute top-5 h-0.5 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 z-0 pointer-events-none"
                style={{
                  left: idx === 0 ? '50%' : '0%',
                  right: idx === TRAJECTORY.length - 1 ? '50%' : '0%',
                }}
              />

              {/* Bullet node on the line */}
              <div className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shadow-md shadow-primary/10 z-10 mb-6 relative">
                <Icon size={16} />
              </div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
                className="w-full p-6 rounded-2xl bg-gradient-to-br from-violet-50/50 via-white to-purple-50/30 border border-primary/10 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all group hover:-translate-y-1 relative flex flex-col items-center text-center"
              >
                {/* Year Badge */}
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3 inline-block shadow-sm">
                  {item.year}
                </span>

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl group-hover:h-1.5 transition-all" />

                <h3 className="font-sans font-bold text-base text-text-dark mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-text-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
      
      {/* Mobile scroll helper text */}
      <div className="text-center mt-2 md:hidden">
        <span className="font-sans text-[10px] text-text-muted animate-pulse">
          ← Deslize para ver mais →
        </span>
      </div>
    </div>
  );
};

export default Timeline;
