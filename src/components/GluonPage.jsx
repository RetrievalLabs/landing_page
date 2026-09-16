import gluonLogo from '../../assets/gluon-logo.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  'Understands the full legacy codebase — build structure, dependencies, plugins, and module layout — before touching a single line of code.',
  'Extracts a CodeModel of classes, methods, annotations, entry points, and method calls, then resolves them through JDTLS for high-confidence symbol resolution.',
  'Scores methods by business relevance — branches, persistence calls, business terms, annotations, exceptions, state changes — and prioritizes the ones that matter.',
  'Builds a Business Knowledge Graph of rules, workflows, invariants, state transitions, side effects, and business concepts from high-priority methods.',
  'Generates characterization scenarios that capture behavioral contracts, then implements them as executable tests that verify behavior is preserved after migration.',
  'Migrates source through an agentic pipeline — configuration files, ORM units, models, entrypoints, business methods, and supporting code — with per-unit verification and automatic repair loops.',
];

const concepts = [
  {
    title: 'Business Knowledge Graph',
    desc: 'Graph-structured representation of business rules, workflows, invariants, state transitions, side effects, and concepts — extracted by LLM agents from high-priority methods with source evidence.',
  },
  {
    title: 'Characterization Scenarios',
    desc: 'Abstract behavioral contracts that capture what the legacy system does, not just how. Implemented as executable tests to verify behavior is preserved after migration.',
  },
  {
    title: 'Migration Units',
    desc: 'The atomic units of migration — configuration files, ORM units, models, entrypoints, business methods, and supporting code. Each unit gets bounded context and independent verification.',
  },
  {
    title: 'Agentic Repair Loop',
    desc: 'When a CLI command fails, the Harness gives the error and context to an agent that diagnoses and repairs the issue, then retries — repeating until the command succeeds or the stage completes.',
  },
];

const architecture = [
  {
    title: 'Gluon CLI',
    tag: 'Rust',
    desc: 'The analysis and knowledge-extraction engine. Parses build files, runs compatibility analysis against migration rules, extracts the CodeModel, resolves symbols through JDTLS, scores business relevance, extracts test models, builds the business knowledge graph, and generates characterization scenarios.',
  },
  {
    title: 'Harness',
    tag: 'Python',
    desc: 'The migration orchestrator. Clones the repository, runs CLI stages, implements characterization tests, creates the target project, selects dependencies, builds the structure, migrates source through per-unit agent loops, and verifies the migrated runtime.',
  },
  {
    title: 'microVM',
    tag: 'Isolation',
    desc: 'Each migration runs in an isolated microVM with the source code, language runtime, language server, git, build tools, the Gluon CLI, and the Harness — providing a clean, reproducible migration environment.',
  },
  {
    title: 'Agent Skills',
    tag: 'Java Ecosystem',
    desc: 'Domain-specific knowledge for migration agents — Java best practices, build tool expertise, dependency selection, Spring Boot/MVC/Security, ORM/JPA, Jakarta EE, Lombok modernization, and testing with JUnit/Mockito.',
  },
];

const competitors = [
  {
    approach: 'Deterministic',
    players: 'Moderne / OpenRewrite',
    desc: 'Strong at predefined, recipe-based AST transformations — dependency upgrades, API replacements, pattern fixes. Fast and reliable for known, repeatable changes.',
  },
  {
    approach: 'Business-Aware',
    players: 'Gluon',
    desc: 'Adds business understanding and behavior preservation on top of deterministic analysis. Understands what the code does, not just how it looks — enabling migration of complex, business-critical systems.',
  },
];

const status = [
  { stage: 'Build Report', done: true },
  { stage: 'Compatibility Analysis', done: true },
  { stage: 'CodeModel Extraction', done: true },
  { stage: 'JDTLS Resolution', done: true },
  { stage: 'Business Scoring', done: true },
  { stage: 'TestModel Extraction', done: true },
  { stage: 'Business Knowledge Graph', done: true },
  { stage: 'Characterization Scenarios', done: true },
  { stage: 'Characterization Agent Loop', done: true },
  { stage: 'Dependency Selection', done: true },
  { stage: 'Build Structure', done: true },
  { stage: 'Source Migration', done: true },
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

      tl.to('.flow-repo', { opacity: 1, y: 0, duration: 0.5 })
        .to('.flow-arrow-1', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-cli', { opacity: 1, y: 0, duration: 0.5 }, '-=0.1')
        .to('.flow-arrow-2', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-analysis', { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.1')
        .to('.flow-arrow-3', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-kg', { opacity: 1, y: 0, duration: 0.5 }, '-=0.1')
        .to('.flow-arrow-4', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-harness', { opacity: 1, y: 0, duration: 0.5 }, '-=0.1')
        .to('.flow-arrow-5', { opacity: 1, duration: 0.3 }, '-=0.2')
        .to('.flow-output', { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, '-=0.1')
        .to(label, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2');
    }, diagramRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={diagramRef}>
      <svg viewBox="0 0 960 310" className="w-full max-w-4xl mx-auto" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="gluonArrow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5" fill="rgba(255,255,255,0.25)" />
          </marker>
        </defs>

        {/* Legacy Repository */}
        <g className="flow-node flow-repo">
          <rect x="340" y="8" width="280" height="42" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="480" y="34" textAnchor="middle" className="fill-slate-400 font-mono text-[12px] tracking-[0.15em]">LEGACY REPOSITORY</text>
        </g>

        {/* Arrow repo → CLI */}
        <line x1="480" y1="50" x2="480" y2="72" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#gluonArrow)" className="flow-arrow flow-arrow-1" />

        {/* Gluon CLI */}
        <g className="flow-node flow-cli">
          <rect x="340" y="72" width="280" height="42" rx="10" fill="rgba(56,189,248,0.05)" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.25" />
          <text x="480" y="98" textAnchor="middle" className="fill-sky-400 font-mono text-[12px] font-bold tracking-[0.25em]">GLUON CLI</text>
        </g>

        {/* Arrow CLI → analysis row */}
        <line x1="480" y1="114" x2="480" y2="136" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#gluonArrow)" className="flow-arrow flow-arrow-2" />

        {/* Analysis row: Build Report | Compatibility | CodeModel | Business Scoring */}
        {['Build Report', 'Compatibility', 'CodeModel', 'Business Scoring'].map((label, i) => (
          <g key={label} className="flow-node flow-analysis">
            <rect x={80 + i * 220} y="136" width="180" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <text x={170 + i * 220} y="159" textAnchor="middle" className="fill-slate-500 font-mono text-[10px] tracking-wider">{label}</text>
          </g>
        ))}

        {/* Arrows analysis → KG */}
        {[170, 390, 610, 830].map((x, i) => (
          <line key={`a3-${i}`} x1={x} y1="172" x2="480" y2="196" stroke="rgba(255,255,255,0.12)" strokeWidth="1" markerEnd="url(#gluonArrow)" className="flow-arrow flow-arrow-3" />
        ))}

        {/* Business Knowledge Graph */}
        <g className="flow-node flow-kg">
          <rect x="300" y="196" width="360" height="42" rx="10" fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.35)" strokeWidth="1" />
          <text x="480" y="222" textAnchor="middle" className="fill-purple-400 font-mono text-[11px] font-bold tracking-[0.2em]">BUSINESS KNOWLEDGE GRAPH</text>
        </g>

        {/* Arrow KG → Harness */}
        <line x1="480" y1="238" x2="480" y2="258" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#gluonArrow)" className="flow-arrow flow-arrow-4" />

        {/* Harness */}
        <g className="flow-node flow-harness">
          <rect x="340" y="258" width="280" height="42" rx="10" fill="rgba(56,189,248,0.05)" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.25" />
          <text x="480" y="284" textAnchor="middle" className="fill-sky-400 font-mono text-[12px] font-bold tracking-[0.25em]">HARNESS</text>
        </g>

        {/* Arrows harness → outputs */}
        <line x1="480" y1="300" x2="280" y2="300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#gluonArrow)" className="flow-arrow flow-arrow-5" />
        <line x1="480" y1="300" x2="680" y2="300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#gluonArrow)" className="flow-arrow flow-arrow-5" />

        {/* Output: Characterization Tests */}
        <g className="flow-node flow-output">
          <rect x="120" y="290" width="180" height="20" rx="6" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.25)" strokeWidth="1" />
          <text x="210" y="304" textAnchor="middle" className="fill-green-400 font-mono text-[9px] tracking-wider">Characterization Tests</text>
        </g>

        {/* Output: Migrated Code */}
        <g className="flow-node flow-output">
          <rect x="590" y="290" width="180" height="20" rx="6" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.25)" strokeWidth="1" />
          <text x="680" y="304" textAnchor="middle" className="fill-green-400 font-mono text-[9px] tracking-wider">Migrated Code</text>
        </g>
      </svg>
      <p className="flow-label text-center mt-8 text-sm text-slate-500 font-mono tracking-wider">
        Repository &rarr; CLI &rarr; Analysis &rarr; Knowledge Graph &rarr; Harness &rarr; Verified Output
      </p>
    </div>
  );
}

export default function GluonPage() {
  return (
    <main id="main-content" className="min-h-screen pt-32 pb-24">
      <section className="section-container">
        <a href="/" className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 hover:text-white transition-colors">
          Back to RetrievalLabs.ai
        </a>

        {/* Hero */}
        <div className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-6 font-semibold">
              // Product
            </p>
            <h1 className="text-7xl sm:text-9xl mb-8">
              Gluon
            </h1>
            <p className="text-2xl text-slate-300 font-sans leading-relaxed max-w-3xl">
              End-to-end agentic platform for modernizing legacy software. Gluon understands existing systems, plans migrations, transforms applications, verifies behavior is preserved, and iterates through the entire modernization lifecycle.
            </p>
          </div>

          <div className="card-monolith">
            <div className="rounded-xl bg-white p-6">
              <img src={gluonLogo} alt="Gluon logo" className="w-full h-auto" />
            </div>
            <div className="mt-8">
              <span className="font-mono text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit text-slate-400">
                Pilot Stage
              </span>
            </div>
          </div>
        </div>

        {/* Capabilities grid */}
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
            <h2 className="text-4xl mb-8">How it thinks</h2>
            <div className="v-stack gap-5">
              {concepts.map((concept) => (
                <div key={concept.title} className="border-t border-white/10 pt-5">
                  <h3 className="text-lg text-slate-200 font-sans font-semibold mb-2">{concept.title}</h3>
                  <p className="text-base text-slate-400 font-sans leading-relaxed">{concept.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Pipeline diagram */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// How it works</p>
            <h2 className="text-4xl sm:text-5xl">From legacy code to verified migration</h2>
          </div>

          <PipelineDiagram />
        </section>

        {/* Architecture overview */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// Architecture</p>
            <h2 className="text-4xl sm:text-5xl">Built for enterprise scale</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {architecture.map((item) => (
              <article key={item.title} className="card-monolith">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-heading text-white">{item.title}</h3>
                  <span className="font-mono text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-400">
                    {item.tag}
                  </span>
                </div>
                <p className="text-base text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Competitor comparison */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// Approach</p>
            <h2 className="text-4xl sm:text-5xl">Beyond deterministic transforms</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {competitors.map((item) => (
              <article key={item.approach} className="card-monolith">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold">
                    {item.approach}
                  </span>
                </div>
                <h3 className="text-2xl font-heading text-white mb-4">{item.players}</h3>
                <p className="text-base text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Status table */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// Status</p>
            <h2 className="text-4xl sm:text-5xl">Pipeline progress</h2>
          </div>

          <div className="max-w-2xl mx-auto card-monolith overflow-hidden">
            <div className="divide-y divide-white/5">
              {status.map((item) => (
                <div key={item.stage} className="flex items-center justify-between py-4 px-2">
                  <span className="text-lg text-slate-300 font-sans">{item.stage}</span>
                  <span className="flex items-center gap-2">
                    {item.done ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="font-mono text-xs text-green-400 uppercase tracking-wider">Done</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Pending</span>
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot CTA */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// Pilot</p>
            <h2 className="text-4xl sm:text-5xl">Book a pilot</h2>
            <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              Tell us about your legacy system and we'll set up a focused Gluon pilot for your first migration.
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://calendly.com/yp969803/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-infra"
            >
              Book a demo
            </a>
            <a
              href="mailto:yash@retrievallabs.org"
              className="btn-infra-ghost"
            >
              Contact us
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
