import { useEffect } from 'react';

/**
 * Activates .reveal elements on the page.
 * Works both for elements already in viewport (immediate) and those
 * that need scrolling (IntersectionObserver).
 */
export default function useReveal() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const activate = (el) => el.classList.add('visible');

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) activate(e.target); }),
      { threshold: 0.08 }
    );

    // Short delay to let React finish rendering the DOM
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal');
      els.forEach((el) => {
        // If already in viewport, activate immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          activate(el);
        } else {
          observer.observe(el);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
