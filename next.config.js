/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    COOKIE_PASSWORD: process.env.COOKIE_PASSWORD,
  },
};

module.exports = nextConfig;
