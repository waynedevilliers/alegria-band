import Image from 'next/image';
import { content } from '@/data/content';

const heroImage = '/images/hero/hero-band-live.jpg';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-cream pt-12 sm:pt-16 lg:pt-0 lg:min-h-svh lg:flex lg:items-center lg:gap-8 lg:px-8">
      {/* Left Column - Text */}
      <div className="lg:w-1/2 lg:flex lg:items-center lg:pl-8">
        <div className="px-4 sm:px-8 py-16 sm:py-20 lg:py-0 lg:px-0 max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-sangria/30 bg-sangria/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-sangria">
            Nordheim am Main, Germany
          </p>
          <h1 className="mt-8 font-display text-6xl font-semibold tracking-tight text-ink sm:text-7xl lg:text-8xl leading-tight">
            Alegría!
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink/70 sm:text-xl">
            {content.hero.tagline}
          </p>
          <a
            href="#bandvorstellung"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-sangria px-10 py-4 font-semibold text-white shadow-xl transition hover:bg-sangria/90 hover:shadow-2xl hover:scale-105"
          >
            {content.hero.scrollLabel}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative lg:w-1/2 lg:min-h-svh flex items-center justify-end px-4 sm:px-8 py-12 lg:py-0 lg:px-8 lg:pr-8">
        <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-sand/40 bg-cream flex items-center justify-center">
          <Image
            src={heroImage}
            alt={content.hero.imageAlt}
            width={600}
            height={600}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
