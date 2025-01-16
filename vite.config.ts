import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 2008,
    open: true,
  },
  build: {
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500, 
    manifest: true,
  },
  optimizeDeps: {
    include: ['some-dependency'], 
  },
})
