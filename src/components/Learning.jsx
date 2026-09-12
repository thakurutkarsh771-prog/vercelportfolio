import { motion } from 'framer-motion';
import { Compass, FlaskConical, RotateCw } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const icons = { Learning: Compass, Practicing: RotateCw, Exploring: FlaskConical };

export default function Learning() {
  return (
    <section id="learning" className="section-rule py-28">
      <div className="section-heading"><span>06 / In progress</span><h2>Currently learning.</h2></div>
      <div className="learning-grid">
        {portfolioData.learning.map((item, index) => { const Icon = icons[item.status]; return <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="learning-item"><div className="flex items-center justify-between"><Icon size={19} className="text-primary" /><span className={`learning-status ${item.status.toLowerCase()}`}>{item.status}</span></div><h3 className="mt-8 text-lg font-bold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-gray-500">{item.description}</p></motion.article>; })}
      </div>
    </section>
  );
}
