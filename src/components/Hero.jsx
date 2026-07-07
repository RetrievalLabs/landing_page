import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
          Company knowledge, <span className="italic font-serif">connected</span> and put to work
        </h1>
        
        <p className="hero-sub mt-12 text-lg sm:text-xl text-slate-400 text-center max-w-2xl font-sans leading-relaxed opacity-0">
          RetrievalLabs.ai turns company data sources into secure knowledge graphs and agent workflows, with RBAC-aware access for every person and agent.
        </p>
        
        <div className="hero-actions flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 sm:mt-16 opacity-0">
          <a href="#architecture" className="btn-infra-ghost w-full sm:w-auto">
            View Architecture
          </a>
        </div>
      </div>
    </section>
  );
}
