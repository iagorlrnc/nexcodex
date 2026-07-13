import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Globe,
  Zap,
  Cpu,
  Layers,
  Layout,
  Settings,
  Sparkles,
  TrendingUp,
  Code,
  Search,
  Smartphone,
  Shield,
  Heart,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

import { DIFFERENTIALS } from '../constants';
import Logo from '../components/Logo';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Hero entrance animation
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.gsap-fade-up',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.gsap-scale-in',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.2, delay: 0.4, ease: 'elastic.out(1, 0.75)' }
        );
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  // Icon mapping resolver helper
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="text-primary" size={24} />;
      case 'Zap': return <Zap className="text-primary" size={24} />;
      case 'Cpu': return <Cpu className="text-primary" size={24} />;
      case 'Layers': return <Layers className="text-primary" size={24} />;
      case 'Layout': return <Layout className="text-primary" size={24} />;
      case 'Settings': return <Settings className="text-primary" size={24} />;
      case 'Sparkles': return <Sparkles className="text-primary" size={24} />;
      case 'TrendingUp': return <TrendingUp className="text-primary" size={24} />;
      case 'Code': return <Code className="text-primary" size={24} />;
      case 'Search': return <Search className="text-primary" size={24} />;
      case 'Smartphone': return <Smartphone className="text-primary" size={24} />;
      case 'Shield': return <Shield className="text-primary" size={24} />;
      case 'Heart': return <Heart className="text-primary" size={24} />;
      default: return <HelpCircle className="text-primary" size={24} />;
    }
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-grid-pattern overflow-hidden border-b border-light-border/30 py-16"
      >
        {/* Violet glow nodes */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-6">
          {/* Hero text */}
          <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 mb-2 gsap-fade-up">
              <Logo showText={false} size={72} />
              <span className="font-sans font-bold tracking-tight text-xl text-text-dark flex items-center">
                Nex<span className="text-primary">Codex</span>
              </span>
            </div>
            
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-dark leading-[1.1] tracking-tight gsap-fade-up">
              Transformamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light glow-text-purple">ideias</span> <br/>em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light glow-text-purple">soluções digitais</span>
            </h1>
            
            <p className="font-sans text-base md:text-lg text-text-light leading-relaxed max-w-2xl gsap-fade-up">
              Desenvolvimento de sites modernos, sistemas sob medida, segurança de dados e integrações de APIs.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-2 gsap-fade-up">
              <a
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-base font-semibold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 group"
              >
                Solicitar orçamento
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS SECTION */}
      <section className="py-12 md:py-16 bg-white border-b border-light-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col gap-4">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Diferenciais</span>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-text-dark tracking-tight">
              Nosso Padrão de Engenharia
            </h2>
            <p className="font-sans text-sm md:text-base text-text-light">
              Buscamos a excelência técnica em cada detalhe para que seu produto digital performe em nível mundial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
            {DIFFERENTIALS.map((diff) => (
              <div
                key={diff.id}
                className="p-6 md:p-8 rounded-2xl bg-light-card border border-light-border/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {renderIcon(diff.icon)}
                </div>
                <h3 className="font-sans font-bold text-base text-text-dark mb-3">
                  {diff.title}
                </h3>
                <p className="font-sans text-xs text-text-light leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE CONTRATAR A NEXCODEX */}
      <section className="py-16 md:py-20 bg-light-card border-b border-light-border/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-4">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Por que nos contratar?</span>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-text-dark tracking-tight">
              A Escolha Certa para o Site da sua Empresa
            </h2>
            <p className="font-sans text-sm md:text-base text-text-light max-w-2xl mx-auto leading-relaxed">
              Não criamos apenas páginas corporativas comuns. Desenvolvemos ativos de software de alta performance focados em credibilidade institucional, conversão comercial e segurança de dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pilar 1: Performance & SEO */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white border border-light-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Zap size={20} />
                </div>
                <h3 className="font-sans font-bold text-base text-text-dark mb-4 group-hover:text-primary transition-colors">
                  Performance & SEO Extremos
                </h3>
                <p className="font-sans text-xs text-text-light leading-relaxed">
                  Sites ultra-rápidos que carregam em menos de 1 segundo e atingem pontuação máxima no Google Core Web Vitals. Velocidade reduz drasticamente a taxa de rejeição e melhora seu posicionamento nas pesquisas orgânicas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-light-border/40 flex items-center justify-between text-[11px] font-bold text-text-dark">
                <span>Carregamento rápido (Lighthouse 100/100)</span>
              </div>
            </div>

            {/* Pilar 2: Design Exclusivo */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white border border-light-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Layout size={20} />
                </div>
                <h3 className="font-sans font-bold text-base text-text-dark mb-4 group-hover:text-primary transition-colors">
                  Design Exclusivo e Autoral
                </h3>
                <p className="font-sans text-xs text-text-light leading-relaxed">
                  Evitamos templates ou temas prontos de WordPress. Desenhamos cada detalhe sob medida para a sua identidade corporativa, transmitindo máxima sofisticação, credibilidade e solidez no primeiro impacto visual.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-light-border/40 flex items-center justify-between text-[11px] font-bold text-text-dark">
                <span>Design autoral feito sob medida</span>
              </div>
            </div>

            {/* Pilar 3: Segurança */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white border border-light-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Shield size={20} />
                </div>
                <h3 className="font-sans font-bold text-base text-text-dark mb-4 group-hover:text-primary transition-colors">
                  Segurança & LGPD por Padrão
                </h3>
                <p className="font-sans text-xs text-text-light leading-relaxed">
                  Implementamos criptografia de ponta a ponta, firewalls integrados, Row Level Security (RLS) nos bancos de dados e banners de privacidade que garantem total conformidade jurídica e proteção contra ataques.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-light-border/40 flex items-center justify-between text-[11px] font-bold text-text-dark">
                <span>Segurança RLS e LGPD nativas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-violet-50/80 via-white to-purple-50/50 p-10 md:p-16 text-center overflow-hidden border border-primary/10 shadow-xl shadow-primary/5">
            {/* Soft blurred ambient lights */}
            <div className="absolute top-0 left-10 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-primary-light/5 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-5 items-center">
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                PRONTO PARA COMEÇAR?
              </span>
              <h2 className="font-sans font-extrabold text-2xl md:text-3xl leading-tight text-text-dark">
                Vamos construir seu próximo projeto de tecnologia?
              </h2>
              <p className="font-sans text-xs md:text-sm text-text-light leading-relaxed max-w-lg">
                Fale diretamente com nosso arquiteto de software. Transforme seu backlog em uma plataforma robusta e impulsione seus resultados comerciais.
              </p>
              <a
                href="/contato"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-xs transition-all shadow-md hover:shadow-primary/20 hover:scale-105"
              >
                Solicitar orçamento gratuito
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
