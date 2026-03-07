import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'cy'],  // English & Welsh
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },
}

export default nextConfig;