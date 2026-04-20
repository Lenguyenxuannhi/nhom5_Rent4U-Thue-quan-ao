import React from 'react';

export function SkeletonCard() {
  return (
    <div className="animate-pulse bg-card rounded-2xl p-3 border border-border">
      <div className="h-40 bg-muted rounded mb-3" />
      <div className="h-3 bg-muted rounded w-3/4 mb-2" />
      <div className="h-3 bg-muted rounded w-1/2" />
    </div>
  );
}
