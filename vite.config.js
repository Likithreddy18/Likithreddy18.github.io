import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed at https://likithreddy18.github.io/
// If you later move this to a project-page repo (e.g. /portfolio),
// change `base` to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          r3f: ['@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap'],
        },
      },
    },
  },
});
