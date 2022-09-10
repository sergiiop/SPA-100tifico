import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  base: '/SPA-100tifico/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  plugins: []
})
