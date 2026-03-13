import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sources = ['GDrive', 'Confluence', 'SharePoint', 'Slack', 'S3'];
const stacks = ['LangChain', 'LlamaIndex', 'Haystack', 'Custom'];
const clouds = ['AWS', 'Azure', 'GCP', 'On-Prem'];

export default function Architecture() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = svgRef.current.querySelectorAll('.conn-path');
      const nodes = svgRef.current.querySelectorAll('.conn-node');
      const labels = containerRef.current.querySelectorAll('.group-label');

      // Initial state
      gsap.set(paths, { strokeDasharray: 1000, strokeDashoffset: 1000 });
      gsap.set(nodes, { scale: 0, opacity: 0 });
      gsap.set(labels, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to('.core-hub', { scale: 1.1, duration: 1 })
        .to(paths, { strokeDashoffset: 0, stagger: 0.1, duration: 2 }, '-=0.5')
        .to(nodes, { scale: 1, opacity: 1, stagger: 0.05, duration: 1 }, '-=1.5')
        .to(labels, { opacity: 1, y: 0, stagger: 0.2, duration: 1 }, '-=1');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="architecture" ref={containerRef} className="relative min-h-[calc(100vh-4rem)] pt-20 bg-transparent flex flex-col items-center justify-start overflow-hidden">
      <div className="section-container relative z-10 w-full flex flex-col items-center justify-start">
        <div className="text-center max-w-2xl mt-8 mb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-sky-400 mb-2 font-semibold">
            // Unified Authorization Protocol
          </p>
          <h2 className="text-4xl sm:text-6xl mb-0">
            The Connectivity <span className="italic font-serif">Hub</span>
          </h2>
        </div>

        <div className="relative w-full flex-none max-h-[60vh] max-w-5xl mx-auto flex items-center justify-center">
          {/* SVG Hub Visual - Overhauled for high precision geometry */}
          <svg ref={svgRef} viewBox="0 0 1000 620" className="w-full h-full overflow-visible">
            <defs>
              <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Radiant Connections - Calculated for perfect convergence at (500, 310) */}
            {[
              { title: 'SOURCES', items: sources, angle: -175, color: '#38bdf8' },
              { title: 'STACKS', items: stacks, angle: -5, color: '#38bdf8' },
              { title: 'CLOUDS', items: clouds, angle: 90, color: '#38bdf8' }
            ].map((group) => {
              const radius = 220;
              const angleRad = (group.angle * Math.PI) / 180;
              const gx = 500 + radius * Math.cos(angleRad);
              const gy = 310 + radius * Math.sin(angleRad);

              return (
                <g key={group.title}>
                  {/* Symmetric Curve paths */}
                  <path 
                    className="conn-path" 
                    d={`M 500 310 Q ${500 + (gx-500)*0.6} ${310 + (gy-310)*0.1} ${gx} ${gy}`} 
                    stroke="url(#pathGradient)" 
                    strokeWidth="1.5" 
                    fill="none" 
                  />
                  
                  {group.items.map((item, i) => {
                    const spread = (group.items.length - 1) * 12;
                    const itemAngle = group.angle - spread/2 + (i * 12);
                    const itemRad = (itemAngle * Math.PI) / 180;
                    const dist = radius + 90;
                    const ix = 500 + dist * Math.cos(itemRad);
                    const iy = 310 + dist * Math.sin(itemRad);

                    return (
                      <g key={item} className="conn-node origin-center">
                        {/* Node point */}
                        <circle cx={ix} cy={iy} r="3" fill="#38bdf8" filter="url(#nodeGlow)" />
                        
                        {/* Connecting filament */}
                        <line x1={gx} y1={gy} x2={ix} y2={iy} stroke="#38bdf8" strokeOpacity="0.1" strokeWidth="0.5" />
                        
                        <text 
                          x={ix + (ix > 500 ? 15 : -15)} 
                          y={iy + 4} 
                          textAnchor={ix > 500 ? 'start' : 'end'} 
                          className="fill-slate-400 font-mono text-[11px] tracking-widest uppercase opacity-80"
                        >
                          {item}
                        </text>
                      </g>
                    );
                  })}

                  {/* Group Label - Adjusted for optical centering */}
                  <text 
                    x={gx} 
                    y={gy + (group.angle === 90 ? 40 : -25)} 
                    textAnchor="middle" 
                    className="group-label fill-white font-heading text-4xl tracking-tight italic opacity-95"
                  >
                    {group.title}
                  </text>
                </g>
              );
            })}

            {/* Core Hub - Centered with geometric precision */}
            <g className="core-hub origin-center">
              <circle cx="500" cy="310" r="70" fill="#04070a" stroke="white" strokeOpacity="0.05" />
              <circle cx="500" cy="310" r="55" fill="#38bdf8" fillOpacity="0.05" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.5" filter="url(#nodeGlow)" />
              <text x="500" y="315" textAnchor="middle" className="fill-white font-mono text-[11px] font-bold tracking-[0.5em] uppercase opacity-90">CORE_ENGINE</text>
              
              {/* Inner details for "High-Auth" feel */}
              <circle cx="500" cy="310" r="45" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
            </g>
          </svg>
        </div>

        <div className="mt-4 text-center max-w-xl pb-10">
          <p className="text-xl text-slate-400 font-sans leading-relaxed">
            Retrieval Labs is built for the fragmented enterprise stack. 
            One protocol to rule every retrieval path.
          </p>
        </div>
      </div>
    </section>
  );
}
