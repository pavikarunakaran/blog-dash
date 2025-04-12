import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables blocking build on ESLint errors
  }
};

export default nextConfig;
