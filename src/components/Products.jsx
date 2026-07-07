import synapseLogo from '../../assets/synapse-logo.svg';

const products = [
  {
    name: 'Synapse',
    tag: 'MVP Stage',
    desc: 'An AI organizational memory and coding agent. Synapse connects Jira, repos, PRs, and more into a knowledge graph, then turns approved tickets into sandbox-tested pull requests.',
    href: '/?product=synapse',
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-6 font-semibold">
            // Products
          </p>
          <h2 className="text-6xl sm:text-8xl mb-8">
            Products
          </h2>
          <p className="text-xl text-slate-400 font-sans leading-relaxed max-w-2xl">
            Tools built on RetrievalLabs.ai's secure enterprise knowledge layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <article key={product.name} className="card-monolith min-h-[340px] v-stack justify-between group">
              <div className="v-stack gap-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <span className="w-44 h-20 rounded-lg bg-white flex items-center justify-center overflow-hidden p-3">
                    <img src={synapseLogo} alt="Synapse logo" className="w-full h-full object-contain" loading="lazy" />
                  </span>
                  <span className="font-mono text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit text-slate-400 group-hover:bg-sky-400 group-hover:text-navy-950 group-hover:border-sky-400 transition-all">
                    {product.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-6xl text-white font-heading mb-6">
                    {product.name}
                  </h3>
                  <p className="text-lg text-slate-400 font-sans leading-relaxed group-hover:text-slate-200 transition-colors">
                    {product.desc}
                  </p>
                </div>
              </div>
              <a
                href={product.href}
                className="mt-10 text-xs font-mono uppercase tracking-[0.25em] text-sky-400 hover:text-white transition-colors"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
