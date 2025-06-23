import React from 'react';
import { Play, Users, Eye, ThumbsUp, ExternalLink, Music, Headphones } from 'lucide-react';

const YouTube: React.FC = () => {
  const videos = [
    {
      title: 'Original Composition: "Molecular Dreams"',
      thumbnail: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '15.2K',
      likes: '892',
      duration: '4:23',
      url: '#',
      type: 'Original',
    },
    {
      title: 'Piano Cover: "Bohemian Rhapsody"',
      thumbnail: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '28.7K',
      likes: '1.3K',
      duration: '6:15',
      url: '#',
      type: 'Cover',
    },
    {
      title: 'Acoustic Session: "Study Vibes"',
      thumbnail: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '9.8K',
      likes: '567',
      duration: '12:45',
      url: '#',
      type: 'Session',
    },
    {
      title: 'Electronic Fusion: "Lab Rhythms"',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '22.1K',
      likes: '1.1K',
      duration: '5:38',
      url: '#',
      type: 'Electronic',
    },
  ];

  const stats = [
    { icon: Users, label: 'Subscribers', value: '8.5K' },
    { icon: Eye, label: 'Total Views', value: '245K' },
    { icon: ThumbsUp, label: 'Total Likes', value: '12.8K' },
    { icon: Music, label: 'Original Tracks', value: '47' },
  ];

  return (
    <section id="youtube" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Music Channel
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
              Welcome to my musical world! Here I share original compositions, covers, 
              and acoustic sessions that blend my love for music with creative expression. 
              From piano melodies to electronic fusion, explore the soundtrack of my journey.
            </p>
          </div>

          {/* Channel Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-primary/5 transition-colors group"
              >
                <div className="bg-primary/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-text mb-2">{stat.value}</div>
                <div className="text-sm text-textSecondary">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Videos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-text mb-8 text-center flex items-center justify-center">
              <Headphones className="mr-3 text-primary" size={28} />
              Latest Tracks
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary rounded-full p-4">
                        <Play size={24} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {video.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    
                    <div className="flex items-center justify-between text-sm text-textSecondary mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{video.views} views</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <ThumbsUp size={14} />
                          <span>{video.likes}</span>
                        </span>
                      </div>
                    </div>

                    <a
                      href={video.url}
                      className="inline-flex items-center space-x-2 text-primary hover:text-accent font-medium transition-colors"
                    >
                      <span>Listen Now</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe CTA */}
          <div className="text-center bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Music className="text-primary mr-3" size={32} />
              <h3 className="text-2xl font-bold text-text">
                Subscribe for New Music!
              </h3>
            </div>
            <p className="text-textSecondary mb-6 max-w-2xl mx-auto">
              Join my musical journey and be the first to hear new original compositions, 
              covers, and acoustic sessions. New content uploaded weekly!
            </p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-primary hover:bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
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