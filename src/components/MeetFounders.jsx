import yashImage from '../../assets/yash.jpeg';
import divyanshuImage from '../../assets/divyanshu.png';

const founders = [
  {
    name: 'Yash Patel',
    email: 'yash@retrievallabs.org',
    linkedin: 'https://www.linkedin.com/in/yash-patel-997ba624b/',
    focus: 'IIT Roorkee 2026, AI | Cloud | Knowledge graphs',
    image: yashImage,
  },
  {
    name: 'Divyanshu Kashyap',
    email: 'divyanshu@retrievallabs.org',
    linkedin: 'https://www.linkedin.com/in/divyanshu-k/',
    focus: 'IIT Roorkee 2026, Finance | Sales | Marketing',
    image: divyanshuImage,
  },
];

export default function MeetFounders() {
  return (
    <section id="founders" className="relative py-24 sm:py-32 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-6 font-semibold">
            // Founders
          </p>
          <h2 className="text-6xl sm:text-8xl mb-8">
            Meet the <span className="italic font-serif">Founders</span>
          </h2>
          <p className="text-xl text-slate-400 font-sans leading-relaxed max-w-2xl">
            We are building RetrievalLabs.ai to help enterprises connect fragmented knowledge, secure it with RBAC, and use it through retrieval and agent workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder) => (
            <article key={founder.email} className="card-monolith min-h-[320px] v-stack justify-between group">
              <div className="v-stack gap-8">
                <div className="w-24 h-24 rounded-xl border border-white/10 bg-white/5 overflow-hidden group-hover:border-sky-400/40 transition-colors">
                  <img
                    src={founder.image}
                    alt={`${founder.name} portrait`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-5xl text-white font-heading mb-4">{founder.name}</h3>
                  <p className="text-lg text-slate-400 font-sans leading-relaxed">{founder.focus}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href={`mailto:${founder.email}`}
                  className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 hover:text-white transition-colors"
                >
                  {founder.email}
                </a>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
