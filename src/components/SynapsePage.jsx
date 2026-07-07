import synapseLogo from '../../assets/synapse-logo.svg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  'Connects operational knowledge from services, repositories, pull requests, Jira issues, SharePoint pages, incidents, decisions, owners, dashboards, and team discussions.',
  'Builds a searchable engineering knowledge graph across people, teams, products, services, repositories, incidents, decisions, and tools.',
  'Turns assigned Jira tickets into implementation plans, asks clarifying questions when needed, and waits for human approval before changing code.',
  'Generates code in an isolated sandboxed workspace, runs tests and validation commands, then opens a GitHub pull request with an audit trail back to Jira.',
  'Supports onboarding, repeated-incident reduction, faster decisions, cross-team coordination, and trusted context for engineering work.',
];

const questions = [
  'Who owns this service?',
  'Why was this decision made?',
  'What broke last time, and what fixed it?',
  'What should I check before touching this system?',
  'Can this Jira ticket become a safe, reviewed pull request?',
  'Where are the dashboards, alerts, logs, and deploy steps?',
];

function PipelineDiagram() {
  const diagramRef = useRef(null);

  useEffect(() => {
    if (!diagramRef.current) return;
    const ctx = gsap.context(() => {
      const nodes = diagramRef.current.querySelectorAll('.flow-node');
      const arrows = diagramRef.current.querySelectorAll('.flow-arrow');
      const label = diagramRef.current.querySelector('.flow-label');

      gsap.set([...nodes, label], { opacity: 0, y: 16 });
      gsap.set(arrows, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: diagramRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.to('.flow-source', { opacity: 1, y: 0, stagger: 0.06, duration: 0.5 })
        .to('.flow-arrow-1', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-graph', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .to('.flow-arrow-2', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-query', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .to('.flow-arrow-3', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-agent', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .to('.flow-arrow-4', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-output', { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, '-=0.2')
        .to(label, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2');
    }, diagramRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={diagramRef}>
      <svg viewBox="0 0 960 330" className="w-full max-w-4xl mx-auto" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="synapseArrow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5" fill="rgba(255,255,255,0.25)" />
          </marker>
        </defs>

        {/* Row 1: Source nodes */}
        {['Jira', 'GitHub', 'SharePoint', 'Slack', 'Grafana'].map((src, i) => (
          <g key={src} className="flow-node flow-source">
            <rect x={40 + i * 184} y="8" width="140" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <text x={110 + i * 184} y="29" textAnchor="middle" className="fill-slate-400 font-mono text-[11px] tracking-wider">{src}</text>
          </g>
        ))}

        {/* Down arrows from sources to graph */}
        {[110, 294, 478, 662, 846].map((x, i) => (
          <line key={`a1-${i}`} x1={x} y1="40" x2={x} y2="78" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#synapseArrow)" className="flow-arrow flow-arrow-1" />
        ))}

        {/* Knowledge Graph */}
        <g className="flow-node flow-graph">
          <rect x="340" y="78" width="280" height="52" rx="10" fill="rgba(56,189,248,0.05)" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.25" />
          <text x="480" y="101" textAnchor="middle" className="fill-sky-400 font-mono text-[12px] font-bold tracking-[0.25em]">KNOWLEDGE GRAPH</text>
          <text x="480" y="118" textAnchor="middle" className="fill-slate-500 font-mono text-[10px] tracking-wider">Neo4j · RBAC · Embeddings</text>
        </g>

        {/* Down arrow graph → query */}
        <line x1="480" y1="130" x2="480" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#synapseArrow)" className="flow-arrow flow-arrow-2" />

        {/* Query */}
        <g className="flow-node flow-query">
          <rect x="340" y="150" width="280" height="42" rx="10" fill="rgba(250,204,21,0.04)" stroke="rgba(250,204,21,0.3)" strokeWidth="1" />
          <text x="480" y="171" textAnchor="middle" className="fill-amber-400 font-mono text-[11px] font-bold tracking-[0.2em]">QUERY</text>
          <text x="480" y="187" textAnchor="middle" className="fill-slate-500 font-mono text-[10px] tracking-wider">Project context · Owners · Incidents · Decisions</text>
        </g>

        {/* Down arrow query → agent */}
        <line x1="480" y1="192" x2="480" y2="214" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#synapseArrow)" className="flow-arrow flow-arrow-3" />

        {/* Agent */}
        <g className="flow-node flow-agent">
          <rect x="340" y="214" width="280" height="42" rx="10" fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.35)" strokeWidth="1" />
          <text x="480" y="238" textAnchor="middle" className="fill-purple-400 font-mono text-[12px] font-bold tracking-[0.25em]">TICKET-TO-PR AGENT</text>
        </g>

        {/* Branch arrows agent → outputs */}
        <line x1="480" y1="256" x2="320" y2="278" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#synapseArrow)" className="flow-arrow flow-arrow-4" />
        <line x1="480" y1="256" x2="640" y2="278" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#synapseArrow)" className="flow-arrow flow-arrow-4" />

        {/* Output: Sandbox */}
        <g className="flow-node flow-output">
          <rect x="200" y="278" width="240" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="320" y="299" textAnchor="middle" className="fill-slate-400 font-mono text-[11px] tracking-wider">Sandbox &amp; Tests</text>
        </g>

        {/* Output: PR */}
        <g className="flow-node flow-output">
          <rect x="520" y="278" width="240" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="640" y="299" textAnchor="middle" className="fill-slate-400 font-mono text-[11px] tracking-wider">GitHub Pull Request</text>
        </g>
      </svg>
      <p className="flow-label text-center mt-8 text-sm text-slate-500 font-mono tracking-wider">
        Sources &rarr; Graph &rarr; Query &rarr; Agent &rarr; Sandbox &rarr; PR
      </p>
    </div>
  );
}

export default function SynapsePage() {
  return (
    <main id="main-content" className="min-h-screen pt-32 pb-24">
      <section className="section-container">
        <a href="/" className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 hover:text-white transition-colors">
          Back to RetrievalLabs.ai
        </a>

        <div className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-6 font-semibold">
              // Product
            </p>
            <h1 className="text-7xl sm:text-9xl mb-8">
              Synapse
            </h1>
            <p className="text-2xl text-slate-300 font-sans leading-relaxed max-w-3xl">
              Synapse is an AI organizational memory platform and ticket-to-PR coding agent for engineering teams. It turns fragmented operational evidence into a searchable knowledge graph, then uses that context to convert approved Jira tickets into sandbox-tested GitHub pull requests.
            </p>
          </div>

          <div className="card-monolith">
            <div className="rounded-xl bg-white p-6">
              <img src={synapseLogo} alt="Synapse logo" className="w-full h-auto" />
            </div>
            <div className="mt-8">
              <span className="font-mono text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit text-slate-400">
                MVP Stage
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <section className="card-monolith">
            <h2 className="text-4xl mb-8">What it does</h2>
            <div className="v-stack gap-6">
              {capabilities.map((item) => (
                <p key={item} className="text-lg text-slate-400 font-sans leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="card-monolith">
            <h2 className="text-4xl mb-8">Questions it answers</h2>
            <div className="v-stack gap-5">
              {questions.map((question) => (
                <div key={question} className="border-t border-white/10 pt-5">
                  <p className="text-lg text-slate-300 font-sans">{question}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// How it works</p>
            <h2 className="text-4xl sm:text-5xl">From fragmented data to shipped code</h2>
          </div>

          <PipelineDiagram />
        </section>

        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// Early Access</p>
            <h2 className="text-4xl sm:text-5xl">Get early access</h2>
            <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              Join our early access program. Fill out the form and we'll get you set up.
            </p>
          </div>

          <div className="max-w-3xl mx-auto card-monolith">
            <iframe
              src="https://docs.google.com/forms/d/1pv0jLUb9-S2M4Hbv3_DHvozd9790LcC5cjRm7LDdMzk/viewform?embedded=true"
              className="w-full min-h-[800px] border-0"
              title="Synapse Early Access Form"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </section>
    </main>
  );
}
