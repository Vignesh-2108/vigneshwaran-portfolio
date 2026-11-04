import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { site } from '../data/site.js';

const highlights = ['NetSuite Technical Consultant', 'SuiteScript 2.1 Developer', 'ERP Integration Specialist', 'Automation & Data Migration'];
const floating = ['SuiteQL', 'Map/Reduce', 'RESTlet', 'Webhooks', 'OAuth 2.0'];

function CodeWindow() {
  return (
    <div className="code-window" role="img" aria-label="Illustrative SuiteScript 2.1 Map/Reduce snippet showing a create-versus-update sync">
      <div className="code-window__bar">
        <span className="dot dot--r" />
        <span className="dot dot--y" />
        <span className="dot dot--g" />
        <span className="code-window__file">sync_records.mr.js</span>
      </div>
      <pre className="code-window__body" aria-hidden="true">
        <code>
          <span className="c-com">{'/**\n * @NApiVersion 2.1\n * @NScriptType MapReduceScript\n */'}</span>
          {'\n'}
          <span className="c-key">define</span>([<span className="c-str">'N/record'</span>, <span className="c-str">'N/search'</span>, <span className="c-str">'N/https'</span>], (record, search, https) =&gt; {'{'}
          {'\n\n  '}
          <span className="c-key">const</span> <span className="c-fn">map</span> = (ctx) =&gt; {'{'}
          {'\n    '}
          <span className="c-key">const</span> payload = JSON.<span className="c-fn">parse</span>(ctx.value);
          {'\n    '}
          <span className="c-key">const</span> id = <span className="c-fn">findExisting</span>(payload.externalId);
          {'\n\n    '}
          <span className="c-com">{'// create-vs-update keeps both systems in sync'}</span>
          {'\n    '}
          <span className="c-key">const</span> rec = id
          {'\n      ? '}record.<span className="c-fn">load</span>({'{'} type, id {'}'})
          {'\n      : '}record.<span className="c-fn">create</span>({'{'} type {'}'});
          {'\n\n    '}
          <span className="c-fn">applyMapping</span>(rec, payload);
          {'\n    '}rec.<span className="c-fn">save</span>();
          {'\n  };\n\n  '}
          <span className="c-key">return</span> {'{'} getInputData, map, summarize {'}'};
          {'\n});'}
        </code>
      </pre>
      <div className="code-window__status">
        <span className="status-dot" aria-hidden="true" /> governance-aware · error-handled · logged
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--a" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          {site.availability.show && (
            <p className="availability">
              <span className="status-dot" aria-hidden="true" /> {site.availability.label}
            </p>
          )}
          <p className="eyebrow mono">
            <MapPin size={14} aria-hidden="true" /> {site.location}
          </p>
          <h1 id="hero-title" tabIndex={-1}>
            Building Intelligent Solutions with <span className="grad">Oracle NetSuite.</span>
          </h1>
          <p className="hero__lead">
            I'm {site.name}, a NetSuite Technical Consultant with nearly 3 years of hands-on experience developing
            enterprise ERP customizations, third-party integrations, business process automation, and large-scale data
            migration solutions.
          </p>
          <p className="hero__sub">
            I specialize in transforming complex business requirements into reliable, scalable NetSuite solutions using
            SuiteScript, REST APIs, SuiteQL, and integration technologies.
          </p>

          <ul className="hero__highlights" aria-label="Focus areas">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              Explore My Work <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={site.resume} download className="btn btn--ghost">
              <Download size={17} aria-hidden="true" /> Download Resume
            </a>
            <a href="#contact" className="btn btn--text">
              <Mail size={17} aria-hidden="true" /> Contact Me
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <CodeWindow />
          <ul className="floating-tags" aria-hidden="true">
            {floating.map((t, i) => (
              <li key={t} className={`floating-tag floating-tag--${i + 1}`}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
