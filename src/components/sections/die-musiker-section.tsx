import Image from 'next/image';
import { content } from '@/data/content';

export function DieMusikiSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sangria/75">
        {content.musiker.label}
      </p>
      <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
        {content.musiker.title}
      </h3>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">
        {content.musiker.intro}
      </p>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
        {content.musiker.members.map((member, index) => (
          <div key={member.name} className="flex flex-col items-center w-full">
            <Image
              src={member.image}
              alt={member.imageAlt}
              width={170}
              height={238}
              className="rounded-[1.5rem] shadow-md"
              loading={index < 2 ? 'eager' : 'lazy'}
            />
            <h4 className="mt-4 font-display text-lg font-semibold text-ink text-center">{member.name}</h4>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay text-center">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
