// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,

  // Stop the browser from fetching *.map files in production (cleans Lighthouse “console errors”)
  productionBrowserSourceMaps: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // add domains if you load remote images later
  },

  async redirects() {
    return [
      { source: '/case-study', destination: '/case-studies', permanent: true },
    ];
  },

  async rewrites() {
    return [];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
