import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    document.getElementById('hero-title')?.focus?.();
  };

  return (
    <button className={`to-top ${show ? 'is-visible' : ''}`} onClick={toTop} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <ArrowUp size={18} />
    </button>
  );
}
