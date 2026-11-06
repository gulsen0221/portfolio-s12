const icon = (name, file = `${name}-original`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${file}.svg`;

const skillList = [
  { name: "HTML", image: icon("html5") },
  { name: "CSS", image: icon("css3") },
  { name: "JavaScript", image: icon("javascript") },
  { name: "React", image: icon("react") },
  { name: "Node.js", image: icon("nodejs") },
  { name: "PHP", image: icon("php") },
  { name: "MySQL", image: icon("mysql") },
  { name: "Git", image: icon("git") },
  { name: "Figma", image: icon("figma") },
];

const links = {
  email: "gulsenhatunsimsek@gmail.com",
  github: "https://github.com/gulsen0221",
  linkedin: "https://www.linkedin.com/in/gulsen-simsek/",
};

export const data = {
  tr: {
    header: {
      switchLang: "ENGLISH'E GEÇ",
      darkMode: "KARANLIK MOD",
      lightMode: "AYDINLIK MOD",
      nav: ["Yetenekler", "Projeler", "İletişim"],
    },
    hero: {
      greeting: "Merhaba! 👋",
      title: "Ben Gülsen. Full-stack geliştiriciyim.",
      description:
        "Arayüzden veritabanına, uçtan uca web siteleri ve yazılımlar geliştiriyorum. Burada üzerinde çalıştığım projeleri bulabilirsin.",
    },
    skills: {
      title: "Yetenekler",
      list: skillList,
    },
    profile: {
      title: "Profil",
      basicTitle: "Temel Bilgiler",
      info: [
        { label: "Eğitim", value: "Başkent Üniversitesi, Yönetim Bilişim Sistemleri" },
        { label: "Tercih Ettiği Rol", value: "Full-stack Geliştirici" },
        { label: "Şu An", value: "Şirket yazılımı geliştiriyor, serbest web projeleri yapıyor" },
      ],
      aboutTitle: "Hakkımda",
      about: [
        "Başkent Üniversitesi Yönetim Bilişim Sistemleri mezunuyum. Bu sayede bir yazılıma yalnızca teknik açıdan değil, çözmesi gereken iş problemi açısından da bakıyorum.",
        "Bugün bir şirketin yazılımını sıfırdan geliştiriyor, serbest çalışan olarak da müşterilerime web siteleri hazırlıyorum. Bir fikri bir ürüne dönüştürmeyi seviyorum.",
      ],
    },
    projects: {
      title: "Projeler",
      viewSite: "Siteyi Gör",
      list: [
        {
          id: 1,
          name: "Aselasya",
          description:
            "Angular ile baştan sona geliştirdiğim kadın giyim e-ticaret sitesi. Kampanya slider'ı, koleksiyon menüleri, ürün arama, favoriler, sepet, üyelik ve sipariş takibi gibi temel akışları bileşen tabanlı bir yapıyla kurdum.",
          tags: ["angular", "node.js"],
          github: "https://github.com/gulsen0221/aselasya_",
          live: "https://aselasya.vercel.app",
          image: "/images/aselasya.png",
        },
        {
          id: 2,
          name: "Kargo Hesaplama",
          description:
            "Next.js ve Tailwind CSS ile geliştirdiğim, kargo ücretlerini hesaplayan küçük bir web uygulaması.",
          tags: ["next.js", "tailwind"],
          github: "https://github.com/gulsen0221/KargoUcretHesaplama",
          live: "",
          image: "/images/kargo.png",
        },
      ],
    },
    footer: {
      title: "Bir sonraki projen üzerinde birlikte çalışalım.",
      ...links,
    },
  },

  en: {
    header: {
      switchLang: "TÜRKÇE'YE GEÇ",
      darkMode: "DARK MODE",
      lightMode: "LIGHT MODE",
      nav: ["Skills", "Projects", "Contact"],
    },
    hero: {
      greeting: "Hi! 👋",
      title: "I'm Gülsen. I'm a full-stack developer.",
      description:
        "From interface to database, I build websites and software end to end. Here you can find the projects I've been working on.",
    },
    skills: {
      title: "Skills",
      list: skillList,
    },
    profile: {
      title: "Profile",
      basicTitle: "Basic Information",
      info: [
        { label: "Education", value: "Başkent University, Management Information Systems" },
        { label: "Preferred Role", value: "Full-stack Developer" },
        { label: "Currently", value: "Building company software, freelancing on web projects" },
      ],
      aboutTitle: "About Me",
      about: [
        "I graduated from Başkent University in Management Information Systems, so I look at software not only technically but also through the business problem it needs to solve.",
        "Today I'm building a company's software from scratch, and as a freelancer I create websites for my clients. What I love most is taking an idea and turning it into a working product.",
      ],
    },
    projects: {
      title: "Projects",
      viewSite: "View Site",
      list: [
        {
          id: 1,
          name: "Aselasya",
          description:
            "A women's fashion e-commerce site I built end to end with Angular. I implemented the core flows of an online store — campaign slider, collection menus, product search, favorites, cart, membership and order tracking — with a component-based structure.",
          tags: ["angular", "node.js"],
          github: "https://github.com/gulsen0221/aselasya_",
          live: "https://aselasya.vercel.app",
          image: "/images/aselasya.png",
        },
        {
          id: 2,
          name: "Shipping Calculator",
          description:
            "A small web app built with Next.js and Tailwind CSS that calculates shipping costs.",
          tags: ["next.js", "tailwind"],
          github: "https://github.com/gulsen0221/KargoUcretHesaplama",
          live: "",
          image: "/images/kargo.png",
        },
      ],
    },
    footer: {
      title: "Let's work together on your next project.",
      ...links,
    },
  },
};