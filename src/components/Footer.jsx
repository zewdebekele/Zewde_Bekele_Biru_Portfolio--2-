import { Github, Mail, Send } from 'lucide-react'
import { profile, nav } from '../data/portfolioData.js'
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap fgrid">
      <div><strong>{profile.name}</strong><p>{profile.role}</p><p className="muted">Designed with passion. Built with purpose.</p></div>
      <ul className="flinks">{nav.map((n) => <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul>
      <div className="social">
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
        <a href={`https://t.me/${profile.telegram.slice(1)}`} target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={18} /></a>
        <a href={profile.github} aria-label="GitHub (add your link)"><Github size={18} /></a>
      </div>
    </div><p className="wrap copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p></footer>
  )
}
