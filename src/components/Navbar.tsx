import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [showOnHome, setShowOnHome] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar in homepage hero, reveal when scrolled past 150px
      if (window.scrollY > 150) {
        setShowOnHome(true);
      } else {
        setShowOnHome(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and pause Lenis when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
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
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to desktop sizes to avoid layout bugs
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync scroll states on route change
  useEffect(() => {
    setIsScrolled(window.scrollY > 20);
    setShowOnHome(window.scrollY > 150);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', to: '/' },
    { name: 'Sobre', to: '/sobre' },
    { name: 'Serviços', to: '/servicos' },
    { name: 'Portfólio', to: '/portfolio' },
    { name: 'Contato', to: '/contato' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isNavbarVisible = !isHomePage || showOnHome || isMobileMenuOpen;

  // Static glass styling for subpages, dynamic transparent/glass styling for home page
  const navbarBgClass = (!isHomePage || isScrolled)
    ? 'glass py-3 shadow-sm border-b border-light-border/40'
    : 'bg-transparent py-5';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isNavbarVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        } ${navbarBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" aria-label="NexCodex Home">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `font-sans font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-primary after:w-full'
                      : 'text-text-dark/80 hover:text-primary after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Budget CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-primary/20 hover:-translate-y-0.5 group"
            >
              Solicitar orçamento
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <NavLink
                    to={link.to}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `font-sans font-bold text-2xl transition-colors ${
                        isActive ? 'text-primary' : 'text-text-dark hover:text-primary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <Link
                to="/contato"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-base font-semibold transition-all duration-300"
              >
                Solicitar orçamento
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
