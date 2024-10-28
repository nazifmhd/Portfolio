import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading cloud infrastructure and deployment automation initiatives',
    achievements: [
      'Implemented GitOps workflow reducing deployment time by 60%',
      'Architected multi-cloud infrastructure serving 1M+ users',
      'Led team of 5 engineers in modernizing CI/CD pipeline'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2020 - 2022',
    description: 'Developed scalable web applications using MERN stack',
    achievements: [
      'Built microservices architecture handling 100K daily requests',
      'Reduced application load time by 40% through optimization',
      'Implemented real-time features using WebSocket'
    ]
  },
  {
    title: 'Cloud Engineer',
    company: 'CloudTech Solutions',
    period: '2018 - 2020',
    description: 'Managed cloud infrastructure and optimization',
    achievements: [
      'Reduced cloud costs by 30% through resource optimization',
      'Implemented auto-scaling solutions for high-traffic periods',
      'Developed infrastructure as code using Terraform'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.title}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-0 top-0 w-4 h-4 rounded-full bg-purple-500 transform -translate-x-1/2 md:translate-x-[-50%] z-10" />
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 ml-6 md:ml-0">
                <div className="flex items-center mb-2">
                  <Briefcase className="text-purple-400 mr-2" size={20} />
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                </div>
                <div className="flex items-center text-white/70 mb-4">
                  <Calendar className="mr-2" size={16} />
                  <span>{exp.period}</span>
                </div>
                <p className="text-white/80 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li 
                      key={achievement}
                      className="text-white/70 text-sm flex items-start"
                    >
                      <span className="mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}