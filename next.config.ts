import type { NextConfig } from "next";

function normalizeBasePath(p?: string) {
  if (!p) return '';
  return '/' + p.replace(/^\/+|\/+$/g, ''));
}

const explicit = process.env.NEXT_BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH;
let derivedBase = '';
if (explicit) {
  derivedBase = normalizeBasePath(explicit);
} else if (process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.split('/').pop();
  derivedBase = repo ? normalizeBasePath(repo) : '';
} else {
  derivedBase = '/rent4u-nextjs'; // fallback (optional)
}

const nextConfig: NextConfig = {
  output: 'export',
  basePath: derivedBase || undefined,
  assetPrefix: derivedBase ? `${derivedBase}/` : undefined,
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
