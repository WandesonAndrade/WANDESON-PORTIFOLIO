import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000',
  },
];