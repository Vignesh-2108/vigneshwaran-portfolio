import { useId, useMemo, useState } from 'react';
import { ArrowRight, ArrowLeftRight, ChevronDown, Server, Cloud, Shuffle } from 'lucide-react';
import { projects, projectFilters } from '../data/projects.js';
import { Reveal, SectionHeader } from './hooks.jsx';

const kindIcon = { ext: Cloud, mid: Shuffle, ns: Server };

function FlowDiagram({ flow, bidirectional }) {
  const Arrow = bidirectional ? ArrowLeftRight : ArrowRight;
  const label = flow.map((n) => n.label).join(bidirectional ? ' ⇄ ' : ' → ');
  return (
    <div className="flow" role="img" aria-label={`Data flow: ${label}`}>
      {flow.map((node, i) => {
        const Icon = kindIcon[node.kind] || Shuffle;
        return (
          <div className="flow__step" key={`${node.label}-${i}`}>
            <div className={`flow__node flow__node--${node.kind}`}>
              <Icon size={14} aria-hidden="true" />
              <span>{node.label}</span>
            </div>
            {i < flow.length - 1 && (
              <span className="flow__arrow" aria-hidden="true">
                <Arrow size={14} />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ProjectCard({ p, index }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <Reveal as="article" className={`project-card ${p.featured ? 'project-card--featured' : ''}`} delay={(index % 2) * 80}>
      <div className="project-card__top">
        <span className="project-card__num mono">{String(index + 1).padStart(2, '0')}</span>
        <p className="project-card__cat mono">{p.category}</p>
      </div>
      <h3>{p.name}</h3>

      <FlowDiagram flow={p.flow} bidirectional={p.bidirectional} />

      <dl className="project-card__ps">
        <div>
          <dt>Business problem</dt>
          <dd>{p.problem}</dd>
        </div>
        <div>
          <dt>Technical solution</dt>
          <dd>{p.solution}</dd>
        </div>
      </dl>

      <button className="project-card__toggle" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
        My contribution <span className="mono">({p.contributions.length})</span>
        <ChevronDown size={16} aria-hidden="true" className={open ? 'rot' : ''} />
      </button>
      <div id={panelId} className={`project-card__panel ${open ? 'is-open' : ''}`} hidden={!open}>
        <ul className="ticks">
          {p.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <ul className="chips chips--sm" aria-label="Technologies used">
        {p.tech.map((t) => (
          <li key={t} className="chip">{t}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.filter === filter)), [filter]);

  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          eyebrow="04 · Projects"
          title={<span id="projects-title">Featured Projects & Integrations</span>}
          intro="Integrations and migrations I've built or contributed to. Each card shows the data flow, the problem it addressed and my part in it. Client names and internal details are left out."
        />

        <div className="filters" role="toolbar" aria-label="Filter projects by category">
          {projectFilters.map((f) => {
            const count = f === 'All' ? projects.length : projects.filter((p) => p.filter === f).length;
            return (
              <button key={f} className={`filter ${filter === f ? 'is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f} <span className="mono">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-grid" aria-live="polite">
          {visible.map((p) => (
            <ProjectCard key={p.name} p={p} index={projects.indexOf(p)} />
          ))}
        </div>

        <p className="legend mono" aria-hidden="true">
          <span><i className="lg lg--ext" /> External system</span>
          <span><i className="lg lg--mid" /> Middleware / transport</span>
          <span><i className="lg lg--ns" /> NetSuite</span>
        </p>
      </div>
    </section>
  );
}
