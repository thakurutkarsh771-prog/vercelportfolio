import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileCheck2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import certificateOne from '../assets/certificates/utkarsh-certificate-1.pdf';
import certificateTwo from '../assets/certificates/utkarsh-certificate-2.pdf';
import certificateThree from '../assets/certificates/utkarsh-certificate-3.pdf';
import certificateFour from '../assets/certificates/certificate.pdf';

const certificateUrls = { 'utkarsh-certificate-1.pdf': certificateOne, 'utkarsh-certificate-2.pdf': certificateTwo, 'utkarsh-certificate-3.pdf': certificateThree, 'certificate.pdf': certificateFour };

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="section-rule py-28">
      <div className="section-heading"><span>09 / Certifications</span><h2>Proof of the work.</h2></div>
      <div className="certificate-grid">
        {portfolioData.certificates.map((certificate, index) => (
          <motion.article key={certificate.file} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="certificate-card">
            <div className="certificate-preview"><FileCheck2 size={30} className="text-primary" /><span className="certificate-file">PDF / CERTIFICATE 0{index + 1}</span></div>
            <p className="mt-5 text-xs font-mono uppercase tracking-[0.15em] text-primary">{certificate.program}</p>
            <h3 className="mt-2 font-display text-xl font-bold text-white">{certificate.title}</h3>
            <dl className="certificate-meta"><div><dt>Recipient</dt><dd>{certificate.recipient}</dd></div><div><dt>Organization</dt><dd>{certificate.organization}</dd></div><div><dt>Date</dt><dd>{certificate.date}</dd></div></dl>
            <button type="button" onClick={() => setSelected(certificate)} className="certificate-button">View Certificate <ExternalLink size={15} /></button>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>
        {selected && <motion.div className="certificate-modal" role="dialog" aria-modal="true" aria-label={selected.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.div className="certificate-modal-content" initial={{ y: 18, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18 }} onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between gap-4"><div><p className="section-kicker">Certificate preview</p><h3 className="mt-2 text-xl font-bold text-white">{selected.title}</h3></div><button type="button" aria-label="Close certificate preview" onClick={() => setSelected(null)} className="modal-close"><X size={19} /></button></div><iframe title={`${selected.title} certificate`} src={certificateUrls[selected.file]} className="certificate-frame" /><a href={certificateUrls[selected.file]} target="_blank" rel="noreferrer" className="certificate-button mt-4">Open PDF in new tab <ExternalLink size={15} /></a></motion.div></motion.div>}
      </AnimatePresence>
    </section>
  );
}
