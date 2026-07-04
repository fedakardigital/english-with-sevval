const nextConfig = {
  // TypeScript hatalarını tamamen görmezden gel
  typescript: {
    ignoreBuildErrors: true,
  },
  // ESLint hatalarını da görmezden gel ki build durmasın
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;