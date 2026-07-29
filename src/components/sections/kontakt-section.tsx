import { content } from '@/data/content';

export function KontaktSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] bg-sangria p-8 text-cream shadow-glow lg:grid-cols-[0.95fr_1.05fr] lg:items-center sm:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cream/70">
              {content.contact.label}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {content.contact.title}
            </h2>
            <p className="mt-4 text-lg text-cream/85">{content.contact.person}</p>
          </div>
          <div className="grid gap-4 rounded-[1.75rem] bg-cream/10 p-6 backdrop-blur-sm sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/70">
                {content.contact.emailLabel}
              </p>
              <a
                href={`mailto:${content.contact.email}`}
                className="mt-2 block text-lg font-semibold text-cream transition hover:text-sand"
              >
                {content.contact.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/70">
                {content.contact.phoneLabel}
              </p>
              <a
                href={`tel:${content.contact.phone.replace(/\s+/g, '')}`}
                className="mt-2 block text-lg font-semibold text-cream transition hover:text-sand"
              >
                {content.contact.phone}
              </a>
            </div>
            <a
              href={`mailto:${content.contact.email}?subject=${encodeURIComponent('Booking anfragen')}`}
              className="inline-flex items-center justify-center rounded-full bg-cream px-5 py-3 font-semibold text-sangria transition hover:bg-sand sm:col-span-2"
            >
              {content.contact.booking}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
