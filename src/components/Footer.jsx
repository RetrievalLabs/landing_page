import logoUrl from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-20 border-t border-white/5">
      <div className="section-container flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="v-stack gap-4">
          <div className="h-stack gap-3">
            <div
              className="w-7 h-7 rounded bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${logoUrl})`, backgroundSize: '360%' }}
              aria-hidden="true"
            />
            <span className="font-sans font-bold text-white text-sm tracking-tighter">
              RetrievalLabs.ai
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono tracking-widest">
            © 2026 RetrievalLabs.ai. All rights reserved.
          </p>
        </div>

        <div className="h-stack gap-12">
          {[
            { label: 'Privacy', href: '#' },
            { label: 'Legal', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/retrievallabs-ai' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
