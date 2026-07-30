'use client';

import Image from 'next/image';
import { useState } from 'react';
import { content } from '@/data/content';

const heroImage = '/images/hero/hero_image.jpeg';

const galleryImages = [
  {
    src: '/images/foto_section/fotos.jpg',
    alt: 'Alegría! Fotos',
  },
  {
    src: '/images/foto_section/band_vorstellung.jpg',
    alt: 'Alegría! Bandvorstellung',
  },
  {
    src: '/images/foto_section/videos.jpg',
    alt: 'Alegría! Videos',
  },
  {
    src: '/images/foto_section/kontakt.jpg',
    alt: 'Alegría! Kontakt',
  },
  {
    src: '/images/foto_section/termine.jpg',
    alt: 'Alegría! Termine',
  },
];

export function FotosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const currentImage = galleryImages[currentIndex];

  if (!currentImage) return null;

  return (
    <section
      id="fotos"
      className="scroll-mt-24 space-y-8 bg-cream px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sangria/75">
          {content.photos.label}
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {content.photos.title}
        </h2>
        <p className="mt-4 text-lg text-ink/75">{content.photos.intro}</p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-[2rem] overflow-hidden bg-ink/10 shadow-glow">
          <div className="relative aspect-video">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-6">
            <button
              onClick={goToPrevious}
              className="group relative z-10 rounded-full bg-white/90 p-3 transition hover:bg-white shadow-lg"
              aria-label="Previous image"
            >
              <svg
                className="h-6 w-6 text-ink transition group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="group relative z-10 rounded-full bg-white/90 p-3 transition hover:bg-white shadow-lg"
              aria-label="Next image"
            >
              <svg
                className="h-6 w-6 text-ink transition group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-ink">
          <p>{currentImage.alt}</p>
          <p className="font-semibold">
            {currentIndex + 1} / {galleryImages.length}
          </p>
        </div>
      </div>
    </section>
  );
}
