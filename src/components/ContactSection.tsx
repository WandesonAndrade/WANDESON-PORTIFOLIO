import { ContactForm } from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contato" className="px-4 bg-gray-100 dark:bg-gray-800 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        Entre em Contato
      </h2>

      <div className=" gap-12 items-center">
        {/* Formulário de Contato */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
