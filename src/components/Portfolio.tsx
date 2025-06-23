import React from 'react';
import { ExternalLink, Github, Beaker, Users, Lightbulb, Award, Microscope, FlaskConical } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Sustainable Biofuel Production Process',
      description: 'Designed and optimized a novel biofuel production process using algae biomass, achieving 25% higher efficiency than conventional methods through process integration and heat recovery.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Process Design', 'MATLAB', 'Aspen Plus', 'Sustainability Analysis'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Beaker,
      category: 'Engineering',
    },
    {
      title: 'Biomedical Device Sterilization Study',
      description: 'Conducted comprehensive research on sterilization methods for biomedical devices, comparing effectiveness of different techniques and developing improved protocols.',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Research', 'Data Analysis', 'Laboratory Testing', 'Technical Writing'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Microscope,
      category: 'Research',
    },
    {
      title: 'Student Engineering Society',
      description: 'Founded and led a student organization focused on promoting engineering excellence, organizing workshops, and connecting students with industry professionals.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Leadership', 'Event Management', 'Community Building', 'Networking'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Users,
      category: 'Leadership',
    },
    {
      title: 'Enzyme Kinetics Modeling Tool',
      description: 'Developed a computational tool for modeling enzyme kinetics in biochemical processes, helping students and researchers visualize complex reaction mechanisms.',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Biochemical Modeling'],
      liveUrl: '#',
      githubUrl: '#',
      icon: FlaskConical,
      category: 'Software',
    },
    {
      title: 'Waste-to-Energy Optimization',
      description: 'Designed an innovative waste-to-energy conversion system for campus sustainability, reducing waste by 40% while generating renewable energy.',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Process Engineering', 'Sustainability', 'Energy Systems', 'Environmental Impact'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Lightbulb,
      category: 'Sustainability',
    },
    {
      title: 'Music Technology Startup',
      description: 'Co-founded a startup developing innovative music technology solutions, bridging the gap between traditional music creation and modern digital tools.',
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Entrepreneurship', 'Product Development', 'Music Technology', 'Business Strategy'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Award,
      category: 'Entrepreneurship',
    },
  ];

  const categories = ['All', 'Engineering', 'Research', 'Leadership', 'Software', 'Sustainability', 'Entrepreneurship'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Projects & Organizations
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
              A showcase of my engineering projects, research work, organizations I've founded, 
              and side projects that demonstrate my passion for innovation and community building.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface/50 text-textSecondary hover:bg-primary/10 hover:text-primary border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <project.icon size={48} className="text-white" />
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
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Details</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 bg-surface hover:bg-primary/10 text-text border border-border hover:border-primary px-4 py-2 rounded-lg transition-all font-medium text-sm"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;