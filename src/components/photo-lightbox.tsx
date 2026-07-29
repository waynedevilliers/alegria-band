"use client";

import Image from "next/image";
import { useEffect } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function PhotoLightbox({
  items,
  openIndex,
  onClose,
  onNavigate,
}: {
  items: GalleryImage[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (direction: -1 | 1) => void;
}) {
  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNavigate(-1);
      if (event.key === "ArrowRight") onNavigate(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, onClose, onNavigate]);

  if (openIndex === null || openIndex >= items.length) return null;

  const item = items[openIndex];
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close lightbox"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-cream p-3 shadow-glow sm:p-4">
        <div className="overflow-hidden rounded-[1.5rem] bg-black/10">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 90vw, (max-width: 1280px) 80vw, 70vw"
          />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 px-1 text-sm text-ink/70">
          <p>{item.alt}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onNavigate(-1)}
              className="rounded-full border border-ink/10 bg-white px-3 py-2 font-semibold text-ink transition hover:bg-sand"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => onNavigate(1)}
              className="rounded-full border border-ink/10 bg-white px-3 py-2 font-semibold text-ink transition hover:bg-sand"
            >
              Next
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-sangria px-3 py-2 font-semibold text-cream transition hover:bg-clay"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
