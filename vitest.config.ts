import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,  // Don't forget!
    environment: "vprisma",
    setupFiles: ["vitest-environment-vprisma/setup", "vitest.setup.ts"]
  },
});
