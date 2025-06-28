import React, { useEffect, useRef } from 'react';
import { Play, Users, Eye, ThumbsUp, ExternalLink, Music, Headphones, Award, Heart } from 'lucide-react';

const YouTube: React.FC = () => {
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

  const videos = [
    {
      title: 'Recorder Music Therapy Session - "Healing Melodies"',
      thumbnail: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '2.1K',
      likes: '156',
      duration: '8:23',
      url: 'https://youtube.com/@candpixie',
      type: 'Therapy',
    },
    {
      title: 'Recorder Cover: "Canon in D" - Pachelbel',
      thumbnail: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '5.7K',
      likes: '342',
      duration: '4:15',
      url: 'https://youtube.com/@candpixie',
      type: 'Cover',
    },
    {
      title: 'Original Composition: "Laboratory Dreams"',
      thumbnail: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '1.8K',
      likes: '98',
      duration: '6:45',
      url: 'https://youtube.com/@candpixie',
      type: 'Original',
    },
    {
      title: 'Recorder Advocacy: "Why Recorder Matters"',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '3.2K',
      likes: '187',
      duration: '12:38',
      url: 'https://youtube.com/@candpixie',
      type: 'Educational',
    },
  ];

  const achievements = [
    {
      title: 'ABRSM Grade 8 Recorder',
      description: 'Achieved Distinction level in 2021',
      icon: Award,
    },
    {
      title: 'Music Therapy Advocate',
      description: 'Promoting positivity through therapeutic music',
      icon: Heart,
    },
    {
      title: 'Recorder Instrument Advocacy',
      description: 'Raising awareness for underappreciated instruments',
      icon: Music,
    },
  ];

  const stats = [
    { icon: Users, label: 'Subscribers', value: '1.2K' },
    { icon: Eye, label: 'Total Views', value: '15.8K' },
    { icon: ThumbsUp, label: 'Total Likes', value: '783' },
    { icon: Music, label: 'Videos Published', value: '24' },
  ];

  return (
    <section ref={sectionRef} id="youtube" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 animate-on-scroll">
              MeloMed.io - Music Channel
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8 animate-on-scroll-scale"></div>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              Welcome to MeloMed.io! My YouTube channel dedicated to spreading positivity and optimism 
              through recorder music covers with music therapy principles. Advocating for the therapeutic 
              power of music and the beauty of the recorder instrument.
            </p>
          </div>

          {/* Channel Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-primary/5 transition-colors group animate-on-scroll-scale animate-card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors animate-bounce-in">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-text mb-2">{stat.value}</div>
                <div className="text-sm text-textSecondary">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Music Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text mb-8 text-center flex items-center justify-center animate-on-scroll-left">
              <Award className="mr-3 text-primary" size={28} />
              Musical Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-primary/5 transition-colors animate-on-scroll animate-card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-rotate-in">
                    <achievement.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-text mb-2">{achievement.title}</h4>
                  <p className="text-sm text-textSecondary">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Videos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-text mb-8 text-center flex items-center justify-center animate-on-scroll-right">
              <Headphones className="mr-3 text-primary" size={28} />
              Latest Videos
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer animate-on-scroll animate-card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary rounded-full p-4 animate-bounce-in">
                        <Play size={24} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium animate-fade-in-left">
                      {video.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    
                    <div className="flex items-center justify-between text-sm text-textSecondary mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1 animate-fade-in-up">
                          <Eye size={14} />
                          <span>{video.views} views</span>
                        </span>
                        <span className="flex items-center space-x-1 animate-fade-in-up delay-100">
                          <ThumbsUp size={14} />
                          <span>{video.likes}</span>
                        </span>
                      </div>
                    </div>

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary hover:text-accent font-medium transition-colors transform hover:scale-105"
                    >
                      <span>Watch Now</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe CTA */}
          <div className="text-center bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg animate-on-scroll">
            <div className="flex items-center justify-center mb-4">
              <Music className="text-primary mr-3 animate-float" size={32} />
              <h3 className="text-2xl font-bold text-text">
                Join the MeloMed.io Community!
              </h3>
            </div>
            <p className="text-textSecondary mb-6 max-w-2xl mx-auto">
              Subscribe to experience the healing power of music through recorder performances, 
              original compositions, and music therapy sessions. New therapeutic content uploaded regularly!
            </p>
            <a
              href="https://youtube.com/@candpixie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-primary hover:bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 animate-bounce-in"
            >
              <Play size={24} fill="white" />
              <span>Subscribe on YouTube</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;