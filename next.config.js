/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/location",
        destination: "/location/page/1",
        permanent: false,
      },
      {
        source: "/character",
        destination: "/character/page/1",
        permanent: false,
      },
      {
        source: "/episode",
        destination: "/episode/page/1",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["rickandmortyapi.com"],
  },
};

module.exports = nextConfig;
