import { content } from '@/data/content';

export function IntroSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="rounded-[2rem] bg-sangria p-8 shadow-glow sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cream/70">
          {content.bandvorstellung.label}
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
          {content.bandvorstellung.title}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-cream/90">
          <p>{content.bandvorstellung.bio.intro}</p>
          <p>{content.bandvorstellung.bio.details}</p>
        </div>
      </div>
    </div>
  );
}
