import iimaVenturesLogo from '../../assets/iima-ventures-logo.jpg';

export default function SupportedBy() {
  return (
    <section id="supported-by" className="relative py-20 sm:py-24 bg-navy-950 border-t border-white/5 overflow-hidden">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 mb-8 font-semibold">
            // Supported By
          </p>

          <a
            href="https://iimaventures.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-col sm:flex-row items-center gap-8 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-8 sm:px-12 hover:border-sky-400/40 transition-colors"
          >
            <span className="w-36 h-24 rounded-lg bg-white flex items-center justify-center overflow-hidden p-3">
              <img
                src={iimaVenturesLogo}
                alt="IIMA Ventures logo"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </span>
            <span className="v-stack gap-2 text-center sm:text-left">
              <span className="font-heading text-4xl text-white">IIMA Ventures</span>
              <span className="font-sans text-slate-400">
                IIM Ahmedabad's startup incubator and innovation hub.
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
