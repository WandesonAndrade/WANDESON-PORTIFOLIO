import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Site Parais Internet",
    description:
      "Uma plataforma web desenvolvida com React, TypeScript e Tailwind CSS para um provedor de internet. O site apresenta um design moderno e responsivo, oferecendo informações sobre os planos disponíveis. Além disso, inclui um formulário para solicitação de serviços, facilitando a comunicação entre clientes e a empresa.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://paraisointernet.com.br/",
    githubUrl: "https://github.com/WandesonAndrade/FRONT-PROVEDOR",
    image:
      "https://id7.com.br/wp-content/uploads/2017/10/desenvolvimento-de-site-intelipost-medio-02.png",
  },
  {
    id: 2,
    title: "Simulador de Tabela de Futebol",
    description:
      "Um simulador de tabela de futebol desenvolvido com JavaScript, HTML e CSS. Permite simulação de partidas e atualização automática da classificação, calculando pontos, saldo de gols e outras estatísticas. Conta com um design responsivo e intuitivo para facilitar a visualização dos dados.",
    technologies: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://simulador-tabela-futebol.vercel.app/",
    githubUrl: "https://github.com/WandesonAndrade/SIMULADOR-TABELA-FUTEBOL",
    image:
      "https://www.shutterstock.com/image-photo/bright-soccer-playerl-on-black-600nw-238282909.jpg",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "Uma aplicação web para gerenciamento de tarefas, desenvolvida com React, TypeScript e Sass. Permite a criação, edição e exclusão de tarefas, além de notificações para melhor organização. Utiliza React Router para navegação, Axios para requisições e React Toastify para feedback interativo",
    technologies: ["React", "TypeScript", "Sass"],
    demoUrl: "https://fsc-task-manager-frontend-lyart.vercel.app/tasks",
    githubUrl: "https://github.com/WandesonAndrade/fsc-task-manager-frontend",
    image:
      "https://estudareaprender.com/wp-content/uploads/listas-de-tarefas-significado-1024x576.jpeg",
  },
  {
    id: 4,
    title: "Task Manager API",
    description:
      "Uma API desenvolvida com Node.js, Express e MongoDB para gerenciamento de tarefas. Oferece endpoints para criação, atualização, exclusão e recuperação de tarefas, garantindo uma comunicação eficiente com o frontend. Utiliza Mongoose para modelagem dos dados, dotenv para gerenciamento de variáveis de ambiente e CORS para controle de acesso entre domínios.",
    technologies: ["Node.js", "Express", "MongoDB"],
    demoUrl: "https://fsc-task-manager-frontend-lyart.vercel.app/tasks",
    githubUrl:
      "https://github.com/WandesonAndrade/WandesonAndrade-FSC-TASK-MANAGER-BACKEND",
    image:
      "https://estudareaprender.com/wp-content/uploads/listas-de-tarefas-significado-1024x576.jpeg",
  },
];
