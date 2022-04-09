import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import styleImport, { VantResolve } from "vite-plugin-style-import";
import { VantResolver } from "unplugin-vue-components/resolvers";

// const BASE_PREFIX = "https://netease-cloud-music-d9t45hc1f-hqchqc.vercel.app/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  // server: {
  //   proxy: {
  //     "/banner": BASE_PREFIX,
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
