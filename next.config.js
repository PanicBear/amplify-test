/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MY_ENV_VAR: process.env.MY_ENV_VAR,
  },
};

module.exports = nextConfig;
