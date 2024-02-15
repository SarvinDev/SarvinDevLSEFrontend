/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "t4.ftcdn.net",
      "media.istockphoto.com",
      "img.freepik.com",
      "t3.ftcdn.net",
      "food.fnr.sndimg.com",
    ], // regarding Creater Card testing Image
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
