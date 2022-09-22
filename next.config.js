/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   })

  //   return config
  // },
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
