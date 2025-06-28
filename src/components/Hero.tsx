import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Music } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-surface/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-surface/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-surface/5 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-surface/20 backdrop-blur-sm border-4 border-surface/30 flex items-center justify-center text-6xl font-bold text-text shadow-xl">
              🎵
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 animate-fade-in-up delay-200">
            Engineering Student & Aspiring Innovator
          </h1>
          
          <p className="text-xl md:text-2xl text-textSecondary mb-8 animate-fade-in-up delay-400">
            Chemical & Biomolecular Engineering | Musician | Researcher
          </p>
          
          <p className="text-lg md:text-xl text-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-600">
            NYU Tandon School of Engineering student passionate about bridging science and art through 
            engineering innovation, medical research, and musical expression. Founder of MedicSFacts 
            and advocate for interdisciplinary science education.
          </p>

          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up delay-800">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface/20 backdrop-blur-sm hover:bg-surface/30 text-text p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-surface/30"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface/20 backdrop-blur-sm hover:bg-surface/30 text-text p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-surface/30"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://youtube.com/@candpixie"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface/20 backdrop-blur-sm hover:bg-surface/30 text-text p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-surface/30"
            >
              <Music size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="bg-surface/20 backdrop-blur-sm hover:bg-surface/30 text-text p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-surface/30"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text hover:text-textSecondary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;