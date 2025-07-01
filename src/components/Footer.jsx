import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () =>{
    return(
        <footer className="py-10 px-6 text-center text-custom-secondary text-sm">
            <p>
                &copy; {new Date().getFullYear()} Juan David. Built with <span className="text-custom-primary">React & Tailwind CSS</span>
            </p>
            <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/juanda404" target="_blank" rel="noopener noreferrer">
                     <FaGithub className="text-xl hover:text-custom-primary transition" />
                </a>
                <a href="https://linkedin.com/in/juan-david-santamaria/" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin className="text-xl hover:text-custom-primary transition" />
                </a>
                <a href="https://instagram.com/juanda404" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram className="text-2xl hover:text-custom-primary transition" />
                </a>
            </div>
        </footer>
    )
}
export default Footer