import { motion } from 'framer-motion'
import { FileCode2, Palette, Braces, Atom, Zap, Globe, Terminal, Server, Layers, Database, Table2, Network, Puzzle, Cog, Brain, Code2 } from 'lucide-react'
const icons = { FileCode2, Palette, Braces, Atom, Zap, Globe, Terminal, Server, Layers, Database, Table2, Network, Puzzle, Cog, Brain }
export default function SkillCard({ name, icon }) {
  const Icon = icons[icon] || Code2
  return (
    <motion.li className="skill glass" whileHover={{ y: -6, scale: 1.03 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <span className="skill-ico"><Icon size={22} aria-hidden="true" /></span><span>{name}</span>
    </motion.li>
  )
}
