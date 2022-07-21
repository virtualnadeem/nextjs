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
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
}
