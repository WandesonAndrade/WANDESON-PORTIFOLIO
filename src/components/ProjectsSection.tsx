import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
