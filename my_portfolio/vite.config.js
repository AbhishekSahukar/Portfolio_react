import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Vercel / Netlify compatible config
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist' },
  server: { port: 5173 },
})
