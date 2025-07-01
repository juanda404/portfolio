const Headers = ()=>{
    return(
        <header className="fixed top-0 w-full .bg-custom-background z-50 shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-heading text-xl font-bold"> Juan David Santamaría</h1>
                <ul className="flex space-x-6 text-custom-secondary font-medium text-sm ">
                    <li><a href="#about" className="hover:text-custom-primary transition">About</a></li>
                    <li><a href="#experience" className="hover:text-custom-primary transition">Experience</a></li>
                    <li><a href="#projects" className="hover:text-custom-primary transition">Projects</a></li>
                    <li>
                        <a href="/src/assets/HOJADEVIDA2025.pdf" target="black" rel="noopener noreferrer" className="hover:text-custom-primary transition">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Headers