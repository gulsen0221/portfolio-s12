import { useSite } from "../context/SiteContext";

export default function Header() {
  const { content, theme, lang, toggleTheme, toggleLang } = useSite();
  const { header } = content;
  const isDark = theme === "dark";
  const links = ["#skills", "#projects", "#contact"];

  return (
    <header className="max-w-6xl mx-auto px-4 py-6">
      {}
      <div className="flex justify-end items-center gap-4 text-sm font-bold">
        <button
          role="switch"
          aria-checked={isDark}
          onClick={toggleTheme}
          className="flex items-center gap-2"
        >
          <span
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              isDark ? "bg-gray-600" : "bg-primary"
            }`}
          >
            <span
              className={`block w-4 h-4 rounded-full bg-yellow-300 transition-transform ${
                isDark ? "translate-x-6" : ""
              }`}
            />
          </span>
          <span className="text-gray-500 dark:text-gray-300">
            {isDark ? header.lightMode : header.darkMode}
          </span>
        </button>

        <span className="text-gray-400">|</span>

        <button
          onClick={toggleLang}
          aria-label={lang === "tr" ? "Switch to English" : "Türkçe'ye geç"}
          className="flex gap-1"
        >
          <span className={lang === "tr" ? "text-primary dark:text-accent" : "text-gray-400"}>
            TR
          </span>
          <span className="text-gray-400">/</span>
          <span className={lang === "en" ? "text-primary dark:text-accent" : "text-gray-400"}>
            EN
          </span>
        </button>
      </div>

      {}
      <nav aria-label="Ana menü" className="flex justify-between items-center mt-6">
        <a
          href="#"
          aria-label="Ana sayfa"
          className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl -rotate-12"
        >
          G
        </a>
        <ul className="flex items-center gap-6 sm:gap-10 text-gray-500 dark:text-gray-300">
          {header.nav.map((item, i) => (
            <li key={item}>
              <a
                href={links[i]}
                className={
                  i === links.length - 1
                    ? "border border-primary text-primary dark:text-white dark:bg-white/10 px-5 py-2 rounded-md"
                    : "hover:text-primary"
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}