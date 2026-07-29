"use client";

import Image from 'next/image';
import { useState } from "react";

export function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-glow">
      {active ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="relative aspect-video w-full overflow-hidden text-left"
          aria-label={title}
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-sangria/70 via-sangria/15 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sangria">
            Video
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-sangria shadow-xl transition group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-8 w-8 fill-current"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
