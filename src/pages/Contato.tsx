import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

export const Contato: React.FC = () => {
  return (
    <div className="pb-12 md:pb-16 bg-white">
      {/* Page Header */}
      <div className="bg-light-card border-b border-light-border/40 pt-24 pb-12 md:pt-28 md:pb-16 mb-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-4 relative z-10">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Contato</span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-text-dark tracking-tight leading-tight">
            Solicite um Orçamento
          </h1>
          <p className="font-sans text-base md:text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            Fale conosco hoje mesmo. Preencha os campos abaixo e nosso arquiteto de soluções entrará em contato em menos de 24 horas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto mb-16">
          
          {/* Support Channels column */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h2 className="font-sans font-extrabold text-2xl text-text-dark leading-tight">
              Canais Oficiais de Atendimento
            </h2>
            <p className="font-sans text-sm text-text-light leading-relaxed">
              Damos prioridade técnica a contatos corporativos. Além do formulário de cotação ao lado, você pode nos contatar diretamente através de nossos endereços oficiais.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-light-card border border-light-border/40">
                <Mail className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-text-dark">E-mail Comercial</h4>
                  <a href="mailto:contato@nexcodex.com" className="font-sans text-sm text-text-light hover:text-primary transition-colors">contato@nexcodex.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-light-card border border-light-border/40">
                <Phone className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-text-dark">Atendimento WhatsApp</h4>
                  <a href="tel:+5511999999999" className="font-sans text-sm text-text-light hover:text-primary transition-colors">+55 (11) 99999-9999</a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-light-card border border-light-border/40">
                <Clock className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-text-dark">Tempo Médio de Resposta</h4>
                  <span className="font-sans text-sm text-text-light">Menos de 24 horas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form column */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>

        {/* FAQs accordion */}
        <div className="border-t border-light-border/40 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col gap-4">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-text-dark tracking-tight">
              Dúvidas Frequentes
            </h2>
            <p className="font-sans text-sm text-text-light leading-relaxed">
              Consulte as respostas para as principais dúvidas técnicas e comerciais de nossos clientes.
            </p>
          </div>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Contato;
