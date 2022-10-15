/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // images: {
  //   unoptimized: true,
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',

  //       destination: '/navara',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
