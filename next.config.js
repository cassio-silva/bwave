/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  compiler: {
    styledComponents: true,
    swcMinify: true,
  }
}

// nextConfig
