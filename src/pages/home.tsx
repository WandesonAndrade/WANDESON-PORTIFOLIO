import Contactsection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import HereoSection from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import TechnologiesSection from "../components/TechnologiesSection";

const HomePage = () => {
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
};

export default HomePage;
