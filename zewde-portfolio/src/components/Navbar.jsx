import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/portfolioData.js'
export default function Navbar() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false), [active, setActive] = useState('home')
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40); onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])
  return (
    <header className={`nav ${solid || open ? 'solid' : ''}`}>
      <nav className="wrap navin" aria-label="Main">
        <a href="#home" className="logo" aria-label="Home">ZB</a>
        <ul className={`links ${open ? 'open' : ''}`}>
          {nav.map((n) => { const id = n.toLowerCase(); return (
            <li key={n}><a href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'page' : undefined} onClick={() => setOpen(false)}>{n}</a></li>) })}
        </ul>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
    </header>
  )
}
