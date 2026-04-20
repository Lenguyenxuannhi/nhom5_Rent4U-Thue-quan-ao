"use client";

import React, { ImgHTMLAttributes, useState } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & { fallback?: string };

export function ImageWithFallback({ src, alt = '', fallback = 'https://via.placeholder.com/800x600?text=Image', ...props }: Props) {
  const [errored, setErrored] = useState(false);
  return (
    // Use a plain <img> to avoid next/image external domain config during initial migration
    <img
      src={(errored ? fallback : (src as string)) || fallback}
      alt={alt}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
