export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}