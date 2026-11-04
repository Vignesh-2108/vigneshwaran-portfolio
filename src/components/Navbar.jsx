import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, site } from '../data/site.js';
import { useActiveSection } from './hooks.jsx';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={`${site.name}, back to top`}>
          <span className="nav__logo" aria-hidden="true">VP</span>
          <span className="nav__name">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="nav__desktop">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} aria-current={active === l.id ? 'true' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--ghost btn--sm nav__resume" href={site.resume} download>
          <Download size={15} aria-hidden="true" /> Resume
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav id="mobile-menu" aria-label="Mobile" className={`nav__mobile ${open ? 'is-open' : ''}`} hidden={!open}>
        <ul>
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className={active === l.id ? 'is-active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.resume} download onClick={() => setOpen(false)} className="nav__mobile-resume">
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
