import './App.css'
import Headers from './components/Headers'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {

  return (
    <>
      <Headers></Headers>
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  )
}

export default App
