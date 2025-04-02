import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="formacao" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Formação</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold">
                Análise e Desenvolvimento de Sistemas
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">FACEMA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
