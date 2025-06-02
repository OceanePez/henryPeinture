import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

const configWithPlugins = createNextIntlPlugin("./src/i18n/request.ts")(
  baseConfig
);

const nextConfig = configWithPlugins;
export default nextConfig;
