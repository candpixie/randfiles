import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Beaker, Users, Lightbulb, Award, Microscope, FlaskConical, Briefcase, Heart, GraduationCap } from 'lucide-react';

const Portfolio: React.FC = () => {
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
              }, index * 150);
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

  const projects = [
    {
      title: 'MedicSFacts - Non-Profit Organization',
      description: 'Founded and lead a non-profit organization promoting interdisciplinary science and disease awareness. Editor-in-Chief of Neuroplasticizer Newsletter, engaged 3.6k+ viewers across 4+ continents through social media campaigns.',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Leadership', 'Graphic Design', 'Content Creation', 'Community Building'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Users,
      category: 'Leadership',
    },
    {
      title: 'MeloMed.io - Music Therapy Initiative',
      description: 'YouTube channel spreading positivity through recorder music covers with music therapy principles. Advocates for recorder instrument awareness and therapeutic music applications.',
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Music Therapy', 'Content Creation', 'Recorder Performance', 'Video Production'],
      liveUrl: 'https://youtube.com/@candpixie',
      githubUrl: '#',
      icon: Heart,
      category: 'Music',
    },
    {
      title: 'Light Pollution Research - IEEE Conference',
      description: 'Conducted comprehensive research on light pollution impact on Hong Kong citizens and ecosystem. Presented findings at IEEE Young Engineers Conference and HKU, received commendations.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Research', 'Data Analysis', 'Environmental Science', 'Public Speaking'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Microscope,
      category: 'Research',
    },
    {
      title: 'Rehabilitation Robotics Project',
      description: 'Designed innovative rehabilitation products for stroke patients at Hong Kong Academy for Gifted Education. Focused on assistive technology and patient-centered design solutions.',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Robotics', 'Product Design', '3D Fabrication', 'Healthcare Technology'],
      liveUrl: '#',
      githubUrl: '#',
      icon: FlaskConical,
      category: 'Engineering',
    },
  ];

  const experiences = [
    {
      title: 'Admin/Engineer Intern',
      company: 'China Resource Crement & Redland Concrete',
      period: 'Aug 2024',
      description: 'Gained hands-on experience in construction materials and quality control processes.',
      icon: Briefcase,
    },
    {
      title: 'Physician Surgical Attachment',
      company: 'Queen Mary Hospital - Dr. Lydia Lau',
      period: 'Aug 2024',
      description: 'Observed surgical procedures and gained insights into medical practice and patient care.',
      icon: Heart,
    },
    {
      title: 'Healthcare Attachment Programme',
      company: 'CUHK',
      period: 'Nov 2023',
      description: 'Explored healthcare systems and medical research methodologies.',
      icon: GraduationCap,
    },
    {
      title: 'Bookstore Owner',
      company: 'Independent Business',
      period: 'Jun-Aug 2024',
      description: 'Sold 50+ reference books and supplies, generated $2k revenue while serving local community needs.',
      icon: Award,
    },
  ];

  const categories = ['All', 'Leadership', 'Music', 'Research', 'Engineering'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 animate-on-scroll">
              Projects & Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8 animate-on-scroll-scale"></div>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              A showcase of my research projects, organizations I've founded, internships, 
              and initiatives that demonstrate my passion for innovation and community impact.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 animate-on-scroll-scale ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface/50 text-textSecondary hover:bg-primary/10 hover:text-primary border border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll animate-card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <project.icon size={48} className="text-white animate-bounce-in" />
                  </div>
                  <div className="absolute top-3 right-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium animate-fade-in-up"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm transform hover:scale-105"
                    >
                      <ExternalLink size={14} />
                      <span>Details</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 bg-surface hover:bg-primary/10 text-text border border-border hover:border-primary px-4 py-2 rounded-lg transition-all font-medium text-sm transform hover:scale-105"
                    >
                      <Github size={14} />
                      <span>More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-text mb-8 text-center flex items-center justify-center animate-on-scroll-left">
              <Briefcase className="mr-3 text-primary" size={28} />
              Professional Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-primary/5 transition-colors animate-on-scroll-right animate-card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 rounded-full p-3 flex-shrink-0 animate-rotate-in">
                      <exp.icon size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-bold text-text">{exp.title}</h4>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <p className="text-textSecondary font-medium mb-2">{exp.company}</p>
                      <p className="text-sm text-textSecondary">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;