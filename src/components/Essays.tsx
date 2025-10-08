import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Essay {
  title: string;
  type: string;
  year: string;
  url: string;
}

const Essays = () => {
  const essays: Essay[] = [
    {
      title: "equilibrium",
      type: "Prose",
      year: "2024",
      url: "https://substack.com/@anniewhere/p-153911638"
    },
    {
      title: "to love with abandon",
      type: "Prose",
      year: "2024",
      url: "https://anniewhere.substack.com/p/to-love-without-expectation?utm_source=profile&utm_medium=reader2"
    },
    {
      title: "lost in translation",
      type: "Prose",
      year: "2024",
      url: "https://anniewhere.substack.com/p/lost-in-translation?utm_source=profile&utm_medium=reader2"
    },
    {
      title: "Together AI",
      type: "Strategy",
      year: "2023",
      url: "https://research.contrary.com/company/together-ai"
    },
    {
      title: "Monte Carlo",
      type: "Strategy",
      year: "2023",
      url: "https://research.contrary.com/company/monte-carlo"
    },
    {
      title: "AWS Machine Learning Tutorials",
      type: "Technical",
      year: "2022",
      url: "https://aws.amazon.com/machine-learning/tutorials"
    },
    {
      title: "eulogy at the dinner table",
      type: "Prose",
      year: "2023",
      url: "https://www.rainydaymagazine.org/archive/fall-2023"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="space-y-6 text-left pl-4">
        <h2 className="font-serif text-3xl font-medium dark:!text-white">Essays</h2>
        <p className="text-base text-gray-600 dark:!text-white leading-relaxed max-w-2xl">
          Entryway into my mindspace as I explore identity, the future of technology, and the language within it all.
        </p>
      </section>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-[#fbf9f5] dark:bg-gray-900">
            <tr className="border-b-2 border-gray-300 dark:border-gray-700">
              <th scope="col" className="text-left py-4 px-6 font-semibold text-sm dark:!text-white">Title</th>
              <th scope="col" className="text-left py-4 px-6 font-semibold text-sm dark:!text-white">Type</th>
              <th scope="col" className="text-left py-4 px-6 font-semibold text-sm dark:!text-white">Link</th>
              <th scope="col" className="text-left py-4 px-6 font-semibold text-sm min-w-[200px] dark:!text-white">Year</th>
            </tr>
          </thead>
          <tbody>
            {essays.map((essay, idx) => (
              <tr 
                key={essay.title}
                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                style={{ minHeight: '64px' }}
              >
                <td className="py-4 px-6">
                  <span className="font-serif line-clamp-2 dark:!text-white" title={essay.title}>
                    {essay.title}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600 dark:!text-white">
                  {essay.type}
                </td>
                <td className="py-4 px-6">
                  <a
                    href={essay.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-gray-900 dark:focus:outline-gray-100 rounded dark:!text-white"
                    aria-label={`Read ${essay.title}`}
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-600 dark:!text-white whitespace-nowrap">
                  {essay.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {essays.map((essay) => (
          <div
            key={essay.title}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 space-y-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-lg font-medium line-clamp-3" title={essay.title}>
                {essay.title}
              </h3>
              <a
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded focus:outline-2 focus:outline-offset-2 focus:outline-gray-900 dark:focus:outline-gray-100"
                aria-label={`Read ${essay.title}`}
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <span className="font-medium">Type:</span> {essay.type}
              </div>
              <div>
                <span className="font-medium">Year:</span> {essay.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essays;