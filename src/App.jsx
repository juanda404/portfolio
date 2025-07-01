import './App.css'
import Headers from './components/Headers'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Headers></Headers>
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
