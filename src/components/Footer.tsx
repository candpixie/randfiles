import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-text text-background py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">John Doe</h3>
              <p className="text-background/80 max-w-2xl mx-auto">
                Creative Developer & Content Creator passionate about building amazing 
                digital experiences and sharing knowledge with the world.
              </p>
            </div>

            <div className="border-t border-background/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2 text-background/80">
                  <span>Made with</span>
                  <Heart size={16} className="text-red-400" fill="currentColor" />
                  <span>by John Doe</span>
                </div>
                
                <div className="text-background/80">
                  © {new Date().getFullYear()} All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-6 right-6 bg-background/20 hover:bg-background/30 text-background p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;