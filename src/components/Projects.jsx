import { useSite } from "../context/SiteContext";

export default function Projects() {
  const { projects } = useSite().content;

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-8">
        {projects.title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.list.map((project) => (
          <article
            key={project.id}
            className="flex flex-col bg-white dark:bg-dark-card rounded-xl shadow overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl text-primary dark:text-accent mb-3">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-1">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 my-4">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-primary text-primary dark:border-accent dark:text-accent text-sm px-3 py-1 rounded"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-medium underline text-primary dark:text-accent">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
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