import React from "react";
import { footer } from "../constants";

const Footer = () => {
  const footerData = footer[0]; // Since footer is an array with one object

  return (
    <section>
      <footer className="m-4">
        <div className="flex flex-col lg:flex-row justify-between lg:mx-[64px] border-white">
          <div className="left lg:w-1/2 sm:w-4/5 py-4">
            <h1 className="text-[196px] border-t-2 w-100 sm:text-lg md:text-xl lg:text-5xl font-bold pt-8">
              {footerData.title}
            </h1>
            <p className="text-[16px] p-1 font-light text-left text-white sm:text-lg md:text-xl lg:text-lg mt-2">
              {footerData.description}
            </p>
          </div>
          <div className="right lg:w-1/2 flex flex-col sm:flex-row lg:flex-row gap-4 justify-center lg:justify-end items-center lg:items-end py-8">
            {footerData.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 py-2 px-4 rounded-full"
              >
                <img 
                  src={`/${social.label.toLowerCase()}.svg`} 
                  alt={social.label} 
                  className="w-5 h-5" 
                />
                <span className="text-white text-sm sm:text-base">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="text-white text-center py-6 border-t border-white/20">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} {footerData.title} All rights
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
