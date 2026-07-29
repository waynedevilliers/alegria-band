'use client';

import { useState } from 'react';

export function SetlistModal({
  songs,
  title,
}: {
  songs: readonly string[];
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-3 rounded-full bg-sangria px-8 py-4 font-semibold text-cream transition hover:bg-clay"
      >
        <span className="text-xl">♪</span>
        Setlist anschauen ({songs.length} Songs)
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[80vh] overflow-auto rounded-[2rem] bg-cream shadow-glow">
            <div className="sticky top-0 flex items-center justify-between border-b border-sand/50 bg-cream p-6">
              <h2 className="font-display text-3xl font-semibold text-ink">{title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-sand p-2 text-ink transition hover:bg-sand/80"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid gap-3 p-6 sm:grid-cols-2">
              {songs.map((song) => (
                <div
                  key={song}
                  className="flex items-center gap-3 rounded-lg bg-white p-4 border border-sand/30 hover:shadow-md transition"
                >
                  <span className="shrink-0 text-2xl text-sangria">♪</span>
                  <span className="text-ink font-medium">{song}</span>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 border-t border-sand/50 bg-cream p-4 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-sangria px-8 py-3 font-semibold text-cream transition hover:bg-clay"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
