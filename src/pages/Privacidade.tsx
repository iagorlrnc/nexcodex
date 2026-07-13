import React, { useState } from 'react';
import { Shield, FileText, Scale, Mail, ArrowRight } from 'lucide-react';

export const Privacidade: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset to clear fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(offsetPosition);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const sections = [
    {
      id: 'intro',
      title: '1. Disposições Gerais e Identificação do Controlador',
      content: (
        <>
          <p className="mb-4">
            A presente Política de Privacidade regula, de forma formal e transparente, as diretrizes de tratamento de dados pessoais realizadas pela <strong>NexCodex Desenvolvimento de Software Ltda.</strong>, doravante denominada simplesmente "Controladora", em estrita observância à Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
          </p>
          <p className="mb-4">
            Ao navegar em nossa plataforma ou submeter formulários de contato, o Titular dos dados declara ciência e compreensão das disposições descritas neste instrumento normativo, o qual se aplica a todos os usuários e potenciais clientes.
          </p>
        </>
      )
    },
    {
      id: 'dados',
      title: '2. Categoria de Dados Coletados',
      content: (
        <>
          <p className="mb-4">
            Em conformidade com o princípio da minimização dos dados (Artigo 6º, III da LGPD), a Controladora coleta apenas os dados estritamente necessários para a viabilização de propostas comerciais e prestação de serviços tecnológicos, a saber:
          </p>
          <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
            <li><strong>Dados de Identificação:</strong> Nome completo, endereço eletrônico (e-mail) e número de telefone celular de contato corporativo.</li>
            <li><strong>Dados de Rastreamento (Cookies):</strong> Endereço IP, dados de geolocalização aproximada, tipo de navegador, páginas acessadas e tempo de permanência, coletados com o fito de otimização de performance técnica do site.</li>
            <li><strong>Dados de Interação:</strong> Quaisquer informações voluntariamente inseridas pelo Titular no campo de mensagem dos formulários de contato.</li>
          </ul>
        </>
      )
    },
    {
      id: 'finalidade',
      title: '3. Finalidades e Bases Legais do Tratamento',
      content: (
        <>
          <p className="mb-4">
            Todo e qualquer tratamento de dados pessoais realizado pela NexCodex possui fundamento em uma das bases legais autorizativas estabelecidas no Artigo 7º da LGPD:
          </p>
          <div className="overflow-x-auto mb-4 border border-light-border/60 rounded-xl">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="bg-light-card border-b border-light-border/60">
                  <th className="p-3 font-bold text-text-dark w-1/3">Dado / Processo</th>
                  <th className="p-3 font-bold text-text-dark w-1/3">Finalidade Específica</th>
                  <th className="p-3 font-bold text-text-dark w-1/3">Base Legal (LGPD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-border/40 text-text-light">
                <tr>
                  <td className="p-3 font-medium text-text-dark">Formulário de Contato</td>
                  <td className="p-3">Elaboração de propostas comerciais e atendimento pré-contratual a pedido do Titular.</td>
                  <td className="p-3">Art. 7º, V (Procedimentos preliminares a contrato)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-text-dark">Cookies Analíticos</td>
                  <td className="p-3">Monitoramento estatístico de navegação para aprimoramento da infraestrutura do site.</td>
                  <td className="p-3">Art. 7º, IX (Legítimo Interesse do Controlador)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-text-dark">Comunicações Comerciais</td>
                  <td className="p-3">Envio de newsletters ou mensagens institucionais sobre novos serviços.</td>
                  <td className="p-3">Art. 7º, I (Consentimento explícito e revogável)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )
    },
    {
      id: 'seguranca',
      title: '4. Protocolos de Segurança da Informação',
      content: (
        <>
          <p className="mb-4">
            A Controladora emprega rígidas medidas técnicas, físicas e administrativas de segurança para salvaguardar a integridade e confidencialidade dos dados sob seu tratamento. Entre os mecanismos implementados, destacam-se:
          </p>
          <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
            <li>Uso compulsório de criptografia na transmissão de dados via protocolos HTTPS/TLS.</li>
            <li>Implementação de <strong>Row Level Security (RLS)</strong> a nível de banco de dados, assegurando isolamento completo dos registros.</li>
            <li>Controle rigoroso de privilégios de acesso aos sistemas, restrito exclusivamente a funcionários autorizados para o cumprimento de suas atribuições.</li>
            <li>Monitoramento contínuo de vulnerabilidades de segurança e realização periódica de backups preventivos.</li>
          </ul>
        </>
      )
    },
    {
      id: 'direitos',
      title: '5. Direitos Constitucionais dos Titulares',
      content: (
        <>
          <p className="mb-4">
            Em conformidade com o Artigo 18 da LGPD, a NexCodex garante aos Titulares de dados pessoais o livre exercício de seus direitos fundamentais, os quais incluem:
          </p>
          <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
            <li>Confirmação da existência de tratamento de seus dados pessoais.</li>
            <li>Acesso imediato e completo às informações armazenadas.</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.</li>
            <li>Portabilidade dos dados a outro prestador de serviços, mediante requisição expressa.</li>
            <li>Revogação do consentimento concedido anteriormente para tratamentos específicos.</li>
          </ul>
        </>
      )
    },
    {
      id: 'compartilhamento',
      title: '6. Compartilhamento e Transferência Internacional de Dados',
      content: (
        <>
          <p className="mb-4">
            A Controladora não realiza a comercialização ou compartilhamento ilícito de dados pessoais com terceiros. O compartilhamento ocorre única e exclusivamente com operadores parceiros estritamente necessários para a hospedagem do site (provedores de infraestrutura de nuvem) e atendimento de requisições legais emanadas por autoridades públicas competentes.
          </p>
          <p className="mb-4">
            Caso ocorra transferência de dados para servidores localizados fora do território nacional, a Controladora assegura a adoção de salvaguardas contratuais adequadas, exigindo que os operadores internacionais mantenham níveis de proteção equivalentes ou superiores aos estabelecidos pela LGPD brasileira.
          </p>
        </>
      )
    },
    {
      id: 'retencao',
      title: '7. Período de Retenção e Descarte Seguro',
      content: (
        <>
          <p className="mb-4">
            Os dados pessoais tratados serão conservados em ambiente controlado apenas pelo período estritamente necessário para atender às finalidades que motivaram sua coleta ou para fins de cumprimento de obrigações legais, contratuais e regulatórias da NexCodex.
          </p>
          <p className="mb-4">
            Findo o período de retenção ou mediante solicitação de exclusão fundamentada pelo Titular, os dados serão descartados por meio de procedimentos seguros de exclusão lógica ou anonimização irreversível, impedindo sua posterior recuperação ou reconstitution.
          </p>
        </>
      )
    },
    {
      id: 'contato-dpo',
      title: '8. Canal de Comunicação do Encarregado (DPO)',
      content: (
        <>
          <p className="mb-4">
            Para o esclarecimento de dúvidas concernentes a esta Política de Privacidade ou para o exercício de qualquer direito previsto na LGPD, o Titular de dados deverá formalizar sua requisição diretamente ao nosso Encarregado pelo Tratamento de Dados Pessoais (Data Protection Officer - DPO) através do canal oficial de comunicação indicado abaixo:
          </p>
          <div className="p-5 rounded-2xl bg-light-card border border-light-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider text-text-light block">E-mail para Contato Jurídico</span>
                <a href="mailto:privacidade@nexcodex.com" className="font-sans font-bold text-sm text-text-dark hover:text-primary transition-colors">privacidade@nexcodex.com</a>
              </div>
            </div>
            <a 
              href="mailto:privacidade@nexcodex.com"
              className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all duration-300 shadow-sm flex items-center gap-1.5"
            >
              Enviar Requisição
              <ArrowRight size={12} />
            </a>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="pb-16 md:pb-24 bg-white">
      {/* Page Header */}
      <div className="bg-light-card border-b border-light-border/40 pt-24 pb-12 md:pt-28 md:pb-16 mb-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-4 relative z-10">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Departamento Jurídico</span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-text-dark tracking-tight leading-tight">
            Declaração de Privacidade e LGPD
          </h1>
          <p className="font-sans text-base md:text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            Regulamento oficial que rege o tratamento de informações corporativas e proteção de dados individuais.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Sticky Navigation Index Sidebar */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:flex flex-col gap-6 p-6 rounded-2xl bg-light-card border border-light-border/50">
            <div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">Conteúdo</span>
              <h3 className="font-sans font-extrabold text-lg text-text-dark">Índice da Política</h3>
            </div>
            
            <nav className="flex flex-col gap-1.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left font-sans text-xs py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-primary/5 text-primary font-semibold border-l-2 border-primary pl-4'
                      : 'text-text-light hover:text-text-dark hover:bg-light-border/20 pl-3'
                  }`}
                >
                  {section.title.split('. ')[1]}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-light-border/50 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-text-light text-xs font-sans">
                <Shield size={14} className="text-primary shrink-0" />
                <span>NexCodex em conformidade jurídica</span>
              </div>
              <div className="flex items-center gap-2 text-text-light text-xs font-sans">
                <Scale size={14} className="text-primary shrink-0" />
                <span>Lei 13.709/2018 (LGPD)</span>
              </div>
            </div>
          </div>

          {/* Document Content */}
          <div className="lg:col-span-8 flex flex-col gap-10 text-left bg-white p-6 md:p-10 rounded-2xl border border-light-border/50 shadow-sm relative overflow-hidden">
            {/* Top water mark/indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/35 via-primary to-primary-light" />
            
            <div className="flex items-center gap-3 border-b border-light-border/40 pb-6 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                <FileText className="text-primary" size={20} />
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider text-text-light block">Código do Documento: POL-PRIV-01</span>
                <span className="font-sans font-bold text-xs text-text-dark">NexCodex &mdash; Segurança Jurídica</span>
              </div>
            </div>

            {sections.map((section) => (
              <div 
                key={section.id} 
                id={section.id} 
                className="scroll-mt-28 flex flex-col gap-4 border-b border-light-border/30 last:border-b-0 pb-8 last:pb-0"
              >
                <h2 className="font-sans font-extrabold text-lg text-text-dark tracking-tight leading-snug group flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">#</span>
                  {section.title}
                </h2>
                <div className="font-sans text-sm text-text-light leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Verification / Legal Footer */}
            <div className="pt-6 border-t border-light-border/40 text-center flex flex-col gap-2">
              <span className="font-sans text-[10px] text-text-light">
                Este documento é regido pelas leis da República Federativa do Brasil, em particular pela Lei nº 13.709/2018.
              </span>
              <span className="font-sans text-[10px] font-bold text-text-dark">
                &copy; {new Date().getFullYear()} NexCodex &mdash; Todos os direitos reservados.
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacidade;
