import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5126', // .NET API URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
