import Image from 'next/image';
import { content } from '@/data/content';

const heroImage = '/images/hero/hero_image.jpeg';

export function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden min-h-svh pt-16">
      <Image
        src={heroImage}
        alt={content.hero.imageAlt}
        width={1600}
        height={900}
        priority
        className="absolute inset-0 w-full h-full object-contain"
      />
      <div className="absolute inset-0 bg-hero-warm" />
      <div className="relative mx-auto flex min-h-svh max-w-7xl items-end px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-3xl text-cream">
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cream/90 backdrop-blur-md">
            Nordheim am Main, Germany
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-wrap-balance sm:text-7xl lg:text-8xl">
            Alegría!
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/92 sm:text-2xl">
            {content.hero.tagline}
          </p>
          <a
            href="#bandvorstellung"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-cream/30 bg-cream px-6 py-3 font-semibold text-sangria shadow-xl transition hover:bg-sand"
          >
            {content.hero.scrollLabel}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
