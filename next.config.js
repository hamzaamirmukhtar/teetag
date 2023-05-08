/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["teetag.wpengine.com", "teetag-app-documents.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
