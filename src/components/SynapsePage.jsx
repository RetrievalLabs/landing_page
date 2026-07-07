import synapseLogo from '../../assets/synapse-logo.svg';

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
      </section>
    </main>
  );
}
