import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ["dcskw0wko0cwwogg848gog4k.147.93.176.165.sslip.io", "localhost"],
    port: 8081,
    host: true
  },
})
