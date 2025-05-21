"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface NavigationProps {
  logoSrc: string | StaticImageData;
}

export default function Navigation({ logoSrc }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    // Get the target element
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      // Scroll to the section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without page reload
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold flex gap-4 items-center flex-grow">
          <Image src={logoSrc} height={128} width={128} alt="Logo" className="h-[2em] w-auto object-contain" />
          Tiger Taylor
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <a href="#about" className="hover:underline" onClick={(e) => handleNavLinkClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline" onClick={(e) => handleNavLinkClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline" onClick={(e) => handleNavLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 focus:outline-none">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-56 mt-4 opacity-100 slide-down" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 py-2">
          <li className={`${isMenuOpen ? "menu-item-enter menu-item-enter-active" : ""} delay-75`}>
            <a
              href="#about"
              className="block px-2 py-1 hover:bg-gray-100 rounded"
              onClick={(e) => handleNavLinkClick(e, "about")}
            >
              About
            </a>
          </li>
          <li className={`${isMenuOpen ? "menu-item-enter menu-item-enter-active" : ""} delay-150`}>
            <a
              href="#projects"
              className="block px-2 py-1 hover:bg-gray-100 rounded"
              onClick={(e) => handleNavLinkClick(e, "projects")}
            >
              Projects
            </a>
          </li>
          <li className={`${isMenuOpen ? "menu-item-enter menu-item-enter-active" : ""} delay-300`}>
            <a
              href="#contact"
              className="block px-2 py-1 hover:bg-gray-100 rounded"
              onClick={(e) => handleNavLinkClick(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
