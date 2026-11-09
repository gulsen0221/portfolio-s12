import { useSite } from "../context/SiteContext";

export default function Skills() {
  const { skills } = useSite().content;

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-5xl font-semibold text-ink dark:text-white mb-6">
        {skills.title}
      </h2>
      <ul className="grid md:grid-cols-3 gap-10">
        {skills.list.map((skill) => (
          <li key={skill.name}>
            <h3 className="text-3xl text-primary dark:text-accent mb-4">
              {skill.name}
            </h3>
            <p className="text-sm text-muted dark:text-gray-300 max-w-xs">
              {skill.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}