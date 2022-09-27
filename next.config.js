/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   unoptimized: true,
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/navara',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
