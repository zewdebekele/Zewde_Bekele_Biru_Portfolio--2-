import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
export default function ProjectCard({ p }) {
  const todo = (h) => (h === '#' ? { 'aria-disabled': true, title: 'Add your link in portfolioData.js', onClick: (e) => e.preventDefault() } : { target: '_blank', rel: 'noreferrer' })
  return (
    <motion.article layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} className="project glass">
      <div className="shot">{p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" /> : <span>Screenshot placeholder</span>}</div>
      <div className="pbody">
        <h3>{p.title}</h3><p>{p.description}</p>
        <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="plinks">
          <a href={p.github} {...todo(p.github)}><Github size={16} aria-hidden="true" /> Code</a>
          <a href={p.demo} {...todo(p.demo)}><ExternalLink size={16} aria-hidden="true" /> Live demo</a>
        </div>
      </div>
    </motion.article>
  )
}
