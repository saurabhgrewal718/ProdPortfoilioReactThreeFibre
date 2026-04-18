/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // ← Critical for Firebase static hosting
  trailingSlash: true,   // ← Firebase needs this
  images: {
    unoptimized: true    // ← Required for static export
  },
  compress: true,        // ← Enable gzip/brotli compression
  poweredByHeader: false, // ← Remove X-Powered-By header (minor security + perf)

  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
