import Image from 'next/image';
import { content } from '@/data/content';

export function KontaktSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] bg-sangria p-8 text-cream shadow-glow lg:grid-cols-[0.95fr_1.05fr] lg:items-center sm:p-10">
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {content.contact.title}
              </h2>
              <p className="mt-4 text-lg text-cream/85">{content.contact.message}</p>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-4 w-full">
              <p className="text-lg font-semibold text-cream">{content.contact.person}</p>
              {/* Photo with subtle warm glow accent */}
              <div className="relative w-32 h-44">
                {/* Warm glow backdrop */}
                <div className="absolute -inset-2 rounded-lg opacity-20 blur-xl" style={{ background: 'linear-gradient(135deg, #c96d45 0%, #b4573f 100%)' }} />
                {/* Photo container */}
                <div className="relative rounded-lg overflow-hidden shadow-lg ring-2 ring-cream/20 bg-cream/5">
                  <Image
                    src="/images/band_members/Gerd_Benno_Hofmann.jpg"
                    alt="Gerd 'Benno' Hofmann"
                    width={128}
                    height={176}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
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
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cream px-10 py-5 text-lg font-bold text-sangria shadow-2xl transition duration-300 hover:bg-sand hover:shadow-glow hover:scale-105 sm:col-span-2 ring-2 ring-cream/30"
            >
              <span aria-hidden="true">✉</span>
              {content.contact.booking}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
