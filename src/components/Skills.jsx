import { motion } from 'framer-motion';
import { Braces, Database, MonitorCog } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section-rule py-28">
      <div className="section-heading"><span>03 / Toolkit</span><h2>Tools for the work.</h2></div>
      <div className="grid gap-4 md:grid-cols-3">
        {portfolioData.skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: index * 0.1 }}
            className="tool-card"
          >
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-white">
              {[MonitorCog, Braces, Database][index] && (() => { const Icon = [MonitorCog, Braces, Database][index]; return <Icon size={21} className="text-primary" />; })()}
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span 
                  key={item} 
                  className="px-3 py-1 bg-surface border border-white/5 text-gray-300 text-sm rounded-md hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;