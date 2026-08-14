import Image from 'next/image';
import { content } from '@/data/content';

const heroImage = '/images/hero/hero_image.jpeg';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-cream">
      <style>{`
        @keyframes heroScaleIn { from { opacity: 0; transform: scale(1.02); } to { opacity: 1; transform: scale(1); } }
        .hero-image-card { animation: heroScaleIn 0.8s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) { .hero-image-card { animation: none; opacity: 1; transform: scale(1); } }
      `}</style>

      {/* Full-width, full-height image */}
      <div className="hero-image-card relative w-full lg:min-h-screen" style={{ aspectRatio: '800/590', minHeight: '400px' }}>
        <Image src={heroImage} alt={content.hero.imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-terracotta/20 via-transparent to-clay/15 pointer-events-none" />
      </div>

      {/* Text block overlapping bottom-left corner */}
      <div className="relative px-4 sm:px-8 mx-auto" style={{ marginTop: '-80px', zIndex: 10 }}>
        <div className="rounded-3xl bg-cream/95 backdrop-blur-sm p-8 sm:p-10 border border-sand/20 shadow-lg max-w-2xl">
          <p className="mb-3 inline-flex rounded-full border border-sangria/30 bg-sangria/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-sangria">
            Nordheim am Main, Germany
          </p>
          <h1 className="mt-6 font-display text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-ink leading-tight">
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
    </section>
  );
}
