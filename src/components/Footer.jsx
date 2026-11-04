import { Mail } from 'lucide-react';
import { navLinks, site } from '../data/site.js';
import { LinkedInIcon, GitHubIcon } from './icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{site.name}</p>
          <p className="footer__title">{site.title}</p>
          <p className="footer__line">{site.footerLine}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer__nav">
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <ul className="footer__social">
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <LinkedInIcon size={18} />
            </a>
          </li>
          {site.github && (
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <GitHubIcon size={18} />
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${site.email}`} aria-label="Send an email">
              <Mail size={18} />
            </a>
          </li>
        </ul>
      </div>
      <div className="container footer__bottom">
        <p>© {year} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
