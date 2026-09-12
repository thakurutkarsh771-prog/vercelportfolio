import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { lazy, Suspense, useEffect } from 'react';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Beyond from './components/Beyond';
import Learning from './components/Learning';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import emailjs from '@emailjs/browser';
const Scene = lazy(() => import('./components/3D/Scene'));

function App() {
  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);
  return (
    <div className="site-shell relative min-h-screen overflow-x-hidden bg-background text-gray-200 font-sans">
      <Suspense fallback={null}><Scene /></Suspense>
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col px-6 md:px-10 lg:px-16">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Beyond />
        <Learning />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 py-8 text-xs text-gray-500 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Utkarsh Singh</p>
        <p className="font-mono uppercase tracking-[0.18em]">Built with React + Three.js</p>
      </footer>
    </div>
  );
}

export default App;