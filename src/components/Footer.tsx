import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top section with navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-white/70 hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Social</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/nazifmhd"
                className="text-white/70 hover:text-white transform hover:scale-110 transition-all"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nazifmhd/"
                className="text-white/70 hover:text-white transform hover:scale-110 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:mohamednazif2001@gmail.com"
                className="text-white/70 hover:text-white transform hover:scale-110 transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <p className="text-white/70">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <a 
              href="https://wa.me/+94778521218"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-center md:text-left">
            © {currentYear} Mohamed Nazif . All rights reserved.
          </p>
          <p className="text-white/70 flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}