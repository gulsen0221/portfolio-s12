import { useSite } from "../context/SiteContext";

export default function Skills() {
  const { skills } = useSite().content;

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-10">
        {skills.title}
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {skills.list.map((skill) => (
          <li key={skill.name} className="flex flex-col items-center gap-3">
            <img
              src={skill.image}
              alt=""
              className="w-24 h-24 rounded-lg object-contain"
            />
            <span className="uppercase text-gray-500 dark:text-gray-300">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}