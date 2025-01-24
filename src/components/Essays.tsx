import React, { useState } from 'react';

type EssayCategory = 'All' | 'Prose' | 'Technical' | 'Strategy';

interface Essay {
  title: string;
  excerpt: string;
  tags: string[];
  category: EssayCategory;
  url: string;
}

const Essays = () => {
  const [selectedCategory, setSelectedCategory] = useState<EssayCategory>('All');

  const essays: Essay[] = [
    {
      title: "equilibrium",
      excerpt: "2024 reflection via physics lessons",
      tags: ["Reflection"],
      category: "Prose",
      url: "https://substack.com/@anniewhere/p-153911638"
    },
    {
      title: "to love with abandon",
      excerpt: "Notes on unconditional love and parenthood.",
      tags: ["Nostalgia"],
      category: "Prose",
      url: "https://anniewhere.substack.com/p/to-love-without-expectation?utm_source=profile&utm_medium=reader2"
    },
    {
      title: "lost in translation",
      excerpt: "Notes on culture and language.",
      tags: ["Culture"],
      category: "Prose",
      url: "https://anniewhere.substack.com/p/lost-in-translation?utm_source=profile&utm_medium=reader2"
    },
    {
      title: "Together AI",
      excerpt: "Research Memo on Together AI.",
      tags: ["AI"],
      category: "Strategy",
      url: "https://research.contrary.com/company/together-ai"
    },
    {
      title: "Monte Carlo",
      excerpt: "Research Memo on data observability.",
      tags: ["AI"],
      category: "Strategy",
      url: "https://research.contrary.com/company/monte-carlo"
    },
    {
      title: "AWS Machine Learning Tutorials",
      excerpt: "Research Memo on Together AI.",
      tags: ["AI"],
      category: "Technical",
      url: "https://research.contrary.com/company/together-ai"
    },
  ];

  const categories: EssayCategory[] = ['All', 'Prose', 'Technical', 'Strategy'];

  const filteredEssays = essays.filter(essay => 
    selectedCategory === 'All' ? true : essay.category === selectedCategory
  );

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-medium">
          Essays
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          entryway into my mindspace as i explore identity, the future of technology, and the language within it all.
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
        {filteredEssays.map((essay) => (
          <a 
            key={essay.title} 
            href={essay.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-4 group cursor-pointer"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-blue-600 dark:text-blue-400">{essay.category}</span>
              </div>
              <h3 className="font-serif text-xl font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {essay.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {essay.excerpt}
            </p>
            <div className="flex gap-2 flex-wrap">
              {essay.tags.map((tag) => (
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

export default Essays;