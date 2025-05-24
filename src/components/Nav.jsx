import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 px-9 absolute z-1000 w-full">
      <nav className="container ml-[1rem] flex items-center justify-between">
        <a
          href="#home"
          className="text-white font-[playfair-display] font-bold leading-none flex items-center min-w-[2.5rem] min-h-[2.5rem] text-[2.5rem]"
        >
          s.
        </a>

        <ul className=" flex  text-white space-x-6 ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-playfair leading-normal text-lg text-slate-gray"
                onClick={(e) => {
                  const targetId = item.href.replace("#", "");
                  const section = document.getElementById(targetId);
                  if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          {/* <img src={hamburger} alt="hamburger icon" width={25} height={25} /> */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
