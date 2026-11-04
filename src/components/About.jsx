import { Clock, Database, Network, Code2, Workflow } from 'lucide-react';
import { Reveal, SectionHeader } from './hooks.jsx';

const highlights = [
  { icon: Clock, title: 'Nearly 3 years', text: 'Hands-on NetSuite technical consulting experience at Zenardy.' },
  { icon: Database, title: '12 years of data', text: 'Historical business data migrated into NetSuite.' },
  { icon: Network, title: 'Multiple integrations', text: 'Third-party systems connected across retail, finance and legal tech.' },
  { icon: Code2, title: 'SuiteScript 2.1 & REST', text: 'Scripts, RESTlets, webhooks and REST API integrations.' },
  { icon: Workflow, title: 'Enterprise automation', text: 'Custom ERP solutions that remove manual steps.' },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader eyebrow="01 · About" title={<span id="about-title">About Me</span>} />
        <div className="about">
          <Reveal className="about__text">
            <p>
              I am a NetSuite Technical Consultant with nearly 3 years of professional experience working on enterprise
              ERP implementations, customizations, integrations, and automation solutions.
            </p>
            <p>
              Throughout my experience at Zenardy, I have worked on multiple projects across retail, financial services,
              legal technology, and business operations.
            </p>
            <p>
              My expertise includes developing SuiteScript 2.x solutions, designing integration workflows, implementing
              REST API and webhook-based integrations, optimizing script governance, and handling large-scale data
              migration.
            </p>
            <p>
              I have also contributed to technical architecture decisions for multi-system implementations, defining data
              flows, mapping strategies, integration patterns, and error-handling mechanisms.
            </p>
            <p>
              One of my significant experiences involved migrating <strong>12 years of historical business data</strong>{' '}
              into NetSuite. I enjoy solving complex technical challenges and building reliable solutions that simplify
              business operations.
            </p>
          </Reveal>

          <ul className="about__cards">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} className="about-card" delay={i * 70}>
                <span className="icon-tile" aria-hidden="true"><Icon size={20} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
