import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="m-4">
        <div className="flex flex-col lg:flex-row justify-between mx-[64px]  border-white">
          <div className="left lg:w-1/2 py-4">
            <h1 className="text-[196px] border-t-2 w-100 sm:text-lg md:text-xl lg:text-5xl font-bold pt-8">
              Subhankar
            </h1>
            <p className="text-[16px] font-light text-left text-white sm:text-lg md:text-xl lg:text-lg mt-2">
              I'm open to new opportunities! With strong design skills and
              growing development expertise, I bring a unique mix that can add
              real value to your next project. Let's connect!
            </p>
          </div>
          <div className="right lg:w-1/2 flex flex-col sm:flex-row lg:flex-row gap-4 justify-center lg:justify-end items-center lg:items-end py-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 py-2 px-4 rounded-full"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              <span className="text-white text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 py-2 px-4 rounded-full"
            >
              <img src="/x.svg" alt="Twitter" className="w-5 h-5" />
              <span className="text-white text-sm sm:text-base">Twitter</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 py-2 px-4 rounded-full"
            >
              <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
              <span className="text-white text-sm sm:text-base">GitHub</span>
            </a>
            <a
              href="https://dribbble.com/subhankarchoudhury"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 py-2 px-4 rounded-full"
            >
              <img src="/dribbble.svg" alt="Dribbble" className="w-5 h-5" />
              <span className="text-white text-sm sm:text-base">Dribbble</span>
            </a>
          </div>
        </div>
        <div className="text-white text-center py-6 border-t border-white/20">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} Subhankar Choudhury. All rights
            reserved.
          </p>
          <p className="text-xs sm:text-sm mt-2">
            Built with ❤️ using React and Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
