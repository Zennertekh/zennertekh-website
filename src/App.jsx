import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App