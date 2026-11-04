import { Landmark, Scale, MapPin, Ship, BookOpen, Repeat, Wallet, Package, FileSpreadsheet, Wrench } from 'lucide-react';
import { solutions } from '../data/solutions.js';
import { Reveal, SectionHeader } from './hooks.jsx';

const icons = {
  landmark: Landmark,
  scale: Scale,
  'map-pin': MapPin,
  ship: Ship,
  'book-open': BookOpen,
  repeat: Repeat,
  wallet: Wallet,
  package: Package,
  'file-spreadsheet': FileSpreadsheet,
};

export default function Solutions() {
  return (
    <section id="solutions" className="section" aria-labelledby="solutions-title">
      <div className="container">
        <SectionHeader
          eyebrow="05 · Solutions"
          title={<span id="solutions-title">Custom Solutions & ERP Automation</span>}
          intro="Custom NetSuite functionality built around specific business processes."
        />
        <ul className="solutions-grid">
          {solutions.map((s, i) => {
            const Icon = icons[s.icon] || Wrench;
            return (
              <Reveal as="li" key={s.name} className="solution-card" delay={(i % 3) * 70} tabIndex={0}>
                <span className="icon-tile icon-tile--teal" aria-hidden="true"><Icon size={19} /></span>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
                <ul className="solution-card__tags">
                  {s.tags.map((t) => (
                    <li key={t} className="mono">{t}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
