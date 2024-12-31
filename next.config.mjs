/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/next-js-hosting",
  images: {
    unoptimized: false,
  }
};

export default nextConfig;
