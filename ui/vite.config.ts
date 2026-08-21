import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const uiRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: uiRoot,
  plugins: [viteSingleFile()],
  build: {
    outDir: "../dist-ui",
    emptyOutDir: true,
    rollupOptions: {
      input: "index.html",
    },
  },
});
