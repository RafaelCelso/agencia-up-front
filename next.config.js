/** @type {import('next').Config} */
const nextConfig = {
  // Configurações para produção na VPS
  output: "standalone",

  // Otimizações para produção
  poweredByHeader: false,
  compress: true,

  // Configurações de imagens para VPS
  images: {
    unoptimized: true, // Necessário para VPS sem otimização de imagens
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    // Configurações adicionais para VPS
    domains: [],
    remotePatterns: [],
  },

  // Configurações de build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Headers para segurança e performance
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Configurações de redirecionamento
  async redirects() {
    return [];
  },

  // Configurações de rewrites se necessário
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
