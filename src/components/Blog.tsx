import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement scalable microservices architecture using Node.js and Docker.',
    date: '2024-03-15',
    category: 'Backend Development',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80'
  },
  {
    title: 'CI/CD Best Practices with GitHub Actions',
    excerpt: 'Explore modern CI/CD practices and how to implement them effectively using GitHub Actions.',
    date: '2024-03-10',
    category: 'DevOps',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80'
  },
  {
    title: 'Cloud Cost Optimization Strategies',
    excerpt: 'Practical strategies to optimize your cloud infrastructure costs without sacrificing performance.',
    date: '2024-03-05',
    category: 'Cloud Computing',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  }
];

export default function Blog() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="blog">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.title}
              className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center text-sm text-white/60">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center text-sm text-white/60">
                    <Tag size={14} className="mr-1" />
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-white/70 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">{post.readTime}</span>
                  <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}