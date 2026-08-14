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

// Curated thumbnails shown on the page
const displayedImages = [
  { src: '/images/gallery/band-live-1.jpg', alt: 'Alegría! Band auf der Bühne mit Gitarren' },
  { src: '/images/gallery/band-live-12.jpg', alt: 'Alegría! vollständige Band auf der Bühne' },
  { src: '/images/gallery/band-live-17.jpg', alt: 'Publikum genießt Alegría! Konzert' },
  { src: '/images/gallery/band-live-25.jpg', alt: 'Konzert-Moment mit Bühnenbeleuchtung' },
  { src: '/images/gallery/band-live-30.jpg', alt: 'Finale Augenblick eines Auftritts' },
];

// All images available in fullscreen lightbox view
const allGalleryImages = [
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
  const [index, setIndex] = useState(-1);

  // Convert all gallery images to lightbox format
  const lightboxSlides = allGalleryImages.map((image) => ({
    src: image.src,
    alt: image.alt,
    width: 1200,
    height: 1200,
  }));

  // Map displayed images to their index in the full gallery
  const getFullGalleryIndex = (displayedImage: (typeof displayedImages)[0]) => {
    return allGalleryImages.findIndex((img) => img.src === displayedImage.src);
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

      {/* Gallery Grid - Curated Thumbnails */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 auto-rows-max">
          {displayedImages.map((image) => {
            const fullGalleryIndex = getFullGalleryIndex(image);
            return (
              <button
                key={image.src}
                onClick={() => setIndex(fullGalleryIndex)}
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-md transition-all duration-300 hover:scale-105 aspect-square focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
            );
          })}
        </div>
      </div>

      {/* Yet Another React Lightbox - All 25 images available */}
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
