/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['bit.ly', 'firebasestorage.googleapis.com', 'picsum.photos'] // <== Domain name
  }
}

module.exports = nextConfig
