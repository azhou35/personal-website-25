import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Essays from './components/Essays';
import About from './components/About';
import MoreAbout from './components/MoreAbout';
import ThemeToggle from './components/ThemeToggle';
import Gallery from './components/Gallery';

const navigation = [
  { name: "About", href: "more-about" },
  { name: "Field Notes", href: "essays" },
  { name: "Gallery", href: "gallery" }];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Make isDark available globally
  (window as any).isDarkMode = isDark;

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // optional: support deep links like /#gallery or /#more-about
  useEffect(() => {
    const initial = window.location.hash.replace('#', '') || 'about';
    setActiveSection(initial);

    const handleHashChange = () => {
      const section = window.location.hash.replace('#', '') || 'about';
      setActiveSection(section);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Preload gallery images in background
  useEffect(() => {
    const imageUrls = [
      '/photos/image1.jpg',
      '/photos/photo2.JPG',
      '/photos/photo3.JPG',
      '/photos/photo4.JPG',
      '/photos/photo5.JPG',
      '/photos/photo6.JPG',
      '/photos/photo7.jpg',
      '/photos/photo8.JPG',
      '/photos/photo9.jpg',
      '/photos/photo10.JPG',
      '/photos/photo11.JPG',
      '/photos/photo12.jpg'
    ];
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  const goto = (section: string) => {
    setActiveSection(section);
    window.location.hash = section;
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen transition-colors duration-300" style={{ 
        backgroundColor: isDark ? '#000000' : '#fbf9f5', 
        color: isDark ? '#ffffff' : '#2c3d2c' 
      }}>
        {/* ===== NAVIGATION ===== */}
        <nav className="fixed w-full backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50" style={{ backgroundColor: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(251, 249, 245, 0.8)' }}>
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Chinese character links to "About" */}
            <button
              onClick={() => goto('about')}
              className={`text-2xl font-serif font-medium transition-colors pl-4`}
              style={{ color: isDark ? '#ffffff' : '#2c3d2c' }}
            >
              周
            </button>

            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => goto(item.href)}
                  title={item.title}
                  className={`text-sm transition-colors`}
                  style={{ color: isDark ? '#ffffff' : '#2c3d2c' }}
                >
                  {item.name}
                </button>
              ))}
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>
        </nav>

        {/* ===== MAIN CONTENT ===== */}
        <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
          {activeSection === 'about' && <About />}
          {activeSection === 'more-about' && <MoreAbout />}
          {activeSection === 'essays' && <Essays />}
          {activeSection === 'gallery' && <Gallery />}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-8 flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">built with 🍵</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/azhou35"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/annie-zhouuuu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:anniezhou35@gmail.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;