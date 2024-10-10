import About from "./assets/components/about/About"
import ContactMe from "./assets/components/Contact-Me/Contact-me"
import Header from "./assets/components/header/Header"
import Home from "./assets/components/home/Home"
import Projects from "./assets/components/projects/Projects"
import Services from "./assets/components/services/Services"

function App() {
  return(
  <>
  <Header />
  <div className="h-screen w-screen bg-slate-200 overflow-hidden flex justify-center items-center md:items-start">
  <Home />
  </div>
  <About />
  <Services />
  <Projects />
  <ContactMe />
  </>
  )
}

export default App
