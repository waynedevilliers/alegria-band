import Image from 'next/image';
import { content } from '@/data/content';

export function KontaktSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-sangria p-8 text-cream shadow-glow sm:p-10">
          {/* Grid: Contact panel dominant (right), supporting content secondary (left) */}
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            {/* Left column: Supporting content (smaller, secondary) */}
            <div className="flex flex-col items-center lg:items-start gap-6 order-2 lg:order-1">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {content.contact.title}
                </h2>
                <p className="mt-3 text-base text-cream/85">{content.contact.message}</p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 w-full">
                <p className="text-base font-semibold text-cream">{content.contact.person}</p>
                {/* Photo - unchanged dimensions */}
                <div className="relative w-32 h-44">
                  {/* Warm glow backdrop */}
                  <div className="absolute -inset-2 rounded-lg opacity-20 blur-xl" style={{ background: 'linear-gradient(135deg, #c96d45 0%, #b4573f 100%)' }} />
                  {/* Photo container */}
                  <div className="relative rounded-lg overflow-hidden shadow-lg ring-2 ring-cream ring-offset-4 ring-offset-sangria bg-cream/5 transition-all duration-300 hover:shadow-xl hover:scale-105">
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

            {/* Right column: Contact panel dominant (larger, focal point) */}
            <div className="order-1 lg:order-2">
              <div className="rounded-[1.75rem] bg-cream/15 backdrop-blur-sm p-8 sm:p-10">
                <div className="space-y-6">
                  {/* Email */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/70 mb-2">
                      {content.contact.emailLabel}
                    </p>
                    <a
                      href={`mailto:${content.contact.email}`}
                      className="text-xl font-semibold text-cream transition hover:text-sand break-all"
                    >
                      {content.contact.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/70 mb-2">
                      {content.contact.phoneLabel}
                    </p>
                    <a
                      href={`tel:${content.contact.phone.replace(/\s+/g, '')}`}
                      className="text-xl font-semibold text-cream transition hover:text-sand"
                    >
                      {content.contact.phone}
                    </a>
                  </div>

                  {/* CTA Button - Prominent */}
                  <div className="pt-4">
                    <a
                      href={`mailto:${content.contact.email}?subject=${encodeURIComponent('Booking anfragen')}`}
                      className="flex items-center justify-center gap-3 rounded-full bg-cream px-12 py-6 text-2xl font-bold text-sangria shadow-2xl transition duration-300 hover:bg-sand hover:shadow-glow hover:scale-105 ring-2 ring-cream/30 w-full"
                    >
                      <span aria-hidden="true">✉</span>
                      {content.contact.booking}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
