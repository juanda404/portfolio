import './App.css'
import Navbar from './components/Headers'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Footer/>
      </main>
    </>
  )
}

export default App
