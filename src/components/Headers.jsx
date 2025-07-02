import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-custom-background bg-opacity-95 shadow-md backdrop-blur" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center" role="navigation">
        <h1 className="text-heading text-xl font-bold">Juan David Santamaría</h1>
        <ul className="hidden md:flex space-x-6 text-custom-secondary font-medium text-sm">
          {["about", "experience", "projects", "resume"].map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-custom-primary transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;