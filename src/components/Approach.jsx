import { Search, PenTool, Code2, FlaskConical, Rocket } from 'lucide-react';
import { Reveal, SectionHeader } from './hooks.jsx';

const steps = [
  { icon: Search, title: 'Understand the Business Requirement', text: 'Analyze business processes and technical requirements.' },
  { icon: PenTool, title: 'Design the Solution', text: 'Define integration architecture, data flow, mappings, and processing logic.' },
  { icon: Code2, title: 'Develop and Customize', text: 'Implement SuiteScript solutions and API integrations.' },
  { icon: FlaskConical, title: 'Test and Validate', text: 'Perform functional, integration, regression, and end-to-end testing.' },
  { icon: Rocket, title: 'Deploy and Support', text: 'Handle deployment, production monitoring, troubleshooting, and optimization.' },
];

export default function Approach() {
  return (
    <section id="approach" className="section" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeader eyebrow="07 · Approach" title={<span id="approach-title">How I Approach Technical Challenges</span>} />
        <ol className="approach">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} className="approach__step" delay={i * 90}>
              <div className="approach__marker">
                <span className="approach__icon" aria-hidden="true"><Icon size={20} /></span>
                <span className="approach__num mono">0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
