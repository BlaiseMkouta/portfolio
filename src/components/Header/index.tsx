import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction de scroll vers une section
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Ferme le menu mobile après un clic
    }
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="flex items-center justify-between gap-6 rounded-full backdrop-blur-md bg-white/5 border border-white/10 px-6 py-3 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <div className="bg-white rounded-full w-3 h-3" />
          <span>MKOUTA LELE</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white text-sm">
          <a
            href="#services"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("acceuil")}
          >
            Acceuil
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("about")}
          >
            A Propos
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("competences")}
          >
            Mes Comptences
          </a>
          <a
            href="#testimonials"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("projets")}
          >
            Projets
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </a>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 p-6 flex flex-col gap-4 text-white text-center text-sm">
          <a
            href="#services"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("acceuil")}
          >
            Acceuil
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("about")}
          >
            A propos
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("competences")}
          >
            Mes Competences
          </a>
          <a
            href="#testimonials"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("projets")}
          >
            Projets
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
