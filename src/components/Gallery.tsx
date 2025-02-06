import React, { useState } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  blurHash?: string; // Optional: for blur placeholder
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/photos/image1.jpg",
    alt: "Photo 1"
  },
  {
    id: 2,
    src: "/photos/photo2.JPG",
    alt: "Photo 2"
  },
  {
    id: 3,
    src: "/photos/photo3.JPG",
    alt: "Photo 3"
  },
  {
    id: 4,
    src: "/photos/photo4.JPG",
    alt: "Photo 4"
  },

    {
    id: 5,
    src: "/photos/photo5.JPG",
    alt: "Photo 5"
  },
  {
    id: 6,
    src: "/photos/photo6.JPG",
    alt: "Photo 6"
  },
  {
    id: 7,
    src: "/photos/photo7.jpg",
    alt: "Photo 7"
  },

  {
    id: 8,  
    src: "/photos/photo8.JPG",
    alt: "Photo 8"
  },

  {
    id: 9,
    src: "/photos/photo9.jpg",
    alt: "Photo 9"
  },

  {
    id: 10,
    src: "/photos/photo10.JPG",
    alt: "Photo 10"
  },

  {
    id: 11,  
    src: "/photos/photo11.JPG",
    alt: "Photo 11"
  },

  {
    id: 12,
    src: "/photos/photo12.jpg",
    alt: "Photo 12"
  }

];

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl font-medium">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="group relative aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-opacity duration-300"
              style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s ease-in forwards'
              }}
              onLoad={(e) => {
                (e.target as HTMLImageElement).style.opacity = '1';
                setImagesLoaded(prev => prev + 1);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 