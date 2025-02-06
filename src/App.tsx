import React from 'react';
import { BookOpen, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import Essays from './components/Essays';
import About from './components/About';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Gallery from './components/Gallery';
import RabbitHoles from './components/RabbitHoles';

const navigation = [
  { name: "About", href: "about" },
  { name: "Essays", href: "essays" },
  { name: "Gallery", href: "gallery" },
  { name: "🕳️", href: "rabbit-holes", title: "Rabbit Holes" },
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <button 
              onClick={() => setActiveSection('about')} 
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-serif font-medium"
            >
              周
            </button>
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => setActiveSection(item.href)}
                  title={item.title}
                  className={`text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    activeSection === item.href ? "text-blue-600 dark:text-blue-400" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          {activeSection === 'about' && <About />}
          {activeSection === 'essays' && <Essays />}
          {activeSection === 'rabbit-holes' && <RabbitHoles />}
          {activeSection === 'gallery' && <Gallery />}
        </main>

        <footer className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              built with 🍵
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/sarahchen" 
                 className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                 aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/annie-zhouuuu/" 
                 className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                 aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="mailto:anniezhou35@gmail.com" 
                 className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                 aria-label="Email Contact">
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