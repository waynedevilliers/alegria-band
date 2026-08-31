import Image from 'next/image';
import { content } from '@/data/content';

const heroImage = '/images/Alegria_22.05.2022(Matt_Keyworth)/Alegria_220622_00017.jpg';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-cream px-4 sm:px-8 pt-0 pb-12 sm:pb-16 lg:pb-20 lg:min-h-svh lg:flex lg:items-center lg:justify-center">
      {/* Desktop: Image with overlay (lg and above) */}
      <div className="hidden lg:block hero-image-card relative mx-auto" style={{ width: '90vw', aspectRatio: '800/590', maxWidth: '90vw', maxHeight: '80vh' }}>
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-sand/40 bg-cream">
          <Image src={heroImage} alt={content.hero.imageAlt} fill priority className="object-contain" />
          <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-terracotta/20 via-transparent to-clay/15 pointer-events-none" />

          {/* Gradient scrim from bottom-left */}
          <div className="absolute inset-0 bg-linear-to-tr from-sangria/70 via-sangria/40 to-transparent pointer-events-none" />

          {/* Text overlaid bottom-left */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <p className="mb-4 inline-flex rounded-full border border-cream/80 bg-cream/75 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-ink/95 w-fit">
              Nordheim am Main, Germany
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.4)' }}>
              Alegría!
            </h1>
            <p className="mt-4 text-base sm:text-lg font-semibold leading-relaxed text-white max-w-md" style={{ textShadow: '0 3px 10px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)' }}>
              {content.hero.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-sangria px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white shadow-2xl transition hover:bg-sangria/90 hover:shadow-3xl hover:scale-105"
              >
                Jetzt buchen
              </a>
              <a
                href="#bandvorstellung"
                className="inline-flex items-center gap-3 rounded-full border-2 border-cream/80 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-cream transition hover:bg-cream/10"
              >
                {content.hero.scrollLabel}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Image only, then text below in normal flow (below lg) */}
      <div className="lg:hidden mx-auto w-full px-0 sm:px-4">
        <div className="hero-image-card relative -mx-4 sm:mx-auto" style={{ width: 'calc(100% + 2rem)', aspectRatio: '800/590', maxWidth: 'calc(100% + 2rem)' }}>
          <div className="relative w-full h-full rounded-b-2xl sm:rounded-3xl overflow-hidden shadow-2xl sm:border-4 sm:border-sand/40 bg-cream">
            <Image src={heroImage} alt={content.hero.imageAlt} fill priority className="object-contain" />
            <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-terracotta/20 via-transparent to-clay/15 pointer-events-none" />
          </div>
        </div>

        {/* Text below image on mobile */}
        <div className="px-4 sm:px-0 mt-8 space-y-4">
          <p className="inline-flex rounded-full border border-sangria/30 bg-sangria/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-sangria/75 w-fit">
            Nordheim am Main, Germany
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight text-ink leading-tight">
            Alegría!
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-ink/75 max-w-md">
            {content.hero.tagline}
          </p>
          <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-sangria px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white shadow-xl transition hover:bg-sangria/90 hover:shadow-2xl hover:scale-105"
            >
              Jetzt buchen
            </a>
            <a
              href="#bandvorstellung"
              className="inline-flex items-center gap-3 rounded-full border-2 border-sangria px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sangria transition hover:bg-sangria/10"
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
