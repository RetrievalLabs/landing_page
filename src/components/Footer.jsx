export default function Footer() {
  return (
    <footer className="bg-navy-950 py-20 border-t border-white/5">
      <div className="section-container flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="v-stack gap-4">
          <div className="h-stack gap-3">
            <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm" />
            </div>
            <span className="font-sans font-bold text-white text-sm uppercase tracking-tighter">
              Retrieval Labs
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
            © 2026 // Authorization Fidelity Layer
          </p>
        </div>

        <div className="h-stack gap-12">
          {['Privacy', 'Legal', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
