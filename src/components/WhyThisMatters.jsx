import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const consequences = [
  {
    title: 'The AI Trust Gap',
    desc: 'Enterprises refuse to rollout RAG if they cannot guarantee that local source-level permissions are respected in the LLM response.',
    detail: 'Legal compliance'
  },
  {
    title: 'Shadow Retrieval',
    desc: 'Agents discovering files they should not see leads to "Privilege Escalation-by-Search" – a new class of enterprise vulnerability.',
    detail: 'Security breach'
  },
  {
    title: 'Rollout Paralysis',
    desc: 'Security teams block productive AI projects because the indexing pipeline is a "giant copy machine" with no authorization fidelity.',
    detail: 'Operational drag'
  }
];

export default function WhyThisMatters() {
  const containerRef = useRef(null);

  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="why-it-matters" ref={containerRef} className="relative pt-16 pb-16 bg-navy-950">
      <div className="section-container">
        <div className="max-w-xl mb-24">
          <h2 className="text-7xl sm:text-8xl mb-8">
            Why <span className="italic font-serif">Infrastructure</span> is the answer
          </h2>
          <p className="text-xl text-slate-400 font-sans leading-relaxed">
            Permissions are not metadata. They are the core constraint of enterprise knowledge.
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
