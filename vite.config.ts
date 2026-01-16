import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        cake: 'cake.html',
        memories: 'memories.html',
        letter: 'letter.html',
        wishes: 'wishes.html'
      }
    }
  }
});
