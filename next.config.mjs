/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Photos servies depuis public/img : formats modernes générés à la volée.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
