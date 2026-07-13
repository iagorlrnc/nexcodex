import React from 'react';
import {
  Globe,
  Zap,
  Cpu,
  Layers,
  Layout,
  Settings,
  Sparkles,
  TrendingUp,
  HelpCircle,
  Check,
  ArrowRight,
  Link,
  Shield
} from 'lucide-react';
import { SERVICES } from '../constants';

export const Servicos: React.FC = () => {
  const renderIcon = (name: string) => {
    const cls = "text-primary group-hover:text-white transition-colors duration-300";
    switch (name) {
      case 'Globe': return <Globe className={cls} size={24} />;
      case 'Zap': return <Zap className={cls} size={24} />;
      case 'Cpu': return <Cpu className={cls} size={24} />;
      case 'Layers': return <Layers className={cls} size={24} />;
      case 'Layout': return <Layout className={cls} size={24} />;
      case 'Settings': return <Settings className={cls} size={24} />;
      case 'Sparkles': return <Sparkles className={cls} size={24} />;
      case 'TrendingUp': return <TrendingUp className={cls} size={24} />;
      case 'Link': return <Link className={cls} size={24} />;
      case 'Shield': return <Shield className={cls} size={24} />;
      default: return <HelpCircle className={cls} size={24} />;
    }
  };

  const workflowStages = [
    { title: 'Briefing', desc: 'Entendimento profundo do seu modelo de negócio, objetivos comerciais e dores a serem sanadas.' },
    { title: 'Planejamento', desc: 'Definição da stack tecnológica ideal, banco de dados, fluxo de telas e escopo técnico detalhado.' },
    { title: 'UI/UX Design', desc: 'Criação de protótipos de alta fidelidade modernos, interativos e desenhados sob medida.' },
    { title: 'Desenvolvimento', desc: 'Codificação limpa, escalável e otimizada seguindo boas práticas e arquitetura limpa.' },
    { title: 'Testes QA', desc: 'Testes rigorosos de responsividade, carga, bugs e segurança em múltiplos dispositivos.' },
    { title: 'Entrega', desc: 'Publicação oficial em ambiente de produção seguro, com otimização completa de domínios.' },
    { title: 'Suporte', desc: 'Monitoria contínua pós-lançamento, garantia de correções e implementação de novos recursos.' }
  ];

  return (
    <div className="pb-12 md:pb-16 bg-white">
      {/* Page Header */}
      <div className="bg-light-card border-b border-light-border/40 pt-24 pb-12 md:pt-28 md:pb-16 mb-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-4 relative z-10">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Nossos Serviços</span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-text-dark tracking-tight leading-tight">
            Soluções Sob Medida
          </h1>
          <p className="font-sans text-base md:text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            Desenvolvimento de sites, landing pages, sistemas web e muito mais.<br/>Focamos em resultados práticos, tecnologia de ponta e atendimento próximo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-2xl bg-gradient-to-br from-violet-50/30 via-white to-purple-50/15 border border-light-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-primary rounded-t-2xl transition-all duration-300" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                {renderIcon(service.icon)}
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-sm text-text-dark mb-2 group-hover:text-primary transition-colors leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[11px] text-text-light leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-auto pt-4 border-t border-light-border/40 flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 font-sans text-[11px] text-text-dark/80">
                    <Check size={11} className="text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Workflow process */}
        <div className="border-t border-light-border/40 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col gap-4">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Nosso Processo</span>
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-text-dark tracking-tight">
              Como tiramos o seu projeto do papel
            </h2>
            <p className="font-sans text-sm text-text-light leading-relaxed">
              Trabalhamos com metodologias ágeis em 7 fases de forma transparente e previsível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 max-w-7xl mx-auto">
            {workflowStages.map((stage, idx) => (
              <div
                key={stage.title}
                className="p-6 rounded-2xl bg-light-card border border-light-border/50 text-left flex flex-col justify-between min-h-[180px] hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-sans font-bold text-xs mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="font-sans font-bold text-xs text-text-dark mb-2">{stage.title}</h4>
                  <p className="font-sans text-[10px] text-text-light leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct contact CTA */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50/80 via-white to-purple-50/50 p-8 md:p-12 border border-primary/10 shadow-xl shadow-primary/5 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Subtle light nodes */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
          
          <div className="max-w-xl relative z-10 flex flex-col gap-2">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full w-max mx-auto md:mx-0">
              🛠️ INTEGRAÇÃO E ESCALABILIDADE
            </span>
            <h3 className="font-sans font-extrabold text-xl md:text-2xl text-text-dark">
              Precisa de um serviço tecnológico personalizado?
            </h3>
            <p className="font-sans text-xs text-text-light leading-relaxed">
              Fale com nossos engenheiros para estruturar a arquitetura ideal para suas especificidades técnicas de negócio.
            </p>
          </div>
          <a
            href="/contato"
            className="relative z-10 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-xs transition-all shadow-md hover:shadow-primary/20 hover:scale-105"
          >
            <span className="flex items-center gap-2">Solicitar atendimento técnico<ArrowRight size={14} /></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
