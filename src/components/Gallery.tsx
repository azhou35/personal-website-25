import React from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
  className?: string; // Added to control individual image sizing
}

const photos: Photo[] = [
  // Top row - 4 equal squares
  {
    id: 1,
    src: "/photos/image1.jpg",
    alt: "Square photo 1",
    className: "aspect-square"
  },
  {
    id: 2,
    src: "/photos/photo2.jpg",
    alt: "Square photo 2",
    className: "aspect-square"
  },
  {
    id: 3,
    src: "/photos/photo3.jpg",
    alt: "Square photo 3",
    className: "aspect-square"
  },
  {
    id: 4,
    src: "/photos/photo4.jpg",
    alt: "Square photo 4",
    className: "aspect-square"
  },
  // Middle row - small square, wide rectangle, two small squares
  {
    id: 5,
    src: "/photos/photo5.jpg",
    alt: "Small square photo",
    className: "aspect-square"
  },
  {
    id: 6,
    src: "/photos/photo6.jpg",
    alt: "Wide rectangular photo",
    className: "col-span-2 aspect-[2/1]" // Takes up 2 columns, 2:1 aspect ratio
  },
  {
    id: 7,
    src: "/photos/photo7.jpg",
    alt: "Small square photo",
    className: "aspect-square"
  },
  {
    id: 8,
    src: "/photos/photo8.jpg",
    alt: "Small square photo",
    className: "aspect-square"
  },
  // Bottom row - 3 large rectangles
  {
    id: 9,
    src: "/photos/photo9.jpg",
    alt: "Landscape photo 1",
    className: "aspect-[4/3]" // 4:3 landscape
  },
  {
    id: 10,
    src: "/photos/photo10.jpg",
    alt: "Portrait photo",
    className: "aspect-[3/4]" // 3:4 portrait
  },
  {
    id: 11,
    src: "/photos/photo11.jpg",
    alt: "Landscape photo 2",
    className: "aspect-[4/3]" // 4:3 landscape
  },
];

const Gallery = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-serif font-medium">Photography</h2>
      
      {/* Top row - 4 equal squares */}
      <div className="grid grid-cols-4 gap-4">
        {photos.slice(0, 4).map((photo) => (
          <div key={photo.id} className="group relative">
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full object-cover ${photo.className}`}
            />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Middle row - small square, wide rectangle, two small squares */}
      <div className="grid grid-cols-4 gap-4">
        {photos.slice(4, 8).map((photo) => (
          <div key={photo.id} className={`group relative ${photo.className}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom row - 3 large rectangles */}
      <div className="grid grid-cols-3 gap-4">
        {photos.slice(8, 11).map((photo) => (
          <div key={photo.id} className={`group relative ${photo.className}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 