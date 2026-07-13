import React from 'react';
import PortfolioComponent from '../components/Portfolio';

export const PortfolioPage: React.FC = () => {
  return (
    <div className="pb-12 md:pb-16 bg-white">
      {/* Page Header */}
      <div className="bg-light-card border-b border-light-border/40 pt-24 pb-12 md:pt-28 md:pb-16 mb-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-4 relative z-10">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Nosso Portfólio</span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-text-dark tracking-tight leading-tight">
            Nossos Projetos Recentes
          </h1>
          <p className="font-sans text-base md:text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            Navegue pelos detalhes dos projetos desenvolvidos.<br/>Veja nossos desafios e soluções técnicas implementadas.
          </p>
        </div>
      </div>

      {/* Main Grid Component wrapper */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <PortfolioComponent />
      </div>
    </div>
  );
};

export default PortfolioPage;
