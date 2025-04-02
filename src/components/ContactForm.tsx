import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setEnviado(true);

    // Simula o reset do formulário após envio
    setTimeout(() => {
      setFormData({ nome: "", email: "", mensagem: "" });
      setEnviado(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6  p-6 rounded-lg "
    >
      <div>
        <label
          htmlFor="nome"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nome
        </label>
        <input
          type="text"
          id="nome"
          required
          placeholder="Digite seu nome"
          className="mt-1 block w-full rounded-md border-gray-100 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white p-2"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="Digite seu e-mail"
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white p-2"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="mensagem"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Mensagem
        </label>
        <textarea
          id="mensagem"
          required
          rows={4}
          placeholder="Digite sua mensagem"
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white p-2"
          value={formData.mensagem}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={!formData.nome || !formData.email || !formData.mensagem}
        className={`w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
          ${
            !formData.nome || !formData.email || !formData.mensagem
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          }`}
      >
        <Send className="w-4 h-4 mr-2" />
        {enviado ? "Enviado!" : "Enviar Mensagem"}
      </button>

      {enviado && (
        <p
          className="text-green-600 dark:text-green-400 text-center mt-2"
          aria-live="polite"
        >
          Mensagem enviada com sucesso!
        </p>
      )}
    </form>
  );
}
