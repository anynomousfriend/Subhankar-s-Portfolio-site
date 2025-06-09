import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-transparent"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-9 py-8 flex items-center justify-between">
        <a
          href="#hero"
          className="text-white font-display font-bold leading-none flex items-center min-w-[2.5rem] min-h-[2.5rem] text-[2.5rem]"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
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
                className="font-sans leading-normal text-lg text-slate-gray hover:text-white transition-colors"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (!item.href.startsWith("mailto:") && !item.isExternal) {
                    e.preventDefault();
                    const targetId = item.href.replace("#", "");
                    const section = document.getElementById(targetId);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
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
