'use client';

import { useState } from 'react';
import { content } from '@/data/content';

export function TermineSection() {
  const [expandedYear, setExpandedYear] = useState<number | null>(2026);

  return (
    <section
      id="termine"
      className="scroll-mt-24 space-y-8 bg-cream px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {content.termine.title}
        </h2>
        <p className="mt-4 text-lg text-ink/75">{content.termine.intro}</p>
      </div>

      <div className="mx-auto max-w-7xl space-y-4">
        {content.termine.years.map((yearData) => (
          <details
            key={yearData.year}
            className="group rounded-lg border border-sand/70 bg-white"
            open={expandedYear === yearData.year}
            onToggle={(e) =>
              setExpandedYear(e.currentTarget.open ? yearData.year : null)
            }
          >
            <summary className="flex cursor-pointer items-center gap-3 px-6 py-4 font-semibold text-ink hover:bg-cream transition-colors">
              <span className="transition-transform group-open:rotate-90">›</span>
              <span>
                Termine {yearData.year} ({yearData.events.length} Events)
              </span>
            </summary>
            <div className="space-y-4 border-t border-sand/50 px-6 py-4">
              {yearData.events.map((event, idx) => (
                <div key={idx} className="pb-4 text-sm text-ink/80">
                  <div className="font-semibold text-ink">
                    {event.date} {event.time ? `• ${event.time}` : ''}
                  </div>
                  <div className="mt-1">{event.venue}</div>
                  <div className="text-ink/60">{event.address}</div>
                  {('note' in event && event.note) && (
                    <div className="mt-2 text-xs italic text-clay">{event.note}</div>
                  )}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
