import React from 'react';
import { Code2, Cloud, Database } from 'lucide-react';
import nazif from '../photos/nazif.jpg';

export default function About() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={nazif}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg">
              <Code2 className="text-purple-500" size={24} />
            </div>
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg">
              <Cloud className="text-blue-500" size={24} />
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer and DevOps enthusiast with a strong foundation in modern web technologies 
              and cloud infrastructure. With expertise in the MERN stack and a deep understanding of DevOps practices, 
              I bridge the gap between development and operations.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Database className="text-blue-400 mb-4" size={24} />
                <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
                <p className="text-white/70">Building scalable applications with modern technologies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Cloud className="text-purple-400 mb-4" size={24} />
                <h3 className="text-xl font-semibold text-white mb-2">DevOps</h3>
                <p className="text-white/70">Automating deployment and infrastructure management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}