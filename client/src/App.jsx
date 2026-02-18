import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import ExpertiseStrip from './sections/ExpertiseStrip'
import About from './sections/About'
import Projects from './sections/Projects'
import Research from './sections/Research'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <ExpertiseStrip />
        <About />
        <Projects />
        <Research />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
