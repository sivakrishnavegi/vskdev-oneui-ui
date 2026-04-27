import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'OneUIVue',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'lucide-vue-next', 'radix-vue', '@vueuse/core'],
      output: {
        globals: {
          vue: 'Vue',
          'lucide-vue-next': 'LucideVueNext',
          'radix-vue': 'RadixVue',
          '@vueuse/core': 'VueUse',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: false, // Keep the CSS built by build:css if any, though vite can handle CSS too
  },
});
