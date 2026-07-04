import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Build sırasında TypeScript hatalarını görmezden gelerek süreci hızlandırır
    ignoreBuildErrors: true,
  },
};

export default nextConfig;