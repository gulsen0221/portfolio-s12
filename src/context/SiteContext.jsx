import { createContext, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { data } from "../data/data";
import api from "../api/api";

const SiteContext = createContext();

const prefersDark =
  window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

const messages = {
  tr: { pending: "İçerik yükleniyor...", success: "İçerik yüklendi", error: "Sunucuya ulaşılamadı, yerel veri kullanılıyor" },
  en: { pending: "Loading content...", success: "Content loaded", error: "Server unreachable, using local data" },
};

export function SiteProvider({ children }) {
  const [lang, setLang] = useLocalStorage("lang", "tr");
  const [theme, setTheme] = useLocalStorage("theme", prefersDark ? "dark" : "light");
  const [content, setContent] = useState(data[lang]); // ilk anda yerel veri
  const cache = useRef({});

  const toggleLang = () => setLang((p) => (p === "tr" ? "en" : "tr"));
  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;

    if (cache.current[lang]) {
      setContent(cache.current[lang]);
      return;
    }

    const request = api.post("/workintech", data[lang]);

    toast.promise(request, messages[lang]);

    request
      .then((res) => {
        cache.current[lang] = res.data;
        setContent(res.data);
      })
      .catch((err) => {
        console.error(err);
        setContent(data[lang]); 
      });
  }, [lang]);

  const value = { lang, theme, toggleLang, toggleTheme, content };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export const useSite = () => useContext(SiteContext);