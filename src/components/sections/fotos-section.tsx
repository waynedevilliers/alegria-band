'use client';

import Image from 'next/image';
import { useState } from 'react';
import { content } from '@/data/content';
import { ImageWithGrade } from '@/components/image-with-grade';

const galleryImages = [
  { src: '/images/gallery/band-live-1.jpg', alt: 'Alegría! Band auf der Bühne mit Gitarren' },
  { src: '/images/gallery/band-live-3.jpg', alt: 'Sänger Klaus beim Auftritt' },
  { src: '/images/gallery/band-live-4.jpg', alt: 'Gitarrenspieler Rob im Scheinwerferlicht' },
  { src: '/images/gallery/band-live-5.jpg', alt: 'Band gemeinsam beim Spielen' },
  { src: '/images/gallery/band-live-7.jpg', alt: 'Cajon-Spieler Benno im Einsatz' },
  { src: '/images/gallery/band-live-9.jpg', alt: 'Bassist Anti beim Live-Performance' },
  { src: '/images/gallery/band-live-12.jpg', alt: 'Alegría! vollständige Band auf der Bühne' },
  { src: '/images/gallery/band-live-13.jpg', alt: 'Live-Auftritt mit Festivallicht' },
  { src: '/images/gallery/band-live-14.jpg', alt: 'Klaus und Rob im Duett' },
  { src: '/images/gallery/band-live-15.jpg', alt: 'Akustik-Gitarre Nahaufnahme während des Spielens' },
  { src: '/images/gallery/band-live-16.jpg', alt: 'Band in intensivem Moment während Performance' },
  { src: '/images/gallery/band-live-17.jpg', alt: 'Publikum genießt Alegría! Konzert' },
  { src: '/images/gallery/band-live-18.jpg', alt: 'Bühnenauftritt mit warmen Lichtern' },
  { src: '/images/gallery/band-live-19.jpg', alt: 'Rhythmus-Sektion Cajon und Bass' },
  { src: '/images/gallery/band-live-20.jpg', alt: 'Allegría! Band in voller Aktivität' },
  { src: '/images/gallery/band-live-21.jpg', alt: 'Sänger in emotionaler Performance' },
  { src: '/images/gallery/band-live-22.jpg', alt: 'Gitarristen synchronisiert spielend' },
  { src: '/images/gallery/band-live-23.jpg', alt: 'Latin-Rhythmus-Sektion Cajon' },
  { src: '/images/gallery/band-live-24.jpg', alt: 'Ensemble beim gemeinsamen Musizieren' },
  { src: '/images/gallery/band-live-25.jpg', alt: 'Konzert-Moment mit Bühnenbeleuchtung' },
  { src: '/images/gallery/band-live-26.jpg', alt: 'Akustisches Performance-Setup' },
  { src: '/images/gallery/band-live-27.jpg', alt: 'Band mit Publikum im Hintergrund' },
  { src: '/images/gallery/band-live-28.jpg', alt: 'Alegría! Live-Auftritt im Detail' },
  { src: '/images/gallery/band-live-29.jpg', alt: 'Musiker auf der Bühne' },
  { src: '/images/gallery/band-live-30.jpg', alt: 'Finale Augenblick eines Auftritts' },
];

export function FotosSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-md transition-all duration-300 hover:scale-105 aspect-square"
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
