/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'custom',
    // disableStaticImages: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/navara.nns.one',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
