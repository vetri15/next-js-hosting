/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/next-js-hosting",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
