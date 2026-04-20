import React from 'react';

export function StarRating({ rating = 0, count }: { rating?: number; count?: number }) {
  const rounded = Math.round(rating || 0);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rounded ? 'text-yellow-400' : 'text-muted-foreground'}>★</span>
      ))}
      {typeof count === 'number' && <span className="text-xs text-muted-foreground ml-2">({count})</span>}
    </div>
  );
}
