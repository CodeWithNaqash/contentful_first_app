/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: '2mjrio5tzlqm',
    CONTENTFUL_ACCESS_KEY: 'WaZeazbsPdROsv97f98UTeKe-0zOZDqvruW7jA7s5qI',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
