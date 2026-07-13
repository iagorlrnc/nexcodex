import type { ServiceItem, ProjectItem, TestimonialItem, FAQItem, DifferentialItem, TimelineEvent } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'sites',
    title: 'Desenvolvimento de Sites',
    description: 'Criação de portais corporativos, focados em credibilidade, performance e design moderno.',
    icon: 'Globe',
    features: ['Design personalizado', 'Carregamento instantâneo', 'SEO integrado', 'Painel editável']
  },
  {
    id: 'sistemas',
    title: 'Sistemas Web sob Medida',
    description: 'Sistemas complexos projetados especificamente para a regra de negócio da sua empresa, integrando suas equipes e fluxos.',
    icon: 'Cpu',
    features: ['Segurança avançada', 'Arquitetura na nuvem', 'Banco de dados otimizado', 'Integração via APIs']
  },
  {
    id: 'security',
    title: 'Segurança de Dados',
    description: 'Proteção completa das informações do seu negócio com criptografia, RLS (Row Level Security), controle de acessos e conformidade com a LGPD.',
    icon: 'Shield',
    features: ['Criptografia de ponta a ponta', 'Controle de acessos e permissões', 'Conformidade com LGPD', 'Monitoramento de vulnerabilidades']
  },
  {
    id: 'consultancy',
    title: 'Consultoria Tecnológica',
    description: 'Mapeamento de arquiteturas técnicas, escolha de stacks ideais, auditoria de performance e direcionamento estratégico.',
    icon: 'TrendingUp',
    features: ['Auditoria de segurança', 'Análise de performance', 'Modernização de legado', 'Mentoria para equipes']
  }
];

export const PORTFOLIO: ProjectItem[] = [
  {
    id: 'mdlocadora',
    title: 'MD Locadora',
    subtitle: 'Landing Page Institucional',
    description: 'Landing page otimizada de alta performance para locação de ferramentas, geradores e maquinários industriais.',
    longDescription: 'Uma landing page institucional moderna e focada em conversão desenvolvida para a MD Locadora. A página apresenta todo o catálogo de maquinários pesados e equipamentos para construção civil, com seções de especificações técnicas e orçamento integrado.',
    category: 'landing-pages',
    imageUrl: '/portfolio_mdlocadora.png',
    challenge: 'Exibir com rapidez todo o catálogo de maquinários e permitir que o usuário solicite orçamentos diretamente pelo site, caindo no e-mail e no WhatsApp da equipe comercial.',
    solution: 'Implementação de catálogo interativo integrado ao EmailJS para envio assíncrono de orçamentos e API de integração direta com WhatsApp para contato imediato.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS'],
    projectUrl: 'https://www.mdlocadora.com.br/'
  },
  {
    id: 'bi2b',
    title: 'BI2B Consultoria',
    subtitle: 'Landing Page para Contabilidade & BI',
    description: 'Landing page focada na atração de clientes de contabilidade com integração de PowerBI e funil do RD Station.',
    longDescription: 'Landing page comercial criada com o objetivo de atrair novos clientes corporativos para os serviços de contabilidade e inteligência financeira da BI2B Consultoria, fornecendo atalhos para o portal do cliente e apresentações analíticas.',
    category: 'landing-pages',
    imageUrl: '/portfolio_bi2b.png',
    challenge: 'Estruturar o funil de captação integrado à API do RD Station, linkar de forma fluida o portal do cliente e exibir relatórios interativos e dinâmicos através do PowerBI.',
    solution: 'Modelagem de formulários integrados a Webhooks do RD Station para nutrição automática de leads e incorporação segura de painéis e métricas de PowerBI.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite','Google Analytics', 'PowerBI', 'RD Station API'],
    projectUrl: 'https://www.bi2bconsultoria.com.br/'
  },
  {
    id: 'jusclick',
    title: 'JusClick',
    subtitle: 'Projeto de Apoio & Orientação Feminina',
    description: 'Landing page informativa universitária para orientar mulheres em situação de vulnerabilidade e agressão.',
    longDescription: 'Desenvolvimento do site oficial do JusClick, um projeto universitário humanizado focado em orientar e informar mulheres sobre como e onde buscar ajuda em caso de agressão e violência doméstica.',
    category: 'landing-pages',
    imageUrl: '/portfolio_jusclick.png',
    challenge: 'Disponibilizar uma interface simples, segura e discreta que permita enviar pedidos de socorro e denúncias via formulário de forma anônima caindo diretamente no e-mail cadastrado.',
    solution: 'Integração de formulários do site vinculados à API do EmailJS para envio criptografado e direto das solicitações de ajuda aos e-mails dos administradores do site.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS', 'Framer Motion'],
    projectUrl: 'https://jusclick.vercel.app/'
  },
  {
    id: 'carolstore',
    title: 'Carol Store',
    subtitle: 'Landing Page de Moda & Vendas',
    description: 'Landing page comercial para divulgação e vendas diretas de coleções exclusivas de vestuário e acessórios.',
    longDescription: 'Landing page comercial desenvolvida para a Carol Store com o objetivo de apresentar coleções exclusivas de moda feminina com foco na conversão direta e no checkout de vendas online.',
    category: 'landing-pages',
    imageUrl: '/portfolio_carolstore.png',
    challenge: 'Apresentar uma vitrine digital fluida para compras online e conectar as transações à API de pagamento da Hest de forma segura e transparente.',
    solution: 'Criação de catálogo de produtos inteligente com conexão assíncrona ao gateway de pagamento Hest API para aprovação imediata das compras.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Hest API', 'Framer Motion'],
    projectUrl: 'https://www.carolstore.blog.br/'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Fundação da NexCodex',
    description: 'Nascemos com a missão de elevar a qualidade técnica e de design de produtos digitais no Brasil, focando em websites e automações inteligentes.'
  },
  {
    year: '2024',
    title: 'Foco em SaaS e APIs',
    description: 'Expandimos a equipe para focar em sistemas complexos e arquiteturas SaaS multitenant de alto volume e integrações financeiras.'
  },
  {
    year: '2025',
    title: 'Sistemas Distribuídos e Cloud',
    description: 'Migração e escalabilidade de grandes plataformas para nuvem híbrida, otimizando custos e processamento sob demanda.'
  },
  {
    year: '2026',
    title: 'Consolidação e Expansão',
    description: 'Nos posicionamos como a desenvolvedora premium de software de escolha para empresas que não abrem mão de design excepcional e engenharia robusta.'
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'clean-code',
    title: 'Código Limpo e Escalável',
    description: 'Desenvolvemos soluções modulares e bem estruturadas, prontas para crescer junto com o seu negócio sem acumular dívidas técnicas.',
    icon: 'Code'
  },
  {
    id: 'performance',
    title: 'Alta Performance',
    description: 'Velocidade de carregamento incrível. Focamos em otimização extrema de recursos para garantir a melhor experiência ao usuário.',
    icon: 'Zap'
  },
  {
    id: 'seo',
    title: 'SEO Otimizado de Ponta a Ponta',
    description: 'Aplicamos as melhores práticas de SEO semântico e meta tags avançadas para que sua marca seja facilmente encontrada no Google.',
    icon: 'Search'
  },
  {
    id: 'responsive',
    title: 'Design Responsivo Premium',
    description: 'Sua plataforma funcionará perfeitamente e com layout deslumbrante em computadores, tablets, celulares e notebooks.',
    icon: 'Smartphone'
  },
  {
    id: 'security',
    title: 'Segurança e Confiabilidade',
    description: 'Padrões modernos de proteção, criptografia de dados, controle rígido de acessos e testes preventivos contra vulnerabilidades.',
    icon: 'Shield'
  },
  {
    id: 'ux',
    title: 'Experiência de Usuário (UI/UX)',
    description: 'Interfaces limpas, elegantes, com fluxos intuitivos e interações sutis que cativam e engajam o usuário final.',
    icon: 'Sparkles'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'CTO',
    company: 'Fintech Velo',
    text: 'A NexCodex entregou nosso painel financeiro com uma qualidade que superou em muito o que imaginávamos. O código é limpo e as animações em GSAP deixaram a experiência fantástica.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Mariana Costa',
    role: 'Fundadora',
    company: 'Verde Orgânicos SaaS',
    text: 'Contratar a NexCodex para desenvolver nosso SaaS de gestão foi o melhor investimento que fizemos. A velocidade com que executaram o projeto e o cuidado na arquitetura foi impecável.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Roberto Valente',
    role: 'Diretor de Inovação',
    company: 'Logix Express',
    text: 'As automações de fluxos de trabalho criadas pela NexCodex pouparam mais de 40 horas semanais da nossa equipe de atendimento. Parceria estratégica de altíssimo nível.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto tempo demora para desenvolver um projeto?',
    answer: 'O tempo varia com base na complexidade. Landing Pages premium costumam levar entre 7 a 15 dias. Sistemas web customizados, SaaS e automações completas de fluxos variam de 30 a 90 dias úteis, divididos em etapas claras de entregas e testes.'
  },
  {
    id: 'faq-2',
    question: 'Como funciona o suporte técnico após a entrega?',
    answer: 'Nossos projetos contam com garantia inclusa para correção de eventuais bugs. Além disso, oferecemos planos de suporte contínuo e manutenção preventiva que cobrem atualizações de segurança, hospedagem monitorada, otimização e evolução do sistema.'
  },
  {
    id: 'faq-3',
    question: 'Eu terei propriedade sobre o código-fonte desenvolvido?',
    answer: 'Sim, absolutamente! Uma vez finalizado o projeto e quitado o contrato, 100% da propriedade intelectual, do design e do código-fonte é transferido legalmente para a sua empresa. O código é seu para sempre.'
  },
  {
    id: 'faq-4',
    question: 'Vocês realizam integrações com sistemas legados ou de terceiros?',
    answer: 'Com certeza. Temos vasta experiência em criar APIs customizadas e integrar sistemas web a CRMs, ERPs proprietários, sistemas de envio de e-mails, WhatsApp, calendários e muito mais.'
  },
  {
    id: 'faq-5',
    question: 'Qual é o papel da NexCodex na definição de design e conteúdo?',
    answer: 'Nós cuidamos de toda a jornada. Nossa equipe cria a arquitetura de informação, desenha as interfaces (UI/UX) sob medida no Figma e desenvolve o site. No entanto, trabalhamos em estreita colaboração com as suas diretrizes de marca para garantir o alinhamento perfeito.'
  }
];

export const TECH_STACK = [
  { name: 'React', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', category: 'Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind', category: 'Styling', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Supabase', category: 'Backend/DB', logo: 'https://raw.githubusercontent.com/supabase/supabase/master/web/static/favicon.ico' },
  { name: 'PostgreSQL', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', category: 'Devops', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'GitHub', category: 'VCS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Vercel', category: 'Hosting', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Cloudflare', category: 'Security/DNS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
  { name: 'OpenAI', category: 'AI', logo: 'https://static.thenounproject.com/png/5512217-200.png' },
  { name: 'Google Gemini', category: 'AI', logo: 'https://swimburger.net/media/pphda5up/gemini.png' }
];
