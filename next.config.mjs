/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname:
          "/a/ACg8ocKovoP97yOyRAitt8S8Tl4krUHLR02-280vUOJQ0LhF9csCaw=s96-c",
      },
      { protocol: "https", hostname: "ca-central-1.graphassets.com" },
    ],
  },
};

export default nextConfig;
