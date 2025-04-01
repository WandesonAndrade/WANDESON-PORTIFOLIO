import { ContactForm } from "./ContactForm";

const Contactsection = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Entre em Contato
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contactsection;
