import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // images: {
  //   remotePatterns: [new URL("https://images.prismic.io/staticmania/ZiT7AvPdc1huKqJS_Next.js.jpg?auto=format,compress")],
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
     
      },
    ],
  },
};

export default nextConfig;
