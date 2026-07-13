import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'nexcodex-cookie-consent';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so the banner slides in after page load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => setVisible(true);
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  // Sync checkbox state with current stored consent when banner opens
  useEffect(() => {
    if (visible) {
      const consentStr = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (consentStr) {
        try {
          const consent = JSON.parse(consentStr);
          setAnalytics(consent.analytics ?? true);
          setMarketing(consent.marketing ?? false);
        } catch (e) {
          // Keep default states
        }
      }
    }
  }, [visible]);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ essential: true, analytics: true, marketing: true, accepted: true }));
    setVisible(false);
    setShowCustomizer(false);
  };

  const handleRejectOptional = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ essential: true, analytics: false, marketing: false, accepted: true }));
    setVisible(false);
    setShowCustomizer(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ essential: true, analytics, marketing, accepted: true }));
    setVisible(false);
    setShowCustomizer(false);
  };

  const handleDismiss = () => {
    setVisible(false);
    setShowCustomizer(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl border border-light-border/50 rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8">
        <div className="flex items-start gap-4">
          {/* Cookie Icon */}
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Cookie size={20} className="text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-sans font-bold text-sm text-text-dark mb-1">
                Preferências de Cookies
              </h3>
              <button
                onClick={handleDismiss}
                className="p-1 rounded-lg hover:bg-light-card text-text-light hover:text-text-dark transition-colors shrink-0"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>
            </div>

            {showCustomizer ? (
              <div className="mt-4 flex flex-col gap-4">
                <p className="font-sans text-[11px] text-text-light leading-relaxed">
                  Defina suas preferências de privacidade. Cookies necessários são essenciais para navegar no site.
                </p>
                <div className="flex flex-col gap-2.5">
                  {/* Essential */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-light-card border border-light-border/40">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="mt-0.5 h-4 w-4 rounded border-light-border text-primary focus:ring-primary accent-primary"
                    />
                    <div>
                      <span className="font-sans font-bold text-xs text-text-dark block">Cookies Necessários (Obrigatório)</span>
                      <span className="font-sans text-[10px] text-text-light leading-normal">Essenciais para o funcionamento básico e segurança do site.</span>
                    </div>
                  </div>

                  {/* Analytics */}
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-light-card border border-light-border/40 cursor-pointer hover:border-primary/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-light-border text-primary focus:ring-primary accent-primary cursor-pointer"
                    />
                    <div>
                      <span className="font-sans font-bold text-xs text-text-dark block cursor-pointer">Cookies Analíticos</span>
                      <span className="font-sans text-[10px] text-text-light leading-normal">Coletam dados anônimos para nos ajudar a entender como melhorar o site.</span>
                    </div>
                  </label>

                  {/* Marketing */}
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-light-card border border-light-border/40 cursor-pointer hover:border-primary/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-light-border text-primary focus:ring-primary accent-primary cursor-pointer"
                    />
                    <div>
                      <span className="font-sans font-bold text-xs text-text-dark block cursor-pointer">Cookies de Marketing</span>
                      <span className="font-sans text-[10px] text-text-light leading-normal">Utilizados para oferecer campanhas e mensagens mais relevantes.</span>
                    </div>
                  </label>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <button
                    onClick={handleSaveCustom}
                    className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    Salvar Preferências
                  </button>
                  <button
                    onClick={() => setShowCustomizer(false)}
                    className="px-5 py-2 rounded-xl bg-light-card border border-light-border/50 text-text-dark text-xs font-bold hover:border-primary/30 transition-colors"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="font-sans text-xs text-text-light leading-relaxed mb-4">
                  Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para melhorar sua experiência.
                  Ao clicar em "Aceitar Todos", você concorda com o uso de todos os cookies. Leia nossa{' '}
                  <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    Aceitar Todos
                  </button>
                  <button
                    onClick={handleRejectOptional}
                    className="px-5 py-2 rounded-xl bg-light-card border border-light-border/50 text-text-dark text-xs font-bold hover:border-primary/30 transition-colors"
                  >
                    Apenas Essenciais
                  </button>
                  <button
                    onClick={() => setShowCustomizer(true)}
                    className="px-5 py-2 rounded-xl bg-white border border-light-border/50 text-text-dark text-xs font-bold hover:border-primary/30 transition-colors"
                  >
                    Personalizar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const resetCookieConsent = () => {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
};

export default CookieBanner;
