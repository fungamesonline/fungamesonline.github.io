/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory (e.g., github.com/username/repo-name),
  // uncomment and set the basePath to your repository name:
  // basePath: '/v0-games',
  // trailingSlash: true,
}

export default nextConfig
