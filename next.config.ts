import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (emits ./out on `next build`).
  output: "export",
  // Served at the root of the custom domain, so no basePath/assetPrefix needed.
  // Emit folder/index.html routes so static hosts serve /mockup-b/ cleanly.
  trailingSlash: true,
  // Required for static export since there is no image optimization server.
  images: { unoptimized: true },
};

export default nextConfig;
