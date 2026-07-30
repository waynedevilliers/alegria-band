'use client';

import Image from 'next/image';
import { useState } from 'react';
import { content } from '@/data/content';
import { ImageWithGrade } from '@/components/image-with-grade';

const galleryImages = [
  {
    src: '/images/foto_section/fotos.jpg',
    alt: 'Alegría! Fotos',
    size: 'large', // 2x2
  },
  {
    src: '/images/foto_section/band_vorstellung.jpg',
    alt: 'Alegría! Bandvorstellung',
    size: 'medium', // 1x1
  },
  {
    src: '/images/foto_section/videos.jpg',
    alt: 'Alegría! Videos',
    size: 'medium', // 1x1
  },
  {
    src: '/images/foto_section/kontakt.jpg',
    alt: 'Alegría! Kontakt',
    size: 'small', // 1x1 small
  },
  {
    src: '/images/foto_section/termine.jpg',
    alt: 'Alegría! Termine',
    size: 'small', // 1x1 small
  },
];

export function FotosSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
  };

  return (
    <section
      id="fotos"
      className="scroll-mt-24 space-y-8 bg-surface px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/75">
          {content.photos.label}
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {content.photos.title}
        </h2>
        <p className="mt-4 text-lg text-text-muted">{content.photos.intro}</p>
      </div>

      {/* Masonry Gallery */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 auto-rows-max">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-xl shadow-soft hover:shadow-md transition-all duration-300 hover:scale-105 ${sizeClasses[image.size as keyof typeof sizeClasses]} aspect-square`}
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

      {/* Lightbox Modal */}
      {currentImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface rounded-2xl overflow-hidden shadow-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-ink/10">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-surface-alt p-6">
              <p className="text-sm font-medium text-text-muted">{currentImage.alt}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)}
                  className="rounded-lg border border-surface-alt px-3 py-2 text-sm font-medium text-text hover:bg-surface-alt transition"
                >
                  ← Prev
                </button>
                <span className="text-sm text-text-muted">
                  {selectedIndex + 1} / {galleryImages.length}
                </span>
                <button
                  onClick={() => setSelectedIndex((selectedIndex + 1) % galleryImages.length)}
                  className="rounded-lg border border-surface-alt px-3 py-2 text-sm font-medium text-text hover:bg-surface-alt transition"
                >
                  Next →
                </button>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="ml-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-text-light hover:bg-primary/90 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
