import Image from 'next/image';
import { content } from '@/data/content';

const heroImage = '/images/hero/hero_image.jpeg';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-cream pt-12 sm:pt-16 lg:pt-0 lg:min-h-svh lg:flex lg:items-center">
      {/* Left Column - Text */}
      <div className="w-full px-4 sm:px-8 py-16 sm:py-20 lg:w-1/2 lg:pl-12 lg:pr-6 lg:py-0 lg:flex lg:items-center lg:justify-end">
        <div className="max-w-lg">
          <p className="mb-3 inline-flex rounded-full border border-sangria/30 bg-sangria/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-sangria">
            Nordheim am Main, Germany
          </p>
          <h1 className="mt-6 font-display text-6xl font-semibold tracking-tight text-ink sm:text-7xl lg:text-8xl leading-tight">
            Alegría!
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70 sm:text-xl">
            {content.hero.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-sangria px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-sangria/90 hover:shadow-2xl hover:scale-105"
            >
              Jetzt buchen
            </a>
            <a
              href="#bandvorstellung"
              className="inline-flex items-center gap-3 rounded-full border-2 border-sangria px-8 py-3 font-semibold text-sangria transition hover:bg-sangria/5"
            >
              {content.hero.scrollLabel}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full px-4 sm:px-8 py-12 lg:w-1/2 lg:pl-6 lg:pr-12 lg:py-0 lg:flex lg:items-center lg:justify-center">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-sand/40 bg-cream" style={{ aspectRatio: '800/590' }}>
          <Image
            src={heroImage}
            alt={content.hero.imageAlt}
            fill
            priority
            className="object-cover"
          />
          {/* Warm color grade overlay */}
          <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-terracotta/20 via-transparent to-clay/15 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
