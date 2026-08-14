import Image from 'next/image';
import { content } from '@/data/content';

const heroImage = '/images/hero/hero_image.jpeg';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-cream px-4 sm:px-8 py-12 sm:py-16 lg:py-20 min-h-svh flex items-center justify-center">
      <style>{`
        @keyframes heroScaleIn {
          from {
            opacity: 0;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .hero-image-card {
          animation: heroScaleIn 0.8s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-image-card {
            animation: none;
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="w-full max-w-4xl">
        {/* Centered image card with asymmetric margin */}
        <div className="relative hero-image-card ml-8 sm:ml-12 lg:ml-16" style={{ aspectRatio: '800/590' }}>
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-sand/40 bg-cream">
            <Image
              src={heroImage}
              alt={content.hero.imageAlt}
              fill
              priority
              className="object-cover"
            />
            {/* Warm color grade overlay */}
            <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-terracotta/20 via-transparent to-clay/15 pointer-events-none" />

            {/* Bottom-left gradient scrim for text legibility */}
            <div className="absolute inset-0 bg-linear-to-tr from-sangria/70 via-sangria/40 to-transparent pointer-events-none rounded-3xl" />

            {/* Text overlay - bottom-left corner */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 flex flex-col">
              <p className="mb-4 inline-flex rounded-full border border-cream/40 bg-cream/15 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cream w-fit">
                Nordheim am Main, Germany
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-cream leading-tight">
                Alegría!
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-cream/90 max-w-md">
                {content.hero.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-sangria px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white shadow-xl transition hover:bg-sangria/90 hover:shadow-2xl hover:scale-105"
                >
                  Jetzt buchen
                </a>
                <a
                  href="#bandvorstellung"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-cream px-6 sm:px-8 py-3 sm:py-4 font-semibold text-cream transition hover:bg-cream/10"
                >
                  {content.hero.scrollLabel}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
