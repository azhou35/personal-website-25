import React, { useState } from 'react';

type RabbitHoleCategory = 'All' | 'Tech' | 'Art' | 'Science' | 'Culture';

interface RabbitHole {
  title: string;
  description: string;
  tags: string[];
  category: RabbitHoleCategory;
  url: string;
}

const RabbitHoles = () => {
  const [selectedCategory, setSelectedCategory] = useState<RabbitHoleCategory>('All');

  const rabbitHoles: RabbitHole[] = [
    {
      title: "permeability to wonder",
      description: "noodles",
      tags: [],
      category: "Culture",
      url: "https://azhou35.github.io/digitalgarden/permeability-to-wonder"
    },
    {
      title: "Large Language Models & Consciousness",
      description: "Exploring the philosophical implications of language models and the nature of machine consciousness.",
      tags: ["AI", "Philosophy", "Consciousness"],
      category: "Tech",
      url: "https://example.com/llm-consciousness"
    },
    {
      title: "Digital Gardens & Personal Knowledge Management",
      description: "How non-linear note-taking and digital gardens are changing the way we think about knowledge sharing.",
      tags: ["PKM", "Learning", "Web"],
      category: "Culture",
      url: "https://example.com/digital-gardens"
    }
  ];

  const categories: RabbitHoleCategory[] = ['All', 'Tech', 'Art', 'Science', 'Culture'];

  const filteredHoles = rabbitHoles.filter(hole => 
    selectedCategory === 'All' ? true : hole.category === selectedCategory
  );

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-medium">Rabbit Holes 🕳️</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        diving into rabbit holes, chasing wonder, and connecting dots. 
        </p>
        
        <div className="flex gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors
                ${selectedCategory === category 
                  ? 'bg-blue-600 text-white dark:bg-blue-500' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <div className="space-y-12">
        {filteredHoles.map((hole) => (
          <a 
            key={hole.title} 
            href={hole.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-4 group cursor-pointer"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-blue-600 dark:text-blue-400">{hole.category}</span>
              </div>
              <h3 className="font-serif text-xl font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {hole.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {hole.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {hole.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-50 dark:bg-gray-800/50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RabbitHoles; 