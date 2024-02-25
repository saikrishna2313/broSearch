/** @type {import('next').NextConfig} */
const nextConfig = {
 
    images: {
     experimental: {
    missingSuspenseWithCSRBailout: false,
  },
      
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
};

export default nextConfig;
