import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// const backendURL = 'https://twitter-back-production-5485.up.railway.app';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ]
  // server: {
  //   proxy: {
  //     // Proxy API requests to the backend server
  //     '/api': {
  //       target: backendURL,
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
})
