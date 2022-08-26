/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['bit.ly'] // <== Domain name
  }
}

module.exports = nextConfig
