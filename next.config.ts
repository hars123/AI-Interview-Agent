import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  aslint :{
    ignoreDuringBuilds : true,
  },
  typescript : {
    ignoreBuildErrors : true,
  }
};

export default nextConfig;
