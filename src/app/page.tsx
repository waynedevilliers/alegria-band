'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { IntroSection } from '@/components/sections/intro-section';
import { RepertoireSection } from '@/components/sections/repertoire-section';
import { DieMusikiSection } from '@/components/sections/die-musiker-section';
import { TermineSection } from '@/components/sections/termine-section';
import { FotosSection } from '@/components/sections/fotos-section';
import { VideosSection } from '@/components/sections/videos-section';
import { KontaktSection } from '@/components/sections/kontakt-section';
import { SectionDivider } from '@/components/section-divider';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <HeroSection />
      <SectionDivider color="rgb(245, 232, 213)" className="-mb-0.5" />

      <section
        id="bandvorstellung"
        className="scroll-mt-24 space-y-16 bg-cream px-4 py-20 sm:px-6 lg:px-8"
      >
        <IntroSection />
        <RepertoireSection />
        <DieMusikiSection />
      </section>
      <SectionDivider color="rgb(234, 215, 193)" className="-mb-0.5" />

      <TermineSection />
      <SectionDivider color="rgb(245, 232, 213)" className="-mb-0.5" />

      <FotosSection />
      <SectionDivider color="rgb(229, 215, 193)" className="-mb-0.5" />

      <VideosSection />
      <SectionDivider color="rgb(245, 232, 213)" className="-mb-0.5" />

      <KontaktSection />

      <footer className="border-t border-sand/70 bg-cream px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <nav className="mb-4 space-x-4 text-sm">
            <a
              href="/impressum"
              className="text-ink transition hover:text-sangria focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sangria"
            >
              Impressum
            </a>
            <span className="text-sand/70">•</span>
            <a
              href="/datenschutz"
              className="text-ink transition hover:text-sangria focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sangria"
            >
              Datenschutz
            </a>
          </nav>
          <p className="text-sm text-ink/60">
            © {new Date().getFullYear()} Alegría! Band. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </main>
  );
}
