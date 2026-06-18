import { defineConfig } from 'vite';

export default defineConfig({
  base: '/aoge/',
  build: {
    // esnext: allow top-level await (game requires a modern WebGL2 browser anyway)
    target: 'esnext',
    chunkSizeWarningLimit: 1500
  }
});
