/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows seamless static image export and deployment
  },
};

export default nextConfig;
