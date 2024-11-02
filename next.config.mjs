import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*", // NextAuth 관련 요청은 백엔드로 보내지 않음
        destination: "/api/auth/:path*",
      },
      {
        source: "/api/:path*", // 나머지 모든 요청은 백엔드로 프록시
        destination: "http://localhost:4000/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flexible.img.hani.co.kr",
      },
      {
        protocol: "https",
        hostname: "naver.github.io",
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
