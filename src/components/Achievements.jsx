import { Award, Flag, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const icons = [Trophy, Award, Flag];

export default function Achievements() {
  return <section id="achievements" className="section-rule py-28"><div className="section-heading"><span>08 / Milestones</span><h2>Still becoming.</h2></div><div className="achievement-grid">{portfolioData.achievements.map((item, index) => { const Icon = icons[index]; return <article key={item.label} className="achievement-item"><Icon size={22} className="text-coral" /><p className="mt-8 text-xs font-mono uppercase tracking-[0.16em] text-gray-500">{item.label}</p><h3 className="mt-3 text-xl font-bold text-white">{item.value}</h3><p className="mt-3 text-sm leading-6 text-gray-500">{item.description}</p></article>; })}</div></section>;
}
