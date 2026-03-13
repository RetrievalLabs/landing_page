import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: 'Permission Sync',
    desc: 'Bridges the gap between physical source permissions and vector retrieval. Real-time reconciliation of ACLs across Confluence, SharePoint, and S3.',
    tag: 'INTEGRATION'
  },
  {
    title: 'Retrieval Enforcement',
    desc: 'A side-car proxy for RAG pipelines. It intercepts every retrieval request and filters results against the current permission state of the user.',
    tag: 'RUNTIME'
  },
  {
    title: 'Authorized Response',
    desc: 'Ensures the final LLM output is grounded only in data the user has access to. Prevents cross-pollination of sensitive knowledge.',
    tag: 'FIDELITY'
  }
];

export default function WhatWereBuilding() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.pillar-item');

    gsap.set(items, { y: 50, opacity: 0 });

    gsap.to(items, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        once: true
      }
    });

  }, []);

  return (
    <section id="solution" ref={sectionRef} className="relative py-12 sm:py-16 bg-navy-950 overflow-hidden">
      <div className="section-container">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-6 font-semibold">
              // The Product
            </p>
            <h2 className="text-7xl sm:text-9xl">
              Building the <span className="italic font-serif">Auth-Layer</span> for AI
            </h2>
          </div>
          <p className="text-slate-500 font-sans max-w-sm mb-4">
            Infrastructure that helps enterprise AI systems respect source permissions consistently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="pillar-item v-stack justify-between card-monolith min-h-[440px] group transition-all duration-500 hover:border-white/20">
              <div className="v-stack gap-8">
                <span className="font-mono text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit text-slate-400 group-hover:bg-sky-400 group-hover:text-navy-950 group-hover:border-sky-400 transition-all">
                  {pillar.tag}
                </span>
                <h3 className="text-4xl text-white font-heading">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-lg text-slate-400 font-sans leading-relaxed group-hover:text-slate-200 transition-colors">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
