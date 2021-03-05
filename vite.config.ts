import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.20:8081',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/other': {
        target: 'http://192.168.0.20:8081',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/other/, '/api'),
      },
    },
  },
});
