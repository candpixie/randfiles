import React from 'react';
import { Mail, Github, Linkedin, Music } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:your.email@example.com',
      color: 'hover:text-red-500'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com',
      color: 'hover:text-gray-700'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    { 
      icon: Music, 
      label: 'YouTube', 
      href: 'https://youtube.com',
      color: 'hover:text-red-600'
    },
  ];

  return (
    <section id="contact" className="py-16 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          <p className="text-lg text-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating on engineering projects, music, or just want to chat? 
            Feel free to reach out through any of these platforms.
          </p>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className={`group flex flex-col items-center space-y-3 p-6 bg-background/50 backdrop-blur-sm border border-border hover:border-primary rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${social.color}`}
                title={social.label}
              >
                <div className="bg-primary/20 group-hover:bg-primary/30 p-4 rounded-full transition-colors">
                  <social.icon size={28} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-textSecondary text-sm">
              Open to internships, research opportunities, and creative collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;