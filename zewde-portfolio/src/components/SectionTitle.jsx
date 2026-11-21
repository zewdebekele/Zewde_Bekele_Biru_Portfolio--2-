import Reveal from './Reveal.jsx'
export default function SectionTitle({ title, sub }) {
  return <Reveal className="stitle"><h2>{title}</h2>{sub && <p>{sub}</p>}</Reveal>
}
