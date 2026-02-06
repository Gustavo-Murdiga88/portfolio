import { Card } from "@/components/card-show-case/widget";

import { projects } from "./data";

export { metadata } from "./meta";

export default async function ProjectsPage() {
  "use cache";
  return (
    <section aria-label="Projetos práticos" className="mx-auto max-w-page">
      <div className="mx-auto my-8 grid max-w-[56.25rem] grid-cols-1 justify-center gap-5 px-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            {...project}
            data-main={index === projects.length - 1 || index === 0}
            data-section="show_case"
            key={project.nameOfProject}
          />
        ))}
      </div>
    </section>
  );
}
