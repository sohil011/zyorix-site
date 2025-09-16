/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // IMPORTANT: do NOT set `output: 'export'`.
  // Leaving it undefined keeps the default server build (works with middleware/GA4).
  images: {
    // Add remote domains here if you load external images:
    // domains: [],
  },

  eslint: {
    // Keep builds failing on ESLint errors in CI; warnings are fine.
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
