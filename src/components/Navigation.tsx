import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  return (
    <nav className="flex gap-6">
      <button
        onClick={() => setActiveSection('about')}
        className={`${
          activeSection === 'about'
            ? 'text-gray-900 dark:text-gray-100'
            : 'text-gray-600 dark:text-gray-400'
        } hover:text-gray-900 dark:hover:text-gray-100 transition-colors`}
      >
        About
      </button>
      <button
        onClick={() => setActiveSection('essays')}
        className={`${
          activeSection === 'essays'
            ? 'text-gray-900 dark:text-gray-100'
            : 'text-gray-600 dark:text-gray-400'
        } hover:text-gray-900 dark:hover:text-gray-100 transition-colors`}
      >
        Essays
      </button>
      <button
        onClick={() => setActiveSection('gallery')}
        className={`${
          activeSection === 'gallery'
            ? 'text-gray-900 dark:text-gray-100'
            : 'text-gray-600 dark:text-gray-400'
        } hover:text-gray-900 dark:hover:text-gray-100 transition-colors`}
      >
        Gallery
      </button>
    </nav>
  );
};

export default Navigation;