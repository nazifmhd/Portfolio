import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Facebook, Users } from 'lucide-react';
import axios from 'axios';

interface SocialStats {
  github: number;
  linkedin: number;
  facebook: number;
}

export default function Hero() {
  const [socialStats, setSocialStats] = useState<SocialStats>({ github: 0, linkedin: 0, facebook: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialStats = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/social-stats');
        setSocialStats(response.data);
      } catch (error) {
        console.error('Failed to fetch social stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialStats();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray animate-gradient">
        <div className="absolute inset-0 opacity-30">
          
        </div>
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[8px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
          Mohamed Nazif
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-white/90 animate-fade-in-delay-1">
          Machine Learning Enthusiast & Software Developer
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
        Building scalable applications and exploring machine learning models.
        Passionate about data-driven solutions and modern software development practices.
        </p>
        
        {/* Social links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-delay-3">
          <a href="https://github.com/nazifmhd" className="text-white/90 hover:text-white transform hover:scale-110 transition-all">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nazifmhd/" className="text-white/90 hover:text-white transform hover:scale-110 transition-all">
            <Linkedin size={24} />
          </a>
          <a href="mailto:mohamednazif2001@gmail.com" className="text-white/90 hover:text-white transform hover:scale-110 transition-all">
            <Mail size={24} />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/80" size={42} />
        </div>
      </div>
    </section>
  );
}