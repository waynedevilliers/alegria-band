import Image from 'next/image';
import { content } from '@/data/content';

const heroImage = '/images/hero/hero-band-live.jpg';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-white pt-16 sm:pt-24 lg:pt-0 lg:min-h-svh lg:flex lg:items-center">
      {/* Left Column - Text */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-0 lg:w-1/2 lg:pr-12">
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
          <p className="mb-3 inline-flex rounded-full border border-sangria/20 bg-sangria/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sangria">
            Nordheim am Main, Germany
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Alegría!
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/75 sm:text-xl max-w-2xl">
            {content.hero.tagline}
          </p>
          <a
            href="#bandvorstellung"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-sangria px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-sangria/90 hover:shadow-xl"
          >
            {content.hero.scrollLabel}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative lg:w-1/2 lg:min-h-svh">
        <Image
          src={heroImage}
          alt={content.hero.imageAlt}
          fill
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
