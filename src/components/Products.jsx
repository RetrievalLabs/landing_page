import gluonLogo from '../../assets/gluon-logo.png';

const products = [
  {
    name: 'Gluon',
    tag: 'Pilot',
    desc: 'Agentic legacy code migration. Understand the code, understand the business, capture behavior, migrate, verify.',
    href: '/?product=gluon',
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <article key={product.name} className="card-monolith min-h-[340px] v-stack justify-between group">
              <div className="v-stack gap-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <span className="w-44 h-20 rounded-lg bg-transparent flex items-center justify-center overflow-hidden gap-1">
                    <img src={gluonLogo} alt="Gluon logo" className="h-full object-contain" loading="lazy" />
                    <span className="text-5xl font-heading text-white">luon</span>
                  </span>
                  <span className="font-mono text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit text-slate-400 group-hover:bg-sky-400 group-hover:text-navy-950 group-hover:border-sky-400 transition-all">
                    {product.tag}
                  </span>
                </div>
                <div>
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
