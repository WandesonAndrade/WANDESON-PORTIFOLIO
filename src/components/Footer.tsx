import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const navItems = ["Sobre", "Projetos", "Ensino", "Tecnologias"];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Links de navegação */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-wrap justify-center md:justify-start gap-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={`/#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Informações de contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>(99) 98123-8658</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                <span>wandesonaandrade@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>Caxias, Maranhão</span>
              </li>
            </ul>

            {/* Redes sociais */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/wandesonandrade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-orange-300 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/wandesonandrade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Wandeson Andrade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
