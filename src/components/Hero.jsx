import { useSite } from "../context/SiteContext";

export default function Hero() {
  const { hero, footer } = useSite().content;
  const btn =
    "flex items-center gap-2 px-5 py-2 rounded-md border border-primary-strong font-medium";

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1">
        <p className="flex items-center gap-2 text-primary dark:text-accent">
          <span className="w-20 h-px bg-primary dark:bg-accent" />
          {hero.name}
        </p>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-ink dark:text-white">
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </h1>
        <p className="mt-6 max-w-md text-muted dark:text-gray-300">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className={`${btn} bg-primary-strong text-white`}>
            {hero.hireMe}
          </a>
          <a href={footer.github} target="_blank" rel="noreferrer"
             className={`${btn} text-primary-strong dark:text-white`}>
            Github
          </a>
          <a href={footer.linkedin} target="_blank" rel="noreferrer"
             className={`${btn} text-primary-strong dark:text-white`}>
            Linkedin
          </a>
        </div>
      </div>
      <img
        src="/images/profile.jpg"
        alt={hero.name}
        className="w-full max-w-sm aspect-4/3 object-cover rounded-2xl shadow-2xl"
      />
    </section>
  );
}