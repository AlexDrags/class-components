import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
  images: { unoptimized: true }, // Changes the build output directory to `./dist/`.
};

export default nextConfig;
