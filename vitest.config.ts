import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'vprisma',
    setupFiles: ['vitest-environment-vprisma/setup', 'vitest.setup.ts'],
    environmentOptions: {
      vprisma: {
        databaseUrl: process.env.DATABASE_URL,
      },
    },
  },
});
