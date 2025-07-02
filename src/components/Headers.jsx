import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; // Iconos

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ["about", "experience", "projects", "resume"];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-custom-background bg-opacity-95 shadow-md backdrop-blur" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center" role="navigation">
        <h1 className="text-heading text-xl font-bold">Juan David Santamaría</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-custom-secondary font-medium text-sm">
          {navItems.map((section) => (
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

        {/* Mobile menu toggle */}
        <button onClick={toggleMenu} className="md:hidden text-custom-secondary">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-custom-background bg-opacity-95 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-custom-secondary font-medium text-base">
            {navItems.map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-custom-primary transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;