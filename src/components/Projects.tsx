import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Cloud Infrastructure Dashboard',
    description: 'Real-time monitoring dashboard for cloud resources and metrics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    technologies: ['Vue.js', 'AWS', 'GraphQL', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'DevOps Pipeline Automation',
    description: 'Automated CI/CD pipeline with advanced deployment strategies',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80',
    technologies: ['Jenkins', 'Kubernetes', 'GitOps', 'ArgoCD'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}