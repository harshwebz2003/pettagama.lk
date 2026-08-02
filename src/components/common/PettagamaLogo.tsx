'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PettagamaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg';
}

export const PettagamaLogo: React.FC<PettagamaLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const dimensions =
    size === 'sm'
      ? 'h-8 w-auto'
      : size === 'lg'
      ? 'h-14 w-auto'
      : 'h-10 sm:h-12 w-auto';

  return (
    <Link href="/" className={`inline-flex items-center group shrink-0 ${className}`}>
      <div className="relative flex items-center justify-center p-1 rounded-2xl bg-white/95 shadow-sm group-hover:shadow-md border border-slate-200/80 transition-all duration-300 group-hover:scale-105">
        <Image
          src="/logo.jpg"
          alt="Pettagama.lk Official Logo"
          width={180}
          height={60}
          priority
          className={`${dimensions} object-contain`}
        />
      </div>
    </Link>
  );
};
