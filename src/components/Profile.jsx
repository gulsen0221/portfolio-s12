import { useSite } from "../context/SiteContext";

export default function Profile() {
  const { profile } = useSite().content;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-5xl font-semibold text-ink dark:text-white mb-6">
        {profile.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <article>
          <h3 className="text-3xl text-primary dark:text-accent mb-4">
            {profile.basicTitle}
          </h3>
          <dl className="grid grid-cols-[10rem_1fr] gap-y-3">
            {profile.info.map((item) => (
              <div key={item.label} className="contents">
                <dt className="font-semibold text-black dark:text-white">
                  {item.label}
                </dt>
                <dd className="text-ink dark:text-gray-300">{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <article>
          <h3 className="text-3xl text-primary dark:text-accent mb-4">
            {profile.aboutTitle}
          </h3>
          {profile.about.map((p, i) => (
            <p key={i} className="text-muted dark:text-gray-300 mb-4">
              {p}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
}