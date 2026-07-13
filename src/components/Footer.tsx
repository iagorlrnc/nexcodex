import { Link } from 'react-router-dom';
import Logo from './Logo';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenCookieSettings = () => {
    localStorage.removeItem('nexcodex-cookie-consent');
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  return (
    <footer className="relative bg-gradient-to-b from-light-card to-violet-50/30 border-t border-light-border/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="flex flex-col gap-5">
          <Link to="/">
            <Logo />
          </Link>
          <p className="font-sans text-sm text-text-light leading-relaxed">
            Especialistas em transformar ideias complexas em soluções digitais de alta performance. Sites, sistemas e segurança sob medida.
          </p>
          <div className="flex items-center gap-3 text-text-light">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-light-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300 shadow-sm" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-light-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300 shadow-sm" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white border border-light-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300 shadow-sm" aria-label="Twitter / X">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-text-dark mb-5">Navegação</h4>
          <ul className="flex flex-col gap-3 font-sans text-sm text-text-light">
            <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfólio</Link></li>
            <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-text-dark mb-5">Serviços</h4>
          <ul className="flex flex-col gap-3 font-sans text-sm text-text-light">
            <li><Link to="/servicos" className="hover:text-primary transition-colors">Desenvolvimento de Sites</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition-colors">Sistemas Web sob Medida</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition-colors">Segurança de Dados</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition-colors">Consultoria Tecnológica</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 font-sans text-sm text-text-light">
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-text-dark mb-1">Contato</h4>
          <div className="flex items-start gap-3">
            <Mail size={16} className="text-primary mt-0.5 shrink-0" />
            <a href="mailto:contato@nexcodex.com" className="hover:text-primary transition-colors break-all">contato@nexcodex.com</a>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={16} className="text-primary mt-0.5 shrink-0" />
            <a href="tel:+5511999999999" className="hover:text-primary transition-colors">+55 (11) 99999-9999</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
            <span>São Paulo, SP — Atendimento Remoto</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-light-border/40 relative flex items-center justify-center">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <p className="font-sans text-xs text-text-light text-center">
            &copy; {currentYear} NexCodex. Todos os direitos reservados.
          </p>
          <span className="text-light-border/60 hidden sm:inline">|</span>
          <Link to="/privacidade" className="font-sans text-xs text-text-light hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
          <span className="text-light-border/60 hidden sm:inline">|</span>
          <button
            onClick={handleOpenCookieSettings}
            className="font-sans text-xs text-text-light hover:text-primary transition-colors"
          >
            Preferências de Cookies
          </button>
        </div>
        <button
          onClick={handleScrollTop}
          className="group absolute left-6 lg:left-8 p-3 rounded-full bg-white hover:bg-primary hover:text-white text-primary transition-all duration-300 shadow-md border border-light-border/50 hover:border-transparent flex items-center justify-center shrink-0"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
