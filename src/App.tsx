import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding to avoid overlap with fixed navbar */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Blog />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;