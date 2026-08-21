import Image from 'next/image';
import { content } from '@/data/content';

export function IntroSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="rounded-[2rem] bg-cream p-8 shadow-soft sm:p-10">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {content.bandvorstellung.title}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Photo */}
          <div className="relative overflow-hidden rounded-lg shadow-md ring-2 ring-sangria ring-offset-4 ring-offset-cream" style={{ aspectRatio: '800/590' }}>
            <Image
              src="/images/hero/hero_image.jpeg"
              alt="Alegría! band performing live on stage"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            {/* Pull-quote */}
            <div className="border-l-4 border-sangria pl-6">
              <p className="font-display text-2xl font-semibold text-sangria leading-tight">
                Pop-Hits aus vier Jahrzehnten – neu interpretiert mit Latin-Flair
              </p>
            </div>

            {/* Body text */}
            <div className="space-y-4 text-lg leading-8 text-ink/75">
              <p>{content.bandvorstellung.bio.intro}</p>
              <p>{content.bandvorstellung.bio.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
