import { useSite } from "../context/SiteContext";

export default function Footer() {
  const { footer } = useSite().content;

  return (
    <footer id="contact" className="bg-[#f9f9f9] dark:bg-dark-card mt-12">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-ink dark:text-white max-w-md leading-snug">
          {footer.title}
        </h2>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between gap-6">
          <a
            href={`mailto:${footer.email}`}
            className="text-mail dark:text-accent underline font-medium"
          >
            👉 {footer.email}
          </a>
          <ul className="flex gap-5 font-medium">
            <li>
              <a href={footer.website} target="_blank" rel="noreferrer" className="text-black dark:text-white">
                {footer.websiteLabel}
              </a>
            </li>
            <li>
              <a href={footer.github} target="_blank" rel="noreferrer" className="text-[#00ab6b]">
                Github
              </a>
            </li>
            <li>
              <a href={footer.linkedin} target="_blank" rel="noreferrer" className="text-[#0077b5]">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}