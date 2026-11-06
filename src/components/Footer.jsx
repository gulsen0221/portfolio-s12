import { useSite } from "../context/SiteContext";

export default function Footer() {
  const { footer } = useSite().content;

  return (
    <footer id="contact" className="bg-gray-50 dark:bg-dark-card mt-12">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white max-w-md">
          {footer.title}
        </h2>
        <a
          href={`mailto:${footer.email}`}
          className="inline-block mt-6 text-red-700 dark:text-accent underline"
        >
          👉 {footer.email}
          <ul className="flex gap-6 mt-6 text-primary dark:text-accent font-medium">
  <li><a href={footer.github} target="_blank" rel="noreferrer">GitHub</a></li>
  <li><a href={footer.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
</ul>
        </a>
      </div>
    </footer>
  );
}