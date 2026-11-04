import { Award, CalendarDays, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications.js';
import { Reveal, SectionHeader } from './hooks.jsx';

export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt" aria-labelledby="cert-title">
      <div className="container">
        <SectionHeader eyebrow="06 · Credentials" title={<span id="cert-title">Certifications</span>} intro="Oracle and NetSuite certifications." />
        <ul className="certs-grid">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.name} className="cert-card" delay={(i % 3) * 70}>
              <div className="cert-card__seal" aria-hidden="true">
                <Award size={22} />
              </div>
              <p className="cert-card__issuer mono">{c.issuer}</p>
              <h3>{c.name}</h3>
              <p className="cert-card__date">
                <CalendarDays size={14} aria-hidden="true" />
                {c.validUntil ? `${c.date} – ${c.validUntil}` : c.date}
              </p>
              {c.verifyUrl && (
                <a className="cert-card__verify" href={c.verifyUrl} target="_blank" rel="noopener noreferrer">
                  Verify credential <ExternalLink size={13} aria-hidden="true" />
                </a>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
