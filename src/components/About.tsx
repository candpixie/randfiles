import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Globe, Languages, Music, Microscope, Heart, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      institution: 'New York University, Tandon School of Engineering',
      degree: 'Bachelor of Science - Chemical and Biomolecular Engineering',
      period: 'Sep 2025 - May 2029',
      status: 'Current',
    },
    {
      institution: "St Paul's Co-educational College",
      degree: 'Hong Kong Diploma of Secondary Education (HKDSE)',
      period: '2022 - 2025',
      details: 'English Society Secretary, Class Captain, Physics & Psychology Olympiad Teams',
    },
    {
      institution: 'Marymount Secondary School',
      degree: 'Secondary Education',
      period: '2019 - 2022',
      details: 'Academic Excellence Scholarship, International Junior Science Olympiad Training',
    },
  ];

  const skills = {
    technical: [
      'Graphic Design (Figma, Adobe Illustrator)',
      'Python Programming',
      'Machine Learning & AI',
      '3D Fabrication',
      'Data Analysis',
      'Academic Research',
      'Project Management',
    ],
    soft: [
      'Teaching & Mentoring',
      'Debate & Public Speaking',
      'Scientific Writing',
      'Music Composition',
      'Leadership',
      'Community Building',
    ],
    languages: [
      'English (IELTS: 8.0/9)',
      'Cantonese (Native)',
      'Mandarin (Fluent)',
      'Spanish (Intermediate A2-B1)',
    ],
    arts: [
      'ABRSM Grade 8 Recorder (Distinction)',
      'ABRSM Grade 8 Piano (Merit)',
      'ABRSM Grade 8 Violin',
      'RAD Grade 8 Ballet',
      'Music Theory Grade 5 (96/100)',
    ],
  };

  const stats = [
    { icon: GraduationCap, label: 'Academic Awards', value: '15+' },
    { icon: Music, label: 'Music Certifications', value: '8' },
    { icon: Globe, label: 'Languages', value: '4' },
    { icon: Award, label: 'Research Projects', value: '5+' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 animate-on-scroll">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8 animate-on-scroll-scale"></div>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              A goal-driven and innovative aspiring engineer, hoping to leverage music and business into healthcare and biotech. 
              Currently studying Chemical & Biomolecular Engineering at NYU while building organizations and creating music.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-primary/5 transition-colors group animate-on-scroll-scale animate-card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-text mb-2">{stat.value}</div>
                <div className="text-sm text-textSecondary">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text mb-8 flex items-center animate-on-scroll-left">
              <GraduationCap className="mr-3 text-primary" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-primary/5 transition-colors animate-on-scroll-right animate-card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-lg font-bold text-text">{edu.institution}</h4>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-textSecondary font-medium mb-2">{edu.degree}</p>
                  {edu.details && (
                    <p className="text-sm text-textSecondary">{edu.details}</p>
                  )}
                  {edu.status && (
                    <span className="inline-block mt-2 text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                      {edu.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 animate-on-scroll animate-card-hover">
              <div className="bg-primary/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Microscope size={20} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-text mb-4">Technical Skills</h4>
              <div className="space-y-2">
                {skills.technical.map((skill, index) => (
                  <div
                    key={index}
                    className="text-sm text-textSecondary bg-primary/5 px-3 py-2 rounded-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 animate-on-scroll animate-card-hover">
              <div className="bg-primary/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Heart size={20} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-text mb-4">Soft Skills</h4>
              <div className="space-y-2">
                {skills.soft.map((skill, index) => (
                  <div
                    key={index}
                    className="text-sm text-textSecondary bg-primary/5 px-3 py-2 rounded-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 animate-on-scroll animate-card-hover">
              <div className="bg-primary/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Languages size={20} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-text mb-4">Languages</h4>
              <div className="space-y-2">
                {skills.languages.map((language, index) => (
                  <div
                    key={index}
                    className="text-sm text-textSecondary bg-primary/5 px-3 py-2 rounded-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 animate-on-scroll animate-card-hover">
              <div className="bg-primary/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Music size={20} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-text mb-4">Arts Certifications</h4>
              <div className="space-y-2">
                {skills.arts.map((cert, index) => (
                  <div
                    key={index}
                    className="text-sm text-textSecondary bg-primary/5 px-3 py-2 rounded-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;