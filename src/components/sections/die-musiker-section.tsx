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
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 justify-items-center">
        {content.musiker.members.map((member, index) => (
          <div key={member.name} className="flex flex-col items-center w-full">
            <div className="relative w-32 h-44 rounded-lg overflow-hidden shadow-md ring-2 ring-sangria ring-offset-4 ring-offset-cream transition-all duration-300 hover:shadow-lg hover:shadow-sangria/40 motion-safe:hover:scale-105">
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                className="object-cover"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              {/* Warm color grade overlay for consistency */}
              <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-terracotta/15 via-transparent to-clay/10 pointer-events-none" />
            </div>
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
