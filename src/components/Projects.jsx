import { useSite } from "../context/SiteContext";

export default function Projects() {
  const { projects } = useSite().content;

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-5xl font-semibold text-ink dark:text-white mb-8">
        {projects.title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.list.map((project) => (
          <article key={project.id} className="flex flex-col">
            <img
              src={project.image}
              alt={project.name}
              className="h-44 w-full object-cover"
            />
            <div className="pt-4 flex flex-col flex-1">
              <h3 className="text-3xl text-primary dark:text-accent mb-3">
                {project.name}
              </h3>
              <p className="text-sm text-muted dark:text-gray-300 flex-1">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 my-4">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-primary-strong text-primary-strong dark:border-accent dark:text-accent text-sm px-4 py-0.5 rounded"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-medium underline text-primary-strong dark:text-accent">
                <a href={project.github} target="_blank" rel="noreferrer">
                  Github
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    {projects.viewSite}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}