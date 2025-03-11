import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/shared/components' },
      { find: '@hooks', replacement: '/src/shared/hooks' },
      { find: '@utils', replacement: '/src/shared/utils' },
    ],
  },
});
