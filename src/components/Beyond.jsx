import { motion } from 'framer-motion';
import { BrainCircuit, Network, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const icons = [BrainCircuit, Network, Terminal];

export default function Beyond() {
  return (
    <section id="beyond" className="section-rule py-28">
      <div className="section-heading"><span>05 / Beyond development</span><h2>How I think.</h2></div>
      <div className="knowledge-grid">
        {portfolioData.beyond.map((group, index) => { const Icon = icons[index]; return <motion.article key={group.title} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="knowledge-card"><div className="knowledge-icon"><Icon size={20} /></div><h3 className="mt-6 font-display text-2xl font-bold text-white">{group.title}</h3><div className="mt-6 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="knowledge-pill">{item}</span>)}</div></motion.article>; })}
      </div>
    </section>
  );
}
