import Contactsection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Whats from "../components/Whats.component";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* WhatsApp */}
      <Whats />

      {/* Menu de navegação */}
      <Navbar />

      {/* Seção Contato */}
      <Contactsection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default ContactPage;
