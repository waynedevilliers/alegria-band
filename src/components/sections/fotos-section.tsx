'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { content } from '@/data/content';
import { ImageWithGrade } from '@/components/image-with-grade';

const allPhotos = content.photos.gallery;
const curatedPhotos = content.photos.curated;

export function FotosSection() {
  const [index, setIndex] = useState(-1);

  const lightboxSlides = allPhotos.map((image) => ({
    src: image.src,
    alt: image.alt,
    width: 1200,
    height: 1200,
  }));

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
  };

  const handleCuratedClick = (galleryIndex: number) => {
    setIndex(galleryIndex);
  };

  return (
    <section
      id="fotos"
      className="scroll-mt-24 space-y-8 bg-cream px-4 py-20 pb-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {content.photos.title}
        </h2>
        <p className="mt-4 text-lg text-ink/75">{content.photos.intro}</p>
      </div>

      {/* Curated Masonry Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 auto-rows-max">
          {curatedPhotos.map((image) => (
            <button
              key={image.galleryIndex}
              onClick={() => handleCuratedClick(image.galleryIndex)}
              className={`group relative overflow-hidden rounded-xl shadow-soft hover:shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-sangria focus-visible:ring-offset-2 ${sizeClasses[image.size as keyof typeof sizeClasses]} aspect-square`}
              aria-label={`Open ${image.alt}`}
            >
              <ImageWithGrade
                src={image.src}
                alt={image.alt}
                fill
                className="h-full w-full"
                grade
              />
            </button>
          ))}
        </div>
      </div>

      {/* Yet Another React Lightbox */}
      <Lightbox
        slides={lightboxSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        on={{
          view: ({ index: currentIndex }) => setIndex(currentIndex),
        }}
        plugins={[Thumbnails, Counter]}
        thumbnails={{
          position: 'bottom',
          width: 100,
          height: 100,
          border: 1,
          borderColor: 'rgba(255, 255, 255, 0.2)',
          gap: 4,
          padding: 4,
        }}
        counter={{ container: { style: { top: 0, left: 0 } } }}
      />
    </section>
  );
}
