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
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled && !isMenuOpen
          ? "bg-black/90 backdrop-blur-sm border-b border-transparent"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-9 py-8 flex items-center justify-between relative">
        {/* Logo */}
        <a
          href="#hero"
          className="text-white font-display font-bold leading-none flex items-center min-w-[2.5rem] min-h-[2.5rem] text-[2.5rem] z-[1001]"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMenuOpen(false);
          }}
        >
          s.
        </a>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen
              ? "fixed top-0 left-0 w-full min-h-screen flex items-center justify-center bg-black z-[999]"
              : "hidden"
          } md:hidden`}
        >
          <ul className="flex flex-col items-center justify-center gap-16 -mt-20">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="relative transform transition-all duration-300 hover:scale-110"
              >
                <a
                  href={item.href}
                  className="font-sans text-3xl font-medium text-white/80 hover:text-white tracking-wide py-4 px-8 block transition-all duration-300"
                  onClick={(e) => {
                    if (!item.href.startsWith("mailto:") && !item.isExternal) {
                      e.preventDefault();
                      const targetId = item.href.replace("#", "");
                      const section = document.getElementById(targetId);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        setIsMenuOpen(false);
                        document.body.style.overflow = "auto";
                      }
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-sans text-lg text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
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
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden z-[1001] text-2xl"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
};

export default Nav;
