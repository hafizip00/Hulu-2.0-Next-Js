/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", 'image.tmdb.org', 'images.unsplash.com', 'cdn.freebiesupply.com'],
  }
}

module.exports = nextConfig
