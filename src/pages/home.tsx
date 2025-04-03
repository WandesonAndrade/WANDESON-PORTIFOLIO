import EducationSection from "../components/EducationSection";
import Footer from "../components/Footer";
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

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default HomePage;
