/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  reactStrictMode: true,
  redirects: async()=>
  {
    return[
      {
      source: '/hello-vercel',
      destination: 'https://vercel.com',
      permanent: false,
      },
    ]
  },
}
