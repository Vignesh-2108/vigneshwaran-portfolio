import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel serves the site from the domain root, so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
