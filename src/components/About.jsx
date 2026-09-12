import { motion } from 'framer-motion';
import { Code2, Layers3, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-rule py-28">
      <div className="section-heading"><span>01 / About</span><h2>Thoughtful by default.</h2></div>
      <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-lg leading-8 text-gray-400">
          <p className="text-2xl leading-10 text-white">Hello, I’m Utkarsh, a BCA student and full-stack developer focused on making the internet more useful, expressive, and easier to navigate.</p>
          <p>I enjoy moving between clean interfaces and robust backend systems: understanding the problem, shaping the experience, and caring about the details that make a product feel finished.</p>
          <p>Outside the editor, I’m exploring new technology, joining hackathons, and sharpening my logic through DSA. I’m currently looking for opportunities where I can learn quickly and contribute with intent.</p>
          <div className="flex flex-wrap gap-3 pt-3">
            {['Accessible thinking', 'Curious learner', 'Detail oriented'].map((item) => <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-gray-300">{item}</span>)}
          </div>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[['01', Code2, 'Build', 'From idea to working product'], ['02', Layers3, 'Connect', 'Frontend meets backend'], ['03', Sparkles, 'Refine', 'Small details, better experiences']].map(([number, Icon, title, copy]) => (
            <motion.div key={number} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="feature-row">
              <span className="font-mono text-xs text-primary">{number}</span><Icon size={20} className="text-coral" /><div><h3 className="font-bold text-white">{title}</h3><p className="mt-1 text-sm text-gray-500">{copy}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;