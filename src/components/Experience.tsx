import React, { useEffect, useRef } from 'react';
import { Award, Heart, Users, BookOpen, Globe, Stethoscope, GraduationCap, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
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
              }, index * 120);
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

  const volunteerWork = [
    {
      title: 'Rites of Passage Program',
      organization: 'Australia',
      period: 'Aug 2023',
      duration: '24 days',
      description: 'Participated in intensive personal development and leadership program.',
      icon: Globe,
    },
    {
      title: 'St. John Ambulance First Aid',
      organization: 'Certified Provider',
      period: 'Aug 2023 - Aug 2025',
      duration: '2 years',
      description: 'Certified in emergency first aid and medical response.',
      icon: Heart,
    },
    {
      title: 'Tutoring Service',
      organization: 'Community Education',
      period: 'Jul-Aug 2024',
      duration: '2 months',
      description: 'Provided academic support for junior secondary and primary school students.',
      icon: BookOpen,
    },
    {
      title: 'Coastal Conservation Program',
      organization: 'SPCC',
      period: 'Feb 2023',
      duration: '1 month',
      description: 'Environmental conservation work protecting coastal ecosystems.',
      icon: Globe,
    },
  ];

  const certifications = [
    {
      title: 'Brighton and Sussex Medical School',
      type: 'Virtual Work Experience',
      year: '2024',
      description: 'Comprehensive medical school experience program.',
      icon: Stethoscope,
    },
    {
      title: 'IELTS English Proficiency',
      type: 'Score: 8.0/9.0',
      year: '2024',
      description: 'High-level English language proficiency certification.',
      icon: GraduationCap,
    },
    {
      title: 'DELE Spanish Certification',
      type: 'A2 Escolar - B1 Level',
      year: '2023',
      description: 'Intermediate Spanish language proficiency.',
      icon: Globe,
    },
  ];

  const academicExperience = [
    {
      title: 'IEEE Young Engineers Conference',
      role: 'Researcher & Speaker',
      period: 'Nov 2023',
      description: 'Presented research on light pollution impact in Hong Kong. Received commendations for innovative solutions.',
      achievements: ['Research Publication', 'Conference Presentation', 'HKU Speaking Engagement'],
      icon: Award,
    },
    {
      title: 'International Junior Science Olympiad',
      role: 'Team Member',
      period: 'Nov 2021 - May 2022',
      description: 'Intensive training program at CUHK for international science competition.',
      achievements: ['Advanced Scientific Training', 'International Competition Preparation'],
      icon: Award,
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 animate-on-scroll">
              Experience & Service
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8 animate-on-scroll-scale"></div>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              My commitment to community service, academic excellence, and professional development 
              through volunteer work, certifications, and research experiences.
            </p>
          </div>

          {/* Academic Research Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text mb-8 flex items-center animate-on-scroll-left">
              <Award className="mr-3 text-primary animate-float" size={28} />
              Academic Research Experience
            </h3>
            <div className="space-y-6">
              {academicExperience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-primary/5 transition-colors animate-on-scroll-right animate-card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 rounded-full p-3 flex-shrink-0 animate-rotate-in">
                      <exp.icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold text-text">{exp.title}</h4>
                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full animate-fade-in-left">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-textSecondary font-medium mb-3">{exp.role}</p>
                      <p className="text-textSecondary mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium animate-fade-in-up"
                            style={{ animationDelay: `${achIndex * 0.1}s` }}
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Work */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text mb-8 flex items-center animate-on-scroll-right">
              <Heart className="mr-3 text-primary animate-float-delayed" size={28} />
              Volunteer Service
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {volunteerWork.map((volunteer, index) => (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-primary/5 transition-colors animate-on-scroll animate-card-hover"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 rounded-full p-3 flex-shrink-0 animate-bounce-in">
                      <volunteer.icon size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-bold text-text">{volunteer.title}</h4>
                        <span className="text-xs text-primary font-medium animate-fade-in-right">{volunteer.duration}</span>
                      </div>
                      <p className="text-textSecondary font-medium mb-2">{volunteer.organization}</p>
                      <p className="text-sm text-textSecondary mb-2">{volunteer.description}</p>
                      <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full animate-scale-in">
                        {volunteer.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-text mb-8 flex items-center animate-on-scroll-left">
              <GraduationCap className="mr-3 text-primary animate-float-slow" size={28} />
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-primary/5 transition-colors animate-on-scroll-scale animate-card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-rotate-in">
                    <cert.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-text mb-2">{cert.title}</h4>
                  <p className="text-primary font-medium mb-2">{cert.type}</p>
                  <p className="text-sm text-textSecondary mb-3">{cert.description}</p>
                  <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full animate-fade-in-up">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;