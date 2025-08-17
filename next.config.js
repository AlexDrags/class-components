import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: './dist',
  // images: { unoptimized: true }, // Changes the build output directory to `./dist/`.
};

// export default nextConfig;
// const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
