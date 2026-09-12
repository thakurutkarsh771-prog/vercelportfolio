import { motion } from 'framer-motion';
import { ArrowUpRight, FolderKanban } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section-rule py-28">
      <div className="section-heading"><span>04 / Selected work</span><h2>Ideas, made tangible.</h2></div>
      <div className="grid gap-5 lg:grid-cols-2">
        {portfolioData.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="project-card group"
          >
            <div className={`project-visual ${project.accent}`}><span className="project-visual-index">PROJECT / 0{index + 1}</span><span className="project-visual-title">{project.title}</span><span className="project-visual-mark">{index === 0 ? '↗' : index === 1 ? '✦' : index === 2 ? '⌁' : '◌'}</span></div>
            <div className="flex items-start justify-between gap-6">
              <span className="project-number">0{index + 1}</span>
              <FolderKanban size={26} className="text-primary transition-transform group-hover:-rotate-6" />
            </div>
            <h3 className="mt-16 font-display text-3xl font-bold tracking-tight text-white">{project.title}</h3>
            <p className="mt-3 max-w-md leading-7 text-gray-400">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tech.map((technology) => <span key={technology} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300">{technology}</span>)}
            </div>
            <a href={project.github} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-white">View repository <ArrowUpRight size={16} /></a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
