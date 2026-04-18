/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // ← Critical for Firebase static hosting
  trailingSlash: true,   // ← Firebase needs this
  images: {
    unoptimized: true    // ← Required for static export
  }
}

module.exports = nextConfig
