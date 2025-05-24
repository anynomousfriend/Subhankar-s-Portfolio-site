import Work from "../components/Work";
import { experience } from "../constants";

const WorkExp = () => {
  return (
    <section id="experience" className="max-container">
      <div className="work p-5 md:p-4 md:mt-[4.125rem] md:mb-4 md:ml-[4rem] text-white">
        <h1>Work Experience.</h1>
      </div>

      <div className="card ">
        {experience.map((experience) => (
          <Work key={experience.name} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
