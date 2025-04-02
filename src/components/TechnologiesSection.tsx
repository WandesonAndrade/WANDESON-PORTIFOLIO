import { Code } from "lucide-react";
import { technologies } from "../data/technologies";

const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Tecnologias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <Code className="w-8 h-8 mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-medium">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
