const HereoSection = () => {
  return (
    <section id="about" className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <img
            src="public/wandeson.jpeg"
            alt="Perfil"
            className="w-32 h-32 rounded-full mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold mb-4">Wandeson Andrade</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Desenvolvedor Full Stack
          </h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400">
            Sou desenvolvedor apaixonado por criar soluções inovadoras
            utilizando HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS,
            Node.js, Git e GitHub. Busco oportunidades para aplicar meus
            conhecimentos e contribuir com projetos que desafiem minha
            criatividade e ampliem minhas habilidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HereoSection;
