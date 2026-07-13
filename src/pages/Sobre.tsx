import React from 'react';
import { Globe, Zap, Shield, Code2, Cpu, ShieldCheck, Gauge } from 'lucide-react';

export const Sobre: React.FC = () => {
  return (
    <div className="pb-12 md:pb-16 bg-white">
      {/* Page Header */}
      <div className="bg-light-card border-b border-light-border/40 pt-24 pb-12 md:pt-28 md:pb-16 mb-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-4 relative z-10">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Sobre a NexCodex</span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-text-dark tracking-tight leading-tight">
            Desenvolvimento de Software
          </h1>
          <p className="font-sans text-base md:text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            Unimos design minimalista sofisticado, metodologias ágeis consistentes e engenharia moderna para acelerar e inovar a presença técnica de grandes empresas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Core Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 text-left">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-text-dark leading-tight">
              Quem somos e o que fazemos
            </h2>
            <p className="font-sans text-sm text-text-light leading-relaxed">
              Fundada por desenvolvedores apaixonados por código limpo e arquitetura escalável, a <strong>NexCodex</strong> surgiu com a missão clara de preencher a lacuna entre o design visual moderno e a solidez de engenharia.
            </p>
            <p className="font-sans text-sm text-text-light leading-relaxed">
              Não criamos apenas sites ou sistemas simples; nós modelamos o ecossistema digital da sua empresa. Nossas soluções de plataformas corporativas são desenhadas para durar, performar instantaneamente e converter visitantes em ativos de alto valor.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-light-card border border-light-border/60 relative">
            <div className="absolute inset-0 bg-grid-dot opacity-80" />
            <div className="relative z-10 flex flex-col gap-6 text-left">
              <div className="flex gap-4">
                <span className="font-sans font-extrabold text-3xl text-primary/30">01</span>
                <div>
                  <h4 className="font-sans font-bold text-sm text-text-dark mb-1">Qualidade sem atalhos</h4>
                  <p className="font-sans text-xs text-text-light">Nossos projetos não utilizam templates prontos. Cada linha de código e pixel do layout é planejado do zero.</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-light-border/40">
                <span className="font-sans font-extrabold text-3xl text-primary/30">02</span>
                <div>
                  <h4 className="font-sans font-bold text-sm text-text-dark mb-1">Foco em Performance</h4>
                  <p className="font-sans text-xs text-text-light">Otimizamos o peso de imagens, fontes e scripts para garantir carregamentos em menos de 1 segundo.</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-light-border/40">
                <span className="font-sans font-extrabold text-3xl text-primary/30">03</span>
                <div>
                  <h4 className="font-sans font-bold text-sm text-text-dark mb-1">Segurança e Privacidade</h4>
                  <p className="font-sans text-xs text-text-light">Sistemas blindados com criptografia de ponta a ponta e total conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission / Vision / Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {/* Missão */}
          <div className="p-8 rounded-2xl bg-light-card border border-light-border/60 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Zap size={22} />
            </div>
            <h3 className="font-sans font-bold text-lg text-text-dark mb-3">Nossa Missão</h3>
            <p className="font-sans text-xs text-text-light leading-relaxed">
              Desenvolver softwares modernos que otimizam as rotinas comerciais, elevam a credibilidade digital das marcas e geram resultados mensuráveis de eficiência.
            </p>
          </div>

          {/* Visão */}
          <div className="p-8 rounded-2xl bg-light-card border border-light-border/60 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Globe size={22} />
            </div>
            <h3 className="font-sans font-bold text-lg text-text-dark mb-3">Nossa Visão</h3>
            <p className="font-sans text-xs text-text-light leading-relaxed">
              Ser referência em desenvolvimento de software de alta performance e integradora de soluções de última geração para empresas inovadoras.
            </p>
          </div>

          {/* Valores */}
          <div className="p-8 rounded-2xl bg-light-card border border-light-border/60 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Shield size={22} />
            </div>
            <h3 className="font-sans font-bold text-lg text-text-dark mb-3">Nossos Valores</h3>
            <p className="font-sans text-xs text-text-light leading-relaxed">
              Compromisso com o código limpo, segurança absoluta de dados, comunicação clara sem termos excessivamente complexos e parceria duradoura no pós-entrega.
            </p>
          </div>
        </div>

        {/* Engineering Culture / Pillars of Excellence */}
        <div className="border-t border-light-border/40 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12 flex flex-col gap-2">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Cultura de Engenharia</span>
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-text-dark tracking-tight">Nossos Pilares de Excelência</h2>
            <p className="font-sans text-xs text-text-light">Práticas de desenvolvimento rígidas que garantem o nível superior de nossas entregas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Pillar 1 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-violet-50/40 via-white to-purple-50/20 p-6 border border-primary/10 shadow-md hover:shadow-lg transition-all group hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl group-hover:h-1.5 transition-all" />
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Code2 size={20} />
              </div>
              <h3 className="font-sans font-bold text-base text-text-dark mb-2">Código Limpo</h3>
              <p className="font-sans text-xs text-text-light leading-relaxed">
                Código autocumentado, padrões arquiteturais consistentes e refatorações contínuas para assegurar a longevidade e agilidade na evolução técnica do seu software.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-violet-50/40 via-white to-purple-50/20 p-6 border border-primary/10 shadow-md hover:shadow-lg transition-all group hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl group-hover:h-1.5 transition-all" />
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Cpu size={20} />
              </div>
              <h3 className="font-sans font-bold text-base text-text-dark mb-2">Arquitetura Resiliente</h3>
              <p className="font-sans text-xs text-text-light leading-relaxed">
                Design estruturado com foco em desacoplamento, microserviços orientados a eventos ou monólitos modulares prontos para escalar sob alta demanda sem gargalos.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-violet-50/40 via-white to-purple-50/20 p-6 border border-primary/10 shadow-md hover:shadow-lg transition-all group hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl group-hover:h-1.5 transition-all" />
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-sans font-bold text-base text-text-dark mb-2">Segurança por Padrão</h3>
              <p className="font-sans text-xs text-text-light leading-relaxed">
                Rotinas de criptografia ponta a ponta, blindagem de APIs e sanitização de dados, em total alinhamento com as conformidades da LGPD e diretrizes de segurança OWASP.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-violet-50/40 via-white to-purple-50/20 p-6 border border-primary/10 shadow-md hover:shadow-lg transition-all group hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl group-hover:h-1.5 transition-all" />
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Gauge size={20} />
              </div>
              <h3 className="font-sans font-bold text-base text-text-dark mb-2">Performance Extrema</h3>
              <p className="font-sans text-xs text-text-light leading-relaxed">
                Otimizações a nível de byte e renderização focadas em atingir notas máximas nos indicadores Core Web Vitals, garantindo navegação instantânea e melhor SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
