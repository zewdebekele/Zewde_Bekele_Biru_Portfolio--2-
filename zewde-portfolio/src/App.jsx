import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Hero, About, Skills, Projects, Education, LearningJourney, Contact } from './sections/Sections.jsx'
export default function App() {
  return (<><div className="bg" aria-hidden="true" /><Navbar /><main><Hero /><About /><Skills /><Projects /><Education /><LearningJourney /><Contact /></main><Footer /></>)
}
