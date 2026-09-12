import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;
  return <section id="education" className="section-rule py-28"><div className="section-heading"><span>07 / Education</span><h2>Grounded in fundamentals.</h2></div><div className="education-card"><div className="education-mark"><GraduationCap size={28} /></div><div><p className="text-xs font-mono uppercase tracking-[0.16em] text-primary">Current education</p><h3 className="mt-3 font-display text-3xl font-bold text-white">{education.degree}</h3><p className="mt-4 text-lg text-gray-300">{education.college}</p><p className="mt-2 text-sm text-gray-500">{education.detail}</p><p className="mt-5 font-mono text-sm text-primary">{education.startYear} <span className="text-gray-600">→</span> {education.endYear}</p></div><span className="education-badge">In progress</span></div></section>;
}
