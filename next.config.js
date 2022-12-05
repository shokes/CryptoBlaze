/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    LAST_URL: process.env.NEXT_PUBLIC_LAST_URL,
  },
  images: {
    domains: ['assets.coingecko.com'],
  },
};

module.exports = nextConfig;
