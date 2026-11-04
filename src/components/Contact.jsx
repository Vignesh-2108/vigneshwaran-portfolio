import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { site } from '../data/site.js';
import { Reveal } from './hooks.jsx';
import { LinkedInIcon, GitHubIcon } from './icons.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const tel = site.phone.replace(/\s+/g, '');

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container">
        <Reveal className="contact__panel">
          <div className="contact__copy">
            <p className="eyebrow">08 · Contact</p>
            <h2 id="contact-title">Let's Build Something That Works Better.</h2>
            <p>
              I'm always interested in discussing NetSuite development, ERP customization, integration architecture, and
              challenging technical problems.
            </p>
            <p>
              If you're looking for someone who enjoys solving complex ERP challenges and building reliable integrations,
              let's connect.
            </p>
            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${site.email}`}>
                <Mail size={17} aria-hidden="true" /> Email Me
              </a>
              <a className="btn btn--ghost" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon size={16} /> LinkedIn Profile
              </a>
              {site.github && (
                <a className="btn btn--ghost" href={site.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon size={16} /> GitHub Profile
                </a>
              )}
            </div>
          </div>

          <ul className="contact__list">
            <li>
              <span className="icon-tile" aria-hidden="true"><Mail size={18} /></span>
              <div>
                <span className="contact__label mono">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <button className="icon-btn" onClick={copyEmail} aria-label={copied ? 'Email copied' : 'Copy email address'}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </li>
            <li>
              <span className="icon-tile" aria-hidden="true"><Phone size={18} /></span>
              <div>
                <span className="contact__label mono">Phone</span>
                <a href={`tel:${tel}`}>{site.phone}</a>
              </div>
            </li>
            <li>
              <span className="icon-tile" aria-hidden="true"><MapPin size={18} /></span>
              <div>
                <span className="contact__label mono">Location</span>
                <span>{site.location}</span>
              </div>
            </li>
            <li>
              <span className="icon-tile" aria-hidden="true"><LinkedInIcon size={17} /></span>
              <div>
                <span className="contact__label mono">LinkedIn</span>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  {site.linkedin.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </li>
          </ul>
          <p className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</p>
        </Reveal>
      </div>
    </section>
  );
}
