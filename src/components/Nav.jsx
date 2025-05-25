import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 px-9 absolute z-1000 w-full">
      <nav className="container ml-[1rem] flex items-center justify-between">
        <a
          href="#home"
          className="text-white font-[playfair-display] font-bold leading-none flex items-center min-w-[2.5rem] min-h-[2.5rem] text-[2.5rem]"
        >
          s.
        </a>

        <ul
          className={`text-white space-x-6 md:flex ${
            isMenuOpen
              ? "flex flex-col fixed inset-0 bg-black bg-opacity-90 items-center justify-center space-y-8 space-x-0 z-50"
              : "hidden"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-playfair leading-normal text-lg text-slate-gray hover:text-white transition-colors"
                onClick={(e) => {
                  const targetId = item.href.replace("#", "");
                  const section = document.getElementById(targetId);
                  if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false); // Close menu after clicking
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          {isMenuOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-8 right-8 text-white md:hidden"
            >
              ✕
            </button>
          )}
        </ul>
        {!isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="text-white md:hidden z-50 text-2xl"
          >
            ☰
          </button>
        )}
      </nav>
    </header>
  );
};

export default Nav;
