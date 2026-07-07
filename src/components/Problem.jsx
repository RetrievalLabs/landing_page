import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const risks = [
  {
    id: 'KNW-01',
    title: 'Knowledge is fragmented',
    desc: 'Critical company context is split across docs, chats, tickets, dashboards, repos, and email. Employees waste time searching instead of acting.',
    label: 'Context Sprawl'
  },
  {
    id: 'KNW-02',
    title: 'Search misses the operating context',
    desc: 'Keyword and vector search can surface documents, but they rarely connect entities, decisions, workflows, ownership, and history into a usable company memory.',
    label: 'Retrieval Gap'
  },
  {
    id: 'KNW-03',
    title: 'Agents need grounded context',
    desc: 'Company-wide tasks require more than generic automation. Agents need structured enterprise knowledge to retrieve the right information and execute useful workflows.',
    label: 'Execution Gap'
  }
];

export default function Problem() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the left heading - adjusted start/end to prevent overlap
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.problem-sticky-container',
        pinSpacing: false,
      });

      // Animate the risk items with stable scaling
      const items = gsap.utils.toArray('.problem-item');
      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
            end: 'top 50%',
            scrub: true,
          }
        });
      });

      // Floating decorative lines
      gsap.to('.problem-deco-line', {
        scaleX: 1,
        duration: 2,
        stagger: 0.5,
        ease: 'expo.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="problem" ref={containerRef} className="relative py-16 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Decorative vertical lines for "Audit" feel */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div> */}

      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">

          {/* Sticky Heading - Infrastructure Grade */}
          <div className="md:w-5/12 pt-4 z-20">
            <div className="problem-sticky-container h-full">
              <div className="v-stack gap-8 bg-background/90 backdrop-blur-xl md:bg-navy-950/20 md:backdrop-blur-sm p-6 -m-6 md:p-0 md:m-0 pb-8 md:pb-0 rounded-2xl">
                <div className="h-stack gap-4">
                  <div className="problem-deco-line w-12 h-px bg-sky-400 origin-left scale-x-0" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-sky-400 font-semibold">
                    Diagnostic // Knowledge
                  </p>
                </div>
                <h2 className="text-5xl sm:text-7xl lg:text-8xl tracking-tighter">
                  The <span className="italic font-serif">Context</span> Gap
                </h2>
                <p className="mt-4 md:mt-8 text-lg md:text-xl text-slate-400 font-sans leading-relaxed max-w-sm">
                  Enterprise knowledge is scattered across tools and teams.
                  RetrievalLabs.ai connects that context so people and agents can use it to get work done.
                </p>
              </div>
            </div>
          </div>

          {/* Asymmetrical Risk Items - Audit Trail Rhythm */}
          <div className="md:w-7/12 v-stack gap-32 md:gap-64 relative z-10 pt-16 pb-32">
            {risks.map((risk, i) => (
              <div
                key={risk.id}
                className={`problem-item relative group w-full ${i === 0 ? 'md:w-full' :
                  i === 1 ? 'md:ml-auto md:w-5/6 md:-translate-x-8' :
                    'md:ml-12 md:w-11/12 md:translate-x-4'
                  }`}
              >
                <div className="absolute -left-12 top-0 font-mono text-[10px] text-white/5 rotate-90 origin-top-left translate-y-4 hidden md:block tracking-widest whitespace-nowrap">
                  ENTERPRISE_CONTEXT // 0x{risk.id.split('-')[1]} // SEG_{risk.label.split(' ')[0].toUpperCase()}
                </div>
                <div className="border-t border-white/10 pt-12 bg-navy-950/20 backdrop-blur-sm transition-all duration-700 group-hover:border-sky-500/30 group-hover:bg-navy-950/40">
                  <span className="font-mono text-sky-400 text-xs tracking-[0.2em] block mb-6 uppercase">
                    [{risk.id}] // {risk.label}
                  </span>
                  <h3 className="text-4xl sm:text-7xl mb-8 group-hover:text-white transition-colors duration-500 leading-tight">
                    {risk.title}
                  </h3>
                  <p className="text-xl text-slate-400 leading-relaxed font-sans max-w-xl group-hover:text-slate-200 transition-colors duration-500">
                    {risk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
