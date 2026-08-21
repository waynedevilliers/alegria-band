import { content } from '@/data/content';
import { LiteYouTube } from '@/components/lite-youtube';

export function VideosSection() {
  return (
    <section
      id="videos"
      className="scroll-mt-24 space-y-8 bg-sand/40 px-4 py-20 pt-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sangria/75">
          {content.videos.label}
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {content.videos.title}
        </h2>
        <p className="mt-4 text-lg text-ink/75">{content.videos.intro}</p>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.videos.items.map((videoId) => (
            <LiteYouTube
              key={videoId}
              id={videoId}
              title={`${content.videos.title} ${videoId}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
