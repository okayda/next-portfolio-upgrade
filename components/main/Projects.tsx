import ProjectContent from "../sub/ProjectContent";
import { projects } from "@/constants";

export default function Projects() {
  return (
    <section className="my-36" itemScope itemType="https://schema.org/ItemList">
      <div className="mx-auto grid max-w-[410px] gap-10 sm:max-w-[800px] sm:grid-cols-2 sm:gap-4 lg:max-w-[1260px] lg:grid-cols-3 lg:gap-6">
        {projects.map((project, i) => (
          <ProjectContent
            key={i}
            view={project.view}
            code={project.code}
            technologies={project.technologies}
            src={project.img}
            title={project.title}
            position={1}
          />
        ))}
      </div>
    </section>
  );
}
