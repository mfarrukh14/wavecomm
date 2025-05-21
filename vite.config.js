import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    // allow Vite to listen on all network interfaces (so ngrok can reach it)
    host: true,

    // optionally lock to the same port you’ll expose via ngrok
    port: 5173,         // or whatever port you use
    strictPort: true,   // fail instead of switching port if 5173 is busy

    // whitelist your ngrok host (or use 'all' to allow any)
    allowedHosts: [
      '.ngrok-free.app',
      // 'all'    // <-- use this instead if you don’t want to hard-code
    ]
  },

  plugins: [
    tailwindcss(),
  ],
})
