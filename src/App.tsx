import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import YouTube from './components/YouTube';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-all duration-300" style={{ backgroundColor: 'var(--color-background)' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <YouTube />
          <Contact />
        </main>
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;