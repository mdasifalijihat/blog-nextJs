import "./src/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "media.istockphoto.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "www.bigfootdigital.co.uk",
    ],
  },
};

export default nextConfig;
