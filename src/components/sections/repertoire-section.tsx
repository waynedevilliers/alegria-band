import { content } from '@/data/content';
import { SetlistModal } from '@/components/setlist-modal';

export function RepertoireSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <h3 className="font-display text-3xl font-semibold tracking-tight text-ink">
        {content.bandvorstellung.setlist.title}
      </h3>
      <p className="mt-2 text-lg text-ink/75">
        {content.bandvorstellung.setlist.intro}
      </p>
      <div className="mt-8">
        <SetlistModal
          songs={content.bandvorstellung.setlist.songs}
          title={content.bandvorstellung.setlist.title}
        />
      </div>
    </div>
  );
}
