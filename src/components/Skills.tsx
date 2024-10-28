import React from 'react';
import { 
  Database, Server, Cloud, Code2, Git, Container, 
  Monitor, Globe, Cpu, Shield, Settings, Terminal 
} from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Monitor, items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
  { name: 'DevOps', icon: Container, items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'] },
  { name: 'Cloud', icon: Cloud, items: ['AWS', 'Azure', 'GCP', 'Terraform'] },
  { name: 'Tools', icon: Settings, items: ['Git', 'VS Code', 'Postman', 'Linux'] },
  { name: 'Security', icon: Shield, items: ['OAuth', 'JWT', 'HTTPS', 'WAF'] },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item}
                      className="text-white/70 bg-white/5 rounded-lg px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}