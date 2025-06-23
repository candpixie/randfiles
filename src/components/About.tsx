import React from 'react';
import { Beaker, Music, Users, Lightbulb, Award, BookOpen, Microscope, Heart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'Biochemical Engineering',
    'Process Design',
    'Music Production',
    'Audio Engineering',
    'Leadership',
    'Project Management',
    'Research & Development',
    'Team Building',
  ];

  const stats = [
    { icon: Beaker, label: 'Engineering Projects', value: '15+' },
    { icon: Music, label: 'Music Tracks', value: '50+' },
    { icon: Users, label: 'Organizations Founded', value: '3' },
    { icon: Award, label: 'Academic Achievements', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
              A passionate biochemical engineering student who finds harmony between scientific innovation 
              and musical creativity, while building communities and leading impactful projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-text mb-6 flex items-center">
                <Microscope className="mr-3 text-primary" size={28} />
                My Journey
              </h3>
              <p className="text-textSecondary mb-6 leading-relaxed">
                As a biochemical engineering student, I'm fascinated by the intersection of biology, 
                chemistry, and engineering principles. My academic journey has led me to explore 
                sustainable biotechnology solutions, process optimization, and innovative approaches 
                to complex biological systems.
              </p>
              <p className="text-textSecondary mb-6 leading-relaxed">
                Beyond the laboratory, music serves as my creative outlet and passion project. 
                Through my YouTube channel, I share original compositions, covers, and musical 
                explorations that reflect my artistic vision and connect with fellow music enthusiasts.
              </p>
              <p className="text-textSecondary mb-8 leading-relaxed">
                My entrepreneurial spirit has driven me to found several organizations, focusing on 
                community building, knowledge sharing, and creating platforms for collaboration. 
                These experiences have taught me valuable lessons in leadership, project management, 
                and the power of bringing people together around shared goals.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-surface/50 backdrop-blur-sm border border-border rounded-lg p-3 text-center hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-sm font-medium text-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <stat.icon size={24} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-text mb-2">{stat.value}</div>
                    <div className="text-sm text-textSecondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values & Interests */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-primary/5 transition-colors">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Beaker size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-text mb-3">Scientific Innovation</h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                Passionate about developing sustainable biotechnology solutions and advancing 
                our understanding of biological processes through engineering principles.
              </p>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-primary/5 transition-colors">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Music size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-text mb-3">Musical Expression</h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                Creating and sharing music that resonates with emotions, tells stories, 
                and connects people across different backgrounds and experiences.
              </p>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-primary/5 transition-colors">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-text mb-3">Community Building</h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                Founding organizations and leading initiatives that bring people together, 
                foster collaboration, and create positive impact in various communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;