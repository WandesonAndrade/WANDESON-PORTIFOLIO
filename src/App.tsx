import { Navbar } from "./components/Navbar";
import HereoSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import EducationSection from "./components/EducationSection";
import Contactsection from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      {/* Seção Sobre Mim */}
      <HereoSection />

      {/* Seção Projetos */}
      <ProjectsSection />

      {/* Seção Formação */}
      <EducationSection />

      {/* Seção Tecnologias */}
      <TechnologiesSection />

      {/* Seção Contato */}
      <Contactsection />
    </div>
  );
}

export default App;
