import Image from 'next/image';

interface ImageWithGradeProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  grade?: boolean;
}

export function ImageWithGrade({
  src,
  alt,
  width,
  height,
  fill,
  className = '',
  objectFit = 'cover',
  grade = true,
}: ImageWithGradeProps) {
  const objectClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    'scale-down': 'object-scale-down',
  }[objectFit];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={objectClass}
      />
      {grade && (
        <div className="absolute inset-0 bg-linear-to-br from-sangria/15 via-transparent to-sangria/20 mix-blend-multiply pointer-events-none" />
      )}
    </div>
  );
}
