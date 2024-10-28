import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'An exceptional developer who consistently delivers high-quality solutions. Their expertise in cloud architecture transformed our infrastructure.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer at InnovateTech',
    content: 'Outstanding technical skills and a deep understanding of DevOps practices. They helped us reduce deployment time significantly.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager at CloudSys',
    content: 'A brilliant problem-solver who brings both technical expertise and strategic thinking to every project. Truly a valuable asset to any team.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative group hover:bg-white/15 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-purple-400/20 transform group-hover:scale-110 transition-transform" size={48} />
              
              <p className="text-white/80 mb-6 relative z-10">{testimonial.content}</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}