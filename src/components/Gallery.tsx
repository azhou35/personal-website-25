import React, { useState, useEffect } from 'react';

const CHANNEL_SLUG = 'gallery-avsv2uhgixa';
const PER_PAGE = 100;

interface ArenaBlock {
  id: number;
  title: string;
  class: string;
  image?: {
    display: { url: string };
    original: { url: string };
  };
}

const Gallery = () => {
  const [images, setImages] = useState<ArenaBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAll() {
      let page = 1;
      let all: ArenaBlock[] = [];
      try {
        while (true) {
          const res = await fetch(
            `https://api.are.na/v2/channels/${CHANNEL_SLUG}/contents?page=${page}&per=${PER_PAGE}`
          );
          const data = await res.json();
          const contents = data.contents || [];
          if (contents.length === 0) break;
          const blocks = contents.filter(
            (b: ArenaBlock) => b.class === 'Image' && b.image
          );
          all = all.concat(blocks);
          if (contents.length < PER_PAGE) break;
          page++;
        }
      } catch (e) {
        // silently fail
      }
      setImages(all);
      setLoading(false);
    }
    fetchAll();
  }, []);

  const isDark = (window as any).isDarkMode;

  return (
    <div className="space-y-6">
      <section className="space-y-6 text-left pl-4">
        <h2 className="font-serif text-3xl font-medium">Gallery</h2>
      </section>

      {loading && (
        <p className="text-sm text-gray-400 pl-4">Loading...</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((block) => (
          <div
            key={block.id}
            className="group relative aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden cursor-pointer"
            onClick={() => setLightbox(block.image!.original.url)}
          >
            <img
              src={block.image!.display.url}
              alt={block.title || ''}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

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

export default Gallery;
