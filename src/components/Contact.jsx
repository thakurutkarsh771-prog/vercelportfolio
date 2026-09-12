import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, GitBranch, BriefcaseBusiness, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);
  const successTimeoutRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Validate environment variables
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      console.error('❌ EmailJS not configured. Missing environment variables:');
      console.error('   - VITE_EMAILJS_SERVICE_ID');
      console.error('   - VITE_EMAILJS_TEMPLATE_ID');
      console.error('   - VITE_EMAILJS_PUBLIC_KEY');
      console.error('📝 Check your .env file and restart the dev server.');
      setStatus('error');
      return;
    }

    // Clear any existing success timeout
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
    }

    setStatus('sending');

    // Get form data and send through EmailJS
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log('✅ Email sent successfully!', response);
        setStatus('success');
        form.reset();

        // Reset status after 4 seconds
        successTimeoutRef.current = setTimeout(() => {
          setStatus('idle');
        }, 4000);
      })
      .catch((error) => {
        console.error('❌ EmailJS Error:', error);
        console.error('   Status:', error.status);
        console.error('   Message:', error.text);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <span className="section-kicker">09 / What’s next?</span>
        <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-white md:text-7xl">Let’s make something useful.</h2>
        <p className="mx-auto mb-12 mt-6 max-w-xl text-lg leading-8 text-gray-400">
          I’m currently looking for new opportunities. Have a question, a project idea, or a good problem to solve? My inbox is open.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ delay: 0.2 }}
        className="contact-panel mx-auto max-w-2xl p-6 text-left md:p-8"
      >
        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white outline-none transition-colors focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white outline-none transition-colors focus:border-primary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full resize-y rounded-lg border border-white/10 bg-surface px-4 py-3 text-white outline-none transition-colors focus:border-primary"
              placeholder="Tell me a little about your idea..."
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 font-bold text-background transition hover:bg-white disabled:cursor-wait disabled:opacity-60"
          >
            {status === 'sending' && 'Sending...'}
            {status === 'success' && '✓ Message sent successfully!'}
            {status === 'idle' && (
              <>
                Send Message <Send size={17} />
              </>
            )}
            {status === 'error' && (
              <>
                Try Again <Send size={17} />
              </>
            )}
          </button>
          {status === 'error' && (
            <div className="rounded-lg border border-coral/30 bg-coral/10 p-3 text-sm text-coral">
              <p className="font-semibold">Something went wrong.</p>
              <p className="mt-1 text-xs opacity-80">Check the browser console for details. Make sure EmailJS is configured in your .env file.</p>
            </div>
          )}
        </form>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ delay: 0.4 }}
        className="mt-12 flex justify-center gap-7"
      >
        <a aria-label="GitHub" href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="social-link">
          <GitBranch size={24} />
        </a>
        <a aria-label="LinkedIn" href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="social-link">
          <BriefcaseBusiness size={24} />
        </a>
        <a aria-label="Email" href={portfolioData.socials.email} className="social-link">
          <Mail size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;