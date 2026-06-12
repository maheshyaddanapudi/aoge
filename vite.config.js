import { defineConfig } from 'vite';

export default defineConfig({
  base: '/aoge/',
  build: {
    chunkSizeWarningLimit: 1500
  }
});
