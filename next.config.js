/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => [
    {
      source: '/',
      destination: '/sign-up/credentials',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
