import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/Rent4UNext',
  assetPrefix: '/Rent4UNext/',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
