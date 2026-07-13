import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useSmoothScroll = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Dynamic scroll intercept for anchors starting with #
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        // Only trigger smooth scroll for hashes on the current page
        const targetPath = anchor.pathname;
        const currentPath = window.location.pathname;
        
        if (targetPath === currentPath || targetPath === '') {
          e.preventDefault();
          const targetEl = document.querySelector(anchor.hash);
          if (targetEl) {
            lenis.scrollTo(targetEl as HTMLElement, {
              offset: -80, // navbar height offset
              duration: 1.2
            });
            
            // Update hash history without jump
            window.history.pushState(null, '', anchor.hash);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      if ((window as any).lenis === lenis) {
        (window as any).lenis = undefined;
      }
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
};

export default useSmoothScroll;
