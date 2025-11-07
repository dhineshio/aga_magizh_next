import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  assetPrefix: '',
  basePath: '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
