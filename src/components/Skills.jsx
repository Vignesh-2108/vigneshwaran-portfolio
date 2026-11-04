import { Cloud, Code2, Boxes, Plug, Network, Terminal, Compass } from 'lucide-react';
import { skillGroups } from '../data/skills.js';
import { Reveal, SectionHeader } from './hooks.jsx';

const icons = { cloud: Cloud, code: Code2, boxes: Boxes, plug: Plug, network: Network, terminal: Terminal, compass: Compass };

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          eyebrow="02 · Skills"
          title={<span id="skills-title">Technical Skills</span>}
          intro="The SuiteCloud platform, script types, modules and integration technologies I work with day to day."
        />
        <div className="skills-grid">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon] || Code2;
            return (
              <Reveal key={g.title} className={`skill-card ${g.wide ? 'skill-card--wide' : ''}`} delay={(i % 3) * 70}>
                <div className="skill-card__head">
                  <span className="icon-tile" aria-hidden="true"><Icon size={18} /></span>
                  <h3>{g.title}</h3>
                  <span className="skill-card__count mono">{String(g.items.length).padStart(2, '0')}</span>
                </div>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li key={s} className={`chip ${g.mono ? 'mono' : ''}`}>{s}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
