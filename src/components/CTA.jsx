export default function CTA() {
  return (
    <section id="cta" className="relative py-32 bg-transparent overflow-hidden">
      
      {/* Mesh glow - lowered to avoid transition bleed */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[radial-gradient(circle,rgba(56,189,248,0.03)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <h2 className="text-7xl sm:text-9xl mb-12">
          Ready to build your <span className="italic">knowledge system</span>?
        </h2>
        
        <p className="text-xl text-slate-400 font-sans leading-relaxed max-w-2xl mb-16">
          Connect company data sources, build a living knowledge graph, and deploy RBAC-aware agents that retrieve information and finish work securely.
        </p>

        <div className="v-stack sm:h-stack gap-6">
          <a href="mailto:yash_kp@ee.iitr.ac.in,divyanshu_k@me.iitr.ac.in" className="btn-infra">
            Book a pilot
          </a>
          <a href="mailto:yash_kp@ee.iitr.ac.in,divyanshu_k@me.iitr.ac.in" className="btn-infra-ghost">
            Book a demo
          </a>
        </div>
        
        <div className="mt-32 pt-8 border-t border-white/5 w-full flex justify-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">
            Knowledge system version 1.0.4-stable // RetrievalLabs.ai Inc.
          </p>
        </div>
      </div>
    </section>
  );
}
