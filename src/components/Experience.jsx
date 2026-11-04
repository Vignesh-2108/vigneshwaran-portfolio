import { Briefcase, Code2, Network, Database, ShieldCheck } from 'lucide-react';
import { Reveal, SectionHeader } from './hooks.jsx';

const groups = [
  {
    icon: Code2,
    title: 'SuiteScript development',
    items: [
      'Developed and maintained NetSuite customizations using SuiteScript 2.x and 2.1.',
      'Built Client Scripts, User Event Scripts, Scheduled Scripts, Map/Reduce Scripts, Suitelets, and RESTlets.',
      'Developed dynamic Suitelet interfaces with filters, progress indicators, and controlled transaction processing.',
      'Worked with SuiteQL, Saved Searches, SuiteBuilder, SuiteFlow, and SuiteAnalytics.',
      'Developed Advanced PDF and HTML templates.',
    ],
  },
  {
    icon: Network,
    title: 'Integrations & architecture',
    items: [
      'Designed and implemented third-party integrations using REST APIs, webhooks, and Azure middleware.',
      'Implemented create-versus-update logic, duplicate detection, field mapping, and data transformation.',
      'Worked with JSON, XML, OAuth 2.0, API authentication, logging, and exception handling.',
      'Designed technical architecture and data flows for multi-system integrations.',
    ],
  },
  {
    icon: Database,
    title: 'Data migration & performance',
    items: [
      'Performed large-scale historical data migration, including 12 years of historical business data.',
      'Optimized scripts to handle governance limitations and high-volume processing.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Quality & support',
    items: [
      'Conducted unit, integration, regression, and end-to-end testing.',
      'Provided production support, root-cause analysis, and technical documentation.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader eyebrow="03 · Experience" title={<span id="experience-title">Professional Experience</span>} />

        <div className="timeline">
          <div className="timeline__rail" aria-hidden="true">
            <span className="timeline__node"><Briefcase size={16} /></span>
          </div>

          <Reveal as="article" className="exp-card">
            <header className="exp-card__head">
              <div>
                <h3>NetSuite Technical Consultant</h3>
                <p className="exp-card__company">Zenardy</p>
              </div>
              <span className="pill mono">2023 – Present</span>
            </header>

            <div className="exp-card__groups">
              {groups.map(({ icon: Icon, title, items }) => (
                <div key={title} className="exp-group">
                  <h4>
                    <Icon size={16} aria-hidden="true" /> {title}
                  </h4>
                  <ul className="ticks">
                    {items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
