import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const consequences = [
  {
    title: 'Structured Enterprise Knowledge',
    desc: 'RetrievalLabs turns fragmented information—codebases, databases, documents, tools, tickets, and people—into graph-structured, permission-aware knowledge that AI can reason over.',
    detail: 'Knowledge graphs'
  },
  {
    title: 'Contextual AI Agents',
    desc: 'Agents that understand how the organization works: its systems, workflows, dependencies, decisions, and institutional knowledge—ready to execute complex, long-running enterprise work.',
    detail: 'Agentic infrastructure'
  },
  {
    title: 'Safe, Verifiable Action',
    desc: 'AI agents operate with secure access controls, contextual verification, and human oversight throughout—bridging organizational knowledge with capable, trustworthy execution.',
    detail: 'Enterprise-grade control'
  }
];

export default function WhyThisMatters() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll('.stack-card');

      // Stacked pinning effect
      cards.forEach((card, i) => {
        // Pinning
        ScrollTrigger.create({
          trigger: card,
          start: `top ${15 + i * 2}%`,
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: 'bottom 100%',
        });

        // Normalized scaling and opacity transition
        gsap.to(card, {
          scale: 0.95, // Consistent scale target
          opacity: 0,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: card,
            start: `top ${15 + i * 2}%`,
            end: 'bottom 20%',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-it-matters" ref={containerRef} className="relative pt-16 pb-16 bg-navy-950">
      <div className="section-container">
        <div className="max-w-xl mb-24">
          <h2 className="text-7xl sm:text-8xl mb-8">
            Why <span className="italic font-serif">Context</span> is the layer
          </h2>
          <p className="text-xl text-slate-400 font-sans leading-relaxed">
            Enterprise AI adoption requires connecting organizational knowledge with capable agents. Models alone aren't enough—context is the foundation.
          </p>
        </div>

        <div className="v-stack gap-8">
          {consequences.map((item, i) => (
            <div
              key={i}
              className="stack-card card-monolith !p-12 sm:!p-20 min-h-[450px] flex flex-col justify-between"
            >
              <div className="v-stack gap-6">
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/30">0{i + 1} // {item.detail}</span>
                <h3 className="text-5xl sm:text-7xl max-w-2xl">{item.title}</h3>
              </div>
              <p className="text-2xl text-slate-300 font-sans leading-relaxed max-w-2xl ml-auto text-right">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom spacer to prevent section overlap during pinned transitions */}
        <div className="h-[20vh]" aria-hidden="true" />
      </div>
    </section>
  );
}
