const { i18n } = require("./i18n.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  i18n,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shv3d.boomgames.vn",
        port: "",
        pathname: "/api/uploads//assets/**",
      },
    ],
  },
  nextScriptWorkers: true,
  env: {
    MYSQL_HOST: "58.84.2.93",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "nota_cms",
    MYSQL_USER: "cms_adm ",
    MYSQL_PASSWORD: "Secret@12",
  },

  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://custom-routes-proxying-endpoint.vercel.app/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
