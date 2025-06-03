import React from "react";
import {
  SiDocker,
  SiPortainer,
  SiFigma,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql, // Using PostgreSQL as a common representation for SQL
  SiVercel,
  SiNodedotjs,
  SiSolidity,
  SiEthereum
} from "react-icons/si";

function TechStackIcons() {
  const techSkills = [
    {
      id: "docker",
      icon: <SiDocker size={30} color="#2496ED" />,
      text: "Docker",
    },
    {
      id: "portainer",
      icon: <SiPortainer size={30} color="#18B8AE" />,
      text: "Portainer",
    },
    { id: "figma", icon: <SiFigma size={30} color="#F24E1E" />, text: "Figma" },
    { id: "react", icon: <SiReact size={30} color="#61DAFB" />, text: "React" },
    { id: "html", icon: <SiHtml5 size={30} color="#E34F26" />, text: "HTML5" },
    { id: "css", icon: <SiCss3 size={30} color="#1572B6" />, text: "CSS3" },
    {
      id: "javascript",
      icon: <SiJavascript size={30} color="#F7DF1E" />,
      text: "JavaScript",
    },
    { id: "git", icon: <SiGit size={30} color="#F05032" />, text: "Git" },
    {
      id: "github",
      icon: (
        <SiGithub
          size={30}
          className="text-white group-hover:text-black transition-colors duration-200"
        />
      ),
      text: "GitHub",
    },
    {
      id: "tailwind",
      icon: <SiTailwindcss size={30} color="#06B6D4" />,
      text: "Tailwind CSS",
    },
    {
      id: "solidity",
      icon: <SiSolidity size={30} color="#06B6D4" />,
      text: "Solidity",
    },
    {
      id: "ethereum",
      icon: <SiEthereum size={30} color="#3C3C3C" />,
      text: "Ethereum",
    },

    // {
    //   id: "mongodb",
    //   icon: <SiMongodb size={30} color="#47A248" />,
    //   text: "MongoDB",
    // },
    // {
    //   id: "sql",
    //   icon: <SiPostgresql size={30} color="#336791" />,
    //   text: "SQL (PostgreSQL)",
    // }, // Explicitly stating PostgreSQL


    {
      id: "vercel",
      icon: (
        <SiVercel
          size={30}
          className="text-white group-hover:text-black transition-colors duration-200"
        />
      ),
      text: "Vercel",
    },
    {
      id: "node",
      icon: <SiNodedotjs size={30} color="#339933" />,
      text: "Node.js",
    },
  ];

  return (
    <div className="p-6 bg-black rounded-lg shadow-xl max-w-7xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-white mb-12 text-center">
      My Tech & Tools.
      </h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {techSkills.map((skill) => (
          <li
            key={skill.id}
            className="flex flex-col items-center justify-center p-3 border  rounded-lg shadow-sm
                hover:bg-blue-50 hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <div className="mb-2">{skill.icon}</div>
            <span className="text-sm font-medium text-white text-center whitespace-nowrap group-hover:text-black">
              {skill.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechStackIcons;
