import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero-section relative flex min-h-[100vh] items-center justify-center pb-20 pt-32">
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="grid w-full items-center justify-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:max-w-4xl lg:text-left">
          <div className="mb-7 inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-primary">
            <span className="status-dot" /> {personal.status}
          </div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-gray-500">{personal.subtitle}</p>
          <h1 className="font-display mx-auto max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:mx-0 lg:text-[6.8rem]">
            Hi, I'm <span className="text-primary">{personal.fullName}.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-400 lg:mx-0">I build interactive web experiences, learn computer science deeply, and turn ideas into real-world projects.</p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#projects" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-background transition hover:bg-white sm:w-auto">
              View selected work <ArrowUpRight size={17} />
            </a>
            <a href="#about" className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-gray-300 transition hover:text-primary sm:w-auto">
              More about me <ArrowDown size={16} />
            </a>
          </div>
          <div className="mt-14 flex items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start">
            <MapPin size={15} className="text-coral" /> Open to opportunities · India
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="hero-art hidden lg:block">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-sun"><span>US</span></div>
          <div className="hero-label label-top">01 / BUILD</div>
          <div className="hero-label label-bottom">CODE · CREATE · SHIP</div>
        </motion.div>
      </div>
    </section>
  );
}