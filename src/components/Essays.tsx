import React from 'react';

interface Essay {
  title: string;
  url: string;
  year: string;
  type: string;
  isNew?: boolean;
}

const essays: Essay[] = [
  { title: "sometimes you leave, sometimes you stay", year: "2026", type: "Prose", url: "https://anniewhere.substack.com/p/on-alignment", isNew: true },
  { title: "how to be bored", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/how-to-be-bored" },
  { title: "object permanence", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/object-permanence" },
  { title: "lost-time memory", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/lost-time-memory" },
  { title: "summertime sadness", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/summertime-friendship" },
  { title: "degrees of freedom", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/degrees-of-freedom" },
  { title: "entryways", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/entryways" },
  { title: "ambient co-presence", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/ambient-co-presence" },
  { title: "friction as a fruitful endeavor", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/friction-as-a-fruitful-endeavor" },
  { title: "tell me what you taste", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/tell-me-what-you-taste" },
  { title: "attention is all u need", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/attention-is-all-u-need" },
  { title: "there will come spring rains", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/there-will-come-spring-rains" },
  { title: "digital & physical bids for connection", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/random-walks-01-digital-and-physical" },
  { title: "field notes on 23", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/field-notes-on-23" },
  { title: "flushing food courts & facades", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/flushing-and-facades" },
  { title: "phantom race", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/phantom-race" },
  { title: "chasing light", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/chasing-light" },
  { title: "equilibrium", year: "2025", type: "Prose", url: "https://anniewhere.substack.com/p/equilibrium" },
  { title: "beekeeper", year: "2024", type: "Prose", url: "https://anniewhere.substack.com/p/beekeeper" },
  { title: "create-tober", year: "2024", type: "Prose", url: "https://anniewhere.substack.com/p/01-create-tober" },
  { title: "mid-autumn wind", year: "2024", type: "Prose", url: "https://anniewhere.substack.com/p/mid-autumn-wind" },
  { title: "model childhood", year: "2024", type: "Prose", url: "https://anniewhere.substack.com/p/model-childhood" },
  { title: "Sweet, Savory, and In Between", year: "2025", type: "Prose", url: "https://www.offmenumag.com/specials/lai-rai-sweet-savory-and-in-between" },
  { title: "Together AI", year: "2023", type: "Strategy", url: "https://research.contrary.com/company/together-ai" },
  { title: "Monte Carlo", year: "2023", type: "Strategy", url: "https://research.contrary.com/company/monte-carlo" },
  { title: "AWS Machine Learning Tutorials", year: "2022", type: "Technical", url: "https://aws.amazon.com/machine-learning/tutorials" },
];

// Group by year
const grouped = essays.reduce<Record<string, Essay[]>>((acc, essay) => {
  if (!acc[essay.year]) acc[essay.year] = [];
  acc[essay.year].push(essay);
  return acc;
}, {});

const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

const Essays = () => {
  return (
    <div className="space-y-8">
      <section className="text-left pl-4">
        <h2 className="font-serif text-3xl font-medium dark:!text-white">Field Notes</h2>
      </section>

      <div className="border-t border-gray-200 dark:border-gray-700">
        {sortedYears.map((year) => (
          <React.Fragment key={year}>
            {grouped[year].map((essay, idx) => (
              <a
                key={essay.title}
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid border-b border-gray-100 dark:border-gray-800 py-4 px-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                style={{
                  gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'center',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <span
                  className="text-gray-400 dark:text-gray-500 text-sm"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {idx === 0 ? year : ''}
                </span>
                <span className="font-serif text-lg">
                  {essay.title}
                  {essay.isNew && (
                    <span
                      className="ml-3 text-sm italic"
                      style={{ color: '#ff69b4' }}
                    >
                      New
                    </span>
                  )}
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-sm text-right">
                  {essay.type}
                </span>
              </a>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Essays;
