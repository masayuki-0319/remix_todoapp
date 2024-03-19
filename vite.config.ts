import { vitePlugin as remix } from '@remix-run/dev';
import { flatRoutes } from 'remix-flat-routes';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    remix({
      ignoredRouteFiles: ['**/*'],
      serverModuleFormat: 'esm',
      routes: async (defineRoutes) => flatRoutes('routes', defineRoutes),
    }),
  ],
});
