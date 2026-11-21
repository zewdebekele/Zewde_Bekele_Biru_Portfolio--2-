import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { GraduationCap, Code2, BookOpen, Phone, Mail, Send, ChevronDown, MapPin } from 'lucide-react'
import { profile, skills, projects, filters, education, learning } from '../data/portfolioData.js'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import SkillCard from '../components/SkillCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

function Photo({ className = '' }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={`photo ${className}`}>
      <div className="photo-in">
        {ok ? <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setOk(false)} />
            : <div className="photo-ph" role="img" aria-label="Profile photo placeholder">ZB<small>Add public/images/zewde-profile.jpg</small></div>}
      </div>
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const a = (d) => (reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d } })
  return (
    <section id="home" className="hero"><div className="wrap herogrid">
      <div>
        <motion.h1 {...a(0.1)} className="name">ZEWDE<br />BEKELE BIRU</motion.h1>
        <motion.p {...a(0.25)} className="headline">Building Digital Experiences Through Code.</motion.p>
        <motion.p {...a(0.35)} className="subtitle">Full-Stack Developer | Software Engineering Student | Technology Enthusiast</motion.p>
        <motion.p {...a(0.45)} className="muted lead">I build modern digital solutions, explore emerging technologies, and continuously transform ideas into functional applications.</motion.p>
        <motion.div {...a(0.55)} className="ctas"><Button href="#projects">Explore My Projects</Button><Button href="#contact" variant="ghost">Let's Connect</Button></motion.div>
      </div>
      <motion.div {...a(0.3)}><Photo className="float" /></motion.div>
    </div><a href="#about" className="scroll" aria-label="Scroll to About"><ChevronDown /></a></section>
  )
}

export function About() {
  const cards = [[GraduationCap, 'Software Engineering Student', 'Mekelle University'], [Code2, 'Full-Stack Developer', 'Frontend to backend'], [BookOpen, 'Lifelong Learner', 'Always exploring']]
  return (
    <section id="about" className="section"><div className="wrap">
      <SectionTitle title="About me" />
      <div className="aboutgrid">
        <Reveal><Photo /></Reveal>
        <Reveal delay={0.1}>{profile.bio.map((t) => <p key={t} className="bio">{t}</p>)}
          <div className="infocards">{cards.map(([I, t, s]) => <div key={t} className="glass info"><I aria-hidden="true" /><strong>{t}</strong><span className="muted">{s}</span></div>)}</div>
        </Reveal>
      </div>
    </div></section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section"><div className="wrap">
      <SectionTitle title="Technical skills" sub="Technologies I work with, grouped by area." />
      {skills.map((g, i) => (
        <Reveal key={g.category} delay={i * 0.05}><h3 className="cat">{g.category}</h3><ul className="skillgrid">{g.items.map((s) => <SkillCard key={s.name} {...s} />)}</ul></Reveal>
      ))}
    </div></section>
  )
}

export function Projects() {
  const [f, setF] = useState(filters[0])
  const list = f === filters[0] ? projects : projects.filter((p) => p.category === f)
  return (
    <section id="projects" className="section"><div className="wrap">
      <SectionTitle title="Featured projects" sub="The cards below are sample placeholders. Replace them in src/data/portfolioData.js." />
      <div className="filters" role="group" aria-label="Filter projects">{filters.map((x) => <button key={x} className={f === x ? 'on' : ''} aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>)}</div>
      <motion.div layout className="projgrid"><AnimatePresence>{list.map((p) => <ProjectCard key={p.title} p={p} />)}</AnimatePresence></motion.div>
      {!list.length && <p className="muted">No projects in this category yet.</p>}
    </div></section>
  )
}

export function Education() {
  return (
    <section id="education" className="section"><div className="wrap">
      <SectionTitle title="Education" />
      <ol className="timeline">{education.map((e) => (
        <Reveal key={e.school}><li><span className="dot"><GraduationCap size={18} aria-hidden="true" /></span>
          <div className="glass tl"><h3>{e.school}</h3><p>{e.degree}</p><p className="muted">{e.status} <MapPin size={14} aria-hidden="true" /> {e.place}</p></div></li></Reveal>))}</ol>
    </div></section>
  )
}

export function LearningJourney() {
  return (
    <section className="section"><div className="wrap center">
      <SectionTitle title="Always Learning. Always Building." sub="I believe great developers never stop learning. Technology evolves every day, and I am committed to evolving with it. Every new skill, project, and challenge brings me closer to becoming a better software engineer." />
      <ul className="chips">{learning.map((t, i) => <li key={t} className="chip" style={{ animationDelay: `${i * 0.4}s` }}>{t}</li>)}</ul>
    </div></section>
  )
}

function Field({ k, label, area, v, err, set }) {
  const T = area ? 'textarea' : 'input'
  return (
    <label>{label}<T value={v[k]} onChange={set(k)} rows={area ? 5 : undefined} type={k === 'email' ? 'email' : 'text'} aria-invalid={!!err[k]} />{err[k] && <em role="alert">{err[k]}</em>}</label>
  )
}

export function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({}), [done, setDone] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault(); const er = {}
    if (v.name.trim().length < 2) er.name = 'Enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) er.email = 'Enter a valid email address.'
    if (v.subject.trim().length < 3) er.subject = 'Enter a subject.'
    if (v.message.trim().length < 10) er.message = 'Write at least 10 characters.'
    setErr(er); if (Object.keys(er).length) return
    // No backend is configured, so this opens the visitor's email app with the message filled in.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(`${v.message}\n\nFrom: ${v.name} (${v.email})`)}`
    setDone(true)
  }
  const fp = { v, err, set }
  return (
    <section id="contact" className="section"><div className="wrap">
      <SectionTitle title="Let's Build Something Amazing Together." sub="Have a project idea, collaboration opportunity, or interesting challenge? I'd love to hear from you." />
      <div className="contactgrid">
        <Reveal><ul className="clist">
          <li className="glass"><Phone aria-hidden="true" /><a href={`tel:${profile.phone}`}>{profile.phone}</a></li>
          <li className="glass"><Mail aria-hidden="true" /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li className="glass"><Send aria-hidden="true" /><a href={`https://t.me/${profile.telegram.slice(1)}`} target="_blank" rel="noreferrer">{profile.telegram}</a></li></ul></Reveal>
        <Reveal delay={0.1}><form className="glass form" onSubmit={submit} noValidate>
          <Field k="name" label="Full Name" {...fp} /><Field k="email" label="Email Address" {...fp} /><Field k="subject" label="Subject" {...fp} /><Field k="message" label="Message" area {...fp} />
          <Button type="submit">Send Message</Button>
          {done && <p className="muted" role="status">Your email app should open with the message ready to send. Nothing is sent until you press send there.</p>}
        </form></Reveal>
      </div>
    </div></section>
  )
}
