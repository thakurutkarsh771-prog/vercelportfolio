import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const links = ['about', 'journey', 'skills', 'projects', 'beyond', 'learning', 'education', 'achievements', 'certifications', 'contact'];
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-panel fixed inset-x-0 top-0 z-50 border-x-0 border-t-0 shadow-[0_12px_28px_rgba(5,5,5,0.35)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10 lg:px-16">
        <motion.a initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} href="#home" className="brand-block flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_24px_rgba(0,0,0,0.28)]">
          <span className="brand-mark grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-[#f4f4f4] via-[#c9d6d1] to-[#9ca7a1] text-[10px] font-bold tracking-[0.18em] text-[#111827] shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_8px_16px_rgba(0,0,0,0.3)]">UT</span>
          <span className="brand-copy leading-none">
            <span className="block font-display text-[0.7rem] font-bold uppercase tracking-[0.34em] text-white">Utkarsh</span>
            <span className="mt-1 block text-[0.52rem] uppercase tracking-[0.28em] text-gray-400">Developer</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-5 xl:gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="nav-link text-[0.64rem] font-medium capitalize tracking-[0.16em] text-slate-300/90 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              {link}
            </a>
          ))}
        </nav>

        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_24px_rgba(0,0,0,0.22)] transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white sm:px-4">
          Let's Talk <ArrowUpRight size={14} />
        </a>

        <button type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="menu-toggle md:hidden"><span /><span /></button>
      </div>
      {open && <nav className="mobile-menu md:hidden" aria-label="Mobile navigation">{links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>)}</nav>}
    </header>
  );
}