import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSite } from "./context/SiteContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const { theme } = useSite();

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} theme={theme} />
    </div>
  );
}

export default App;