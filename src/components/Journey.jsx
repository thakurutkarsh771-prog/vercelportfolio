import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Journey() {
  return (
    <section id="journey" className="section-rule py-28">
      <div className="section-heading"><span>02 / My journey</span><h2>One layer at a time.</h2></div>
      <div className="journey-line">
        {portfolioData.journey.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, x: index % 2 ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="journey-item">
            <span className="journey-dot">0{index + 1}</span>
            <div><p className="mb-2 text-xs font-mono uppercase tracking-[0.16em] text-primary">{item.title}</p><h3 className="font-display text-2xl font-semibold text-white">{item.stack}</h3><p className="mt-3 max-w-md text-sm leading-6 text-gray-500">{item.description}</p></div>
            <ArrowUpRight size={18} className="journey-arrow text-gray-600" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
