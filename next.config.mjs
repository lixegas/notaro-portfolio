/**
 * @type {import('next').NextConfig}
 */

// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath: isProd ? '/notaro-portfolio' : '',
  assetPrefix: isProd ? '/notaro-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;