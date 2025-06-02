import Work from "../components/Work";
import { experience } from "../constants";

const WorkExp = () => {
  return (
    <section id="experience" className="max-container">
      <div className="work px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Work Experience.</h1>
      </div>

      <div className="card">
        {experience.map((experience) => (
          <Work key={experience.name} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
