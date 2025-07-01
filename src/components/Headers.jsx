import { useState } from "react"
import {Menu, X} from 'lucide-react'

const Headers = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header className="fixed top-0 w-full bg-custom-background z-50 shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center" role="navigation" aria-label="Main navigation">
                <h1 className="text-heading text-xl font-bold"> Juan David Santamaría</h1>
                {/*buttom hamburguer*/}

                <button className="md:hidden text-custom-secondary focus:outline-none focus:ring" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}> {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                 {/* Navegación */}
                    <ul className={`${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-custom-background px-6 py-4 space-y-4 md:static md:flex md:space-y-0 md:space-x-6 md:w-auto md:bg-transparent text-custom-secondary font-medium text-sm`}>
                    <li><a href="#about" className="hover:text-custom-primary transition block">About</a></li>
                    <li><a href="#experience" className="hover:text-custom-primary transition block">Experience</a></li>
                    <li><a href="#projects" className="hover:text-custom-primary transition block">Projects</a></li>
                    <li><a href="#resume" className="hover:text-custom-primary transition block">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Headers