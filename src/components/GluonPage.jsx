import gluonLogo from '../../assets/gluon-logo.png';

const steps = [
  {
    number: '01',
    title: 'Understand',
    desc: 'Gluon analyzes the legacy codebase — build structure, dependencies, modules, and entry points — to build a complete picture of how the system works.',
  },
  {
    number: '02',
    title: 'Capture behavior',
    desc: 'It extracts business rules, workflows, and critical behavior into a knowledge graph, then generates characterization tests that act as a behavioral safety net.',
  },
  {
    number: '03',
    title: 'Migrate',
    desc: 'Gluon transforms the codebase in controlled units — updating dependencies, APIs, frameworks, and language version — while preserving the original behavior.',
  },
  {
    number: '04',
    title: 'Verify',
    desc: 'Every migrated unit is tested against the characterization scenarios. If something breaks, Gluon diagnoses the issue, repairs it, and retries automatically.',
  },
];

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
              End-to-end agentic platform for modernizing legacy software. Gluon understands your system, captures its behavior, migrates the code, and verifies that everything still works.
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

        {/* Deployment options */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// Deployment</p>
            <h2 className="text-4xl sm:text-5xl">Cloud or self-hosted</h2>
            <p className="text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              Run Gluon in the cloud for zero-ops simplicity, or self-host for full control over your environment and data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <article className="card-monolith text-center">
              <div className="mb-4">
                <svg className="w-10 h-10 mx-auto text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">Cloud</h3>
              <p className="text-base text-slate-400 font-sans leading-relaxed">
                Fully managed. Connect your GitHub repository and start migrating — no infrastructure to set up or maintain.
              </p>
            </article>

            <article className="card-monolith text-center">
              <div className="mb-4">
                <svg className="w-10 h-10 mx-auto text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">Self-hosted</h3>
              <p className="text-base text-slate-400 font-sans leading-relaxed">
                Deploy in your own infrastructure. Full control over your code, data, and environment — air-gapped and enterprise-ready.
              </p>
            </article>
          </div>
        </section>

        {/* How it works - steps */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-4 font-semibold">// How it works</p>
            <h2 className="text-4xl sm:text-5xl">From legacy code to modernized system</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <article key={step.number} className="card-monolith text-center">
                <span className="font-mono text-4xl text-sky-400/20 font-bold leading-none">{step.number}</span>
                <h3 className="text-2xl font-heading text-white mt-4">{step.title}</h3>
              </article>
            ))}
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
