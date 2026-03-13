import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ArchVisual() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.arch-node');
    const lines = containerRef.current.querySelectorAll('.arch-line');

    gsap.set(elements, { opacity: 0, scale: 0.8 });
    gsap.set(lines, { strokeDasharray: 1000, strokeDashoffset: 1000 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      }
    });

    tl.to(elements, { opacity: 1, scale: 1, stagger: 0.2 })
      .to(lines, { strokeDashoffset: 0, stagger: 0.2 }, '-=0.5');

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-24 sm:mt-32 w-full max-w-5xl mx-auto px-4">
      <div className="relative aspect-[21/9] w-full bg-surface/30 rounded-3xl border border-white/5 backdrop-blur-3xl overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 800 300" className="w-full h-full p-12 overflow-visible">
          <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="arch-line" d="M150 150 H650" stroke="url(#glow)" strokeWidth="1" fill="none" />
          {[150, 316, 483, 650].map((x, i) => (
            <g key={i} className="arch-node">
              <rect x={x - 40} y={110} width="80" height="80" rx="12" fill="#0a0f1a" stroke="white" strokeOpacity="0.1" />
              <rect x={x - 15} y={135} width="30" height="30" rx="4" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1" />
              <text x={x} y={210} textAnchor="middle" className="fill-slate-500 font-mono text-[10px] uppercase tracking-widest">
                {['Source', 'Logic', 'Auth', 'Result'][i]}
              </text>
            </g>
          ))}
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[scan_4s_linear_infinite]" />
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const headline = sectionRef.current.querySelector('.hero-headline');
    const subHeadline = sectionRef.current.querySelector('.hero-sub');
    const actions = sectionRef.current.querySelector('.hero-actions');

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Set initial state explicitly to avoid flash of content or stuck opacity
    gsap.set([headline, subHeadline, actions], { opacity: 0, y: 50 });

    tl.to(headline, { y: 0, opacity: 1, duration: 1.2, delay: 0.2 })
      .to(subHeadline, { y: 0, opacity: 1, duration: 0.8 }, '-=0.8')
      .to(actions, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />
      
      <div className="section-container relative z-10 flex flex-col items-center">
        <h1 className="hero-headline text-5xl sm:text-7xl lg:text-9xl text-center max-w-5xl opacity-0">
          Secure <span className="italic font-serif">knowledge access</span> for enterprise AI
        </h1>
        
        <p className="hero-sub mt-12 text-lg sm:text-xl text-slate-400 text-center max-w-2xl font-sans leading-relaxed opacity-0">
          Retrieval Labs implements cold-storage permission fidelity for RAG systems. 
          Infrastructure that ensures agents see only what they are authorized to see.
        </p>
        
        <div className="hero-actions flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 sm:mt-16 opacity-0">
          <a href="#cta" className="btn-infra w-full sm:w-auto">
            Start the Integration
          </a>
          <a href="#architecture" className="btn-infra-ghost w-full sm:w-auto">
            View Architecture
          </a>
        </div>
      </div>

      <div className="hero-arch-parallax w-full">
        <ArchVisual />
      </div>
    </section>
  );
}
