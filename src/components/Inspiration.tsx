import React, { useState, useEffect, useCallback } from 'react';

interface ArenaBlock {
  id: number;
  title: string;
  class: string;
  content?: string;
  source?: { url: string };
  image?: {
    display: { url: string };
    original: { url: string };
  };
}

interface ArenaChannel {
  slug: string;
  title: string;
}

const CHANNELS: ArenaChannel[] = [
  { slug: 'cartography-of-desire', title: 'Cartography of Desire' },
  { slug: 'machine-yearning-_kwqof7o07m', title: 'Machine Yearning' },
  { slug: 'incubation-ysrkjnrrdxi', title: 'Incubation' },
  { slug: 'identity-coherence', title: 'Identity Coherence' },
  { slug: 'sf-ox6xvvuoasc', title: 'SF' },
  { slug: 'life-axioms', title: 'Life Axioms' },
  { slug: 'entropy-svhe2e_jg1y', title: 'Entropy' },
  { slug: 'networks-mepcjjd-udm', title: 'Networks' },
  { slug: 'diagrams-yd_rwgrmkdk', title: 'Diagrams' },
];
const PER_PAGE = 100;

const Inspiration: React.FC = () => {
  const [currentChannel, setCurrentChannel] = useState<ArenaChannel>(
    () => CHANNELS[Math.floor(Math.random() * CHANNELS.length)]
  );
  const [blocks, setBlocks] = useState<ArenaBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!currentChannel) return;
    async function fetchBlocks() {
      setLoading(true);
      setBlocks([]);
      let page = 1;
      let all: ArenaBlock[] = [];
      try {
        while (true) {
          const res = await fetch(
            `https://api.are.na/v2/channels/${currentChannel!.slug}/contents?page=${page}&per=${PER_PAGE}`
          );
          const data = await res.json();
          const contents = data.contents || [];
          if (contents.length === 0) break;
          // Keep images and text blocks
          const kept = contents.filter(
            (b: ArenaBlock) =>
              (b.class === 'Image' && b.image) ||
              b.class === 'Text' ||
              b.class === 'Link'
          );
          all = all.concat(kept);
          if (contents.length < PER_PAGE) break;
          page++;
        }
      } catch (e) {
        // silently fail
      }
      setBlocks(all);
      setLoading(false);
    }
    fetchBlocks();
  }, [currentChannel]);

  const shuffle = useCallback(() => {
    let next: ArenaChannel;
    do {
      next = CHANNELS[Math.floor(Math.random() * CHANNELS.length)];
    } while (next.slug === currentChannel.slug);
    setCurrentChannel(next);
  }, [currentChannel]);

  const isDark = (window as any).isDarkMode;

  return (
    <div className="space-y-8">
      <section className="space-y-3 text-left pl-4">
        <h2 className="font-serif text-3xl font-medium">Inspiration</h2>
        {currentChannel && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <a
              href={`https://www.are.na/annie-zhou/${currentChannel.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: 'inherit' }}
            >
              {currentChannel.title} ↗
            </a>
          </p>
        )}
        <button
          onClick={shuffle}
          className="text-sm px-3 py-1.5 rounded-full border transition-colors"
          style={{
            borderColor: isDark ? '#444' : '#ccc',
            color: isDark ? '#ccc' : '#555',
            background: isDark ? '#1a1a1a' : '#fff',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#888';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = isDark ? '#444' : '#ccc';
          }}
        >
          I'm feeling lucky
        </button>
      </section>

      {loading && (
        <p className="text-sm text-gray-400 pl-4">Loading...</p>
      )}

      {!loading && blocks.length === 0 && (
        <p className="text-sm text-gray-400 pl-4">
          Nothing here.{' '}
          <button onClick={shuffle} className="underline">Try another</button>
        </p>
      )}

      <div
        style={{
          columnCount: 3,
          columnGap: '12px',
          padding: '0 16px',
        }}
      >
        {blocks.map((block) => {
          if (block.class === 'Image' && block.image) {
            return (
              <div
                key={block.id}
                style={{ breakInside: 'avoid', marginBottom: '12px', cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => setLightbox(block.image!.original.url)}
              >
                <img
                  src={block.image.display.url}
                  alt={block.title || ''}
                  loading="lazy"
                  className="w-full block transition-transform duration-300 hover:scale-[1.02] hover:opacity-90"
                />
              </div>
            );
          }

          if (block.class === 'Text' && block.content && !/^\s*(https?:\/\/\S+\s*)+$/i.test(block.content.trim())) {
            return (
              <div
                key={block.id}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '12px',
                  padding: '20px',
                  background: isDark ? '#1a1a1a' : '#f0ede8',
                  borderRadius: '4px',
                }}
              >
                <div
                  className="text-sm leading-relaxed"
                  style={{ color: isDark ? '#ccc' : '#444' }}
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
              </div>
            );
          }

          if (block.class === 'Link' && block.image) {
            return (
              <div
                key={block.id}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '12px',
                  overflow: 'hidden',
                }}
              >
                <a href={block.source?.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={block.image.display.url}
                    alt={block.title || ''}
                    loading="lazy"
                    className="w-full block transition-transform duration-300 hover:scale-[1.02] hover:opacity-90"
                  />
                </a>
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: isDark ? 'rgba(0,0,0,0.95)' : 'rgba(251,249,245,0.97)' }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            className="max-w-[85vw] max-h-[85vh] object-contain"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
          />
        </div>
      )}
    </div>
  );
};

export default Inspiration;
