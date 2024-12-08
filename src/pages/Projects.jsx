import { ProjectCard } from "../components/ProjectCard";
import projectsdata from "../data/projects.json";

export const Projects = () => {
  return (
    <div className="mb-16">
      <h1 className="text-3xl font-bold dark:text-white mt-16 mb-4">Projects</h1>
      <p className="dark:text-white/70 mb-10 max-w-xl">
        Projects are my go-to for learning new technologies and applying them. 
        Each project represents a journey of exploration and skill-building.
      </p>
      <div className="grid grid-cols-1 gap-10">
        {projectsdata.map((value, index) => (
          <ProjectCard
            key={index}
            Title={value.Title}
            Description={value.Description}
            Link={value.Link}
            Technologies={value.Technologies}
          />
        ))}
      </div>
    </div>
  );
};