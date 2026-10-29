import Image from 'next/image';
import { content } from '@/data/content';

export function DieMusikiSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <h3 className="font-display text-3xl font-semibold tracking-tight text-ink">
        {content.musiker.title}
      </h3>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">
        {content.musiker.intro}
      </p>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-1 gap-y-10 sm:gap-y-1 justify-items-center">
        {content.musiker.members.map((member, index) => (
          <div key={member.name} className="flex flex-col items-center w-full px-2 sm:px-0">
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
            <h4 className="mt-4 whitespace-nowrap font-display text-sm font-semibold text-ink text-center sm:text-lg sm:whitespace-normal">{member.name}</h4>
            <p className="min-h-[4rem] text-sm font-semibold uppercase tracking-[0.1em] text-clay text-center sm:min-h-0 sm:tracking-[0.2em]">
              {member.role.split(', ').map((part, i, parts) => (
                <span key={part} className="block sm:inline">
                  {part}
                  {i < parts.length - 1 ? ',' : ''}
                  {i < parts.length - 1 ? ' ' : ''}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
