import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(), // Your method for Tailwind CSS
    ],
  },
  runtimeConfig: {
    public: {
      socketBase: process.env.SOCKET_BASE_URL || 'http://localhost:3000', // Adjusted for chat app
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
        },
      ],
    },
  },
  plugins: ['~/plugins/socket.ts'], // Added for Socket.io
});