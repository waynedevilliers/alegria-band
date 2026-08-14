import Image from 'next/image';
import { content } from '@/data/content';

const heroImage = '/images/hero/hero_image.jpeg';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-cream px-4 sm:px-8 py-12 sm:py-16 lg:py-24 lg:min-h-svh lg:flex lg:items-center lg:justify-center">
      <style>{`
        @keyframes heroScaleIn { from { opacity: 0; transform: scale(1.02); } to { opacity: 1; transform: scale(1); } }
        .hero-image-card { animation: heroScaleIn 0.8s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) { .hero-image-card { animation: none; opacity: 1; transform: scale(1); } }
      `}</style>

      {/* Tablet+: Text left, Image right, overlapping at corners */}
      <div className="hidden md:block relative w-full max-w-6xl mx-auto" style={{ minHeight: '550px' }}>
        {/* Image on right */}
        <div className="hero-image-card absolute right-0 top-0" style={{ width: 'min(55%, 700px)', aspectRatio: '800/590' }}>
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-sand/40 bg-cream">
            <Image src={heroImage} alt={content.hero.imageAlt} fill priority className="object-cover" />
            <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-terracotta/20 via-transparent to-clay/15 pointer-events-none" />
          </div>
        </div>

        {/* Text on left, overlapping bottom-left of image */}
        <div className="absolute left-0 bottom-0 max-w-md z-10" style={{ marginBottom: '-60px' }}>
          <div className="rounded-3xl bg-cream/95 backdrop-blur-sm p-8 border border-sand/20 shadow-lg">
            <p className="mb-3 inline-flex rounded-full border border-sangria/30 bg-sangria/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sangria">
              Nordheim am Main, Germany
            </p>
            <h1 className="mt-4 font-display text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-tight">
              Alegría!
            </h1>
            <p className="mt-4 text-base lg:text-lg leading-relaxed text-ink/70">
              {content.hero.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex items-center rounded-full bg-sangria px-6 lg:px-8 py-3 lg:py-4 font-semibold text-white shadow-lg transition hover:bg-sangria/90 hover:scale-105">
                Jetzt buchen
              </a>
              <a href="#bandvorstellung" className="inline-flex items-center gap-2 rounded-full border-2 border-sangria px-6 lg:px-8 py-3 font-semibold text-sangria transition hover:bg-sangria/5">
                {content.hero.scrollLabel}
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked */}
      <div className="md:hidden w-full space-y-6">
        <div className="hero-image-card w-full" style={{ aspectRatio: '800/590' }}>
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-sand/40 bg-cream">
            <Image src={heroImage} alt={content.hero.imageAlt} fill priority className="object-cover" />
            <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-terracotta/20 via-transparent to-clay/15 pointer-events-none" />
          </div>
        </div>
        <div>
          <p className="mb-3 inline-flex rounded-full border border-sangria/30 bg-sangria/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sangria">
            Nordheim am Main, Germany
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink leading-tight">
            Alegría!
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            {content.hero.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#kontakt" className="inline-flex items-center rounded-full bg-sangria px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-sangria/90 hover:scale-105">
              Jetzt buchen
            </a>
            <a href="#bandvorstellung" className="inline-flex items-center gap-2 rounded-full border-2 border-sangria px-6 py-3 font-semibold text-sangria transition hover:bg-sangria/5">
              {content.hero.scrollLabel}
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
