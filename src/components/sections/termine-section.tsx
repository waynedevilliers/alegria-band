'use client';

import { useState } from 'react';
import { content } from '@/data/content';

function generateMusicEventSchema(events: typeof content.termine.years[0]['events']) {
  const monthMap: Record<string, string> = {
    Januar: '01', Februar: '02', März: '03', April: '04', Mai: '05', Juni: '06',
    Juli: '07', August: '08', September: '09', Oktober: '10', November: '11', Dezember: '12'
  };

  return events.map(event => {
    try {
      // Parse date: "Sa., 14. März" -> "2026-03-14"
      const dateMatch = event.date.match(/(\d+)\.\s+(\w+)/);
      if (!dateMatch) return null;

      const [, dayStr = '', monthName = ''] = dateMatch;
      const month = monthMap[monthName] || '01';
      const day = dayStr.padStart(2, '0');
      const dateStr = `2026-${month}-${day}`;

      // Parse time: "12:00 – 17:00 Uhr" or "ab 20:00 Uhr"
      const timeClean = event.time.replace('Uhr', '').trim();
      const [startTimeStr] = timeClean.match(/\d{2}:\d{2}/) || ['20:00'];

      // Build datetime strings
      const startDateTime = `${dateStr}T${startTimeStr}:00`;
      const endTimeMatch = timeClean.match(/–\s*(\d{2}:\d{2})/);
      const endDateTime = endTimeMatch ? `${dateStr}T${endTimeMatch[1]}:00` : startDateTime;

      return {
        '@context': 'https://schema.org',
        '@type': 'MusicEvent',
        name: `Alegría! – Live Performance in ${event.city}`,
        description: `Live performance by the band Alegría! at ${event.venue}`,
        startDate: startDateTime,
        endDate: endDateTime,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: event.venue,
          address: {
            '@type': 'PostalAddress',
            streetAddress: event.address.split(',')[0],
            addressLocality: event.city,
            postalCode: event.address.match(/\d{5}/)?.[0] || '',
            addressCountry: 'DE'
          }
        },
        performer: {
          '@type': 'MusicGroup',
          name: 'Alegría!',
          url: 'https://alegria-band.de'
        }
      };
    } catch {
      return null;
    }
  }).filter(Boolean);
}

export function TermineSection() {
  const [expandedYear, setExpandedYear] = useState<number | null>(2026);

  const allEvents = content.termine.years.flatMap(year => year.events);
  const musicEventSchemas = generateMusicEventSchema(allEvents);

  return (
    <section
      id="termine"
      className="scroll-mt-24 space-y-8 bg-sand/40 px-4 py-20 sm:px-6 lg:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: musicEventSchemas.map((event, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: event
            }))
          })
        }}
      />
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
