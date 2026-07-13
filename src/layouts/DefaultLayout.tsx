import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import WhatsappButton from '../components/WhatsappButton';
import useSmoothScroll from '../hooks/useSmoothScroll';

export const DefaultLayout: React.FC = () => {
  // Activate Lenis smooth scroll globally for pages under this layout
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-dark antialiased">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Cookies Consent Banner */}
      <CookieBanner />

      {/* Floating Whatsapp Button */}
      <WhatsappButton />
    </div>
  );
};

export default DefaultLayout;
