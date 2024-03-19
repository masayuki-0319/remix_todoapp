import { defineConfig } from 'vite';

import baseDefineConfig from './vite.config';

export default defineConfig({
  ...baseDefineConfig,
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
