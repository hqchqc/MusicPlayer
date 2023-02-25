// vite.config.ts
import path from "path";
import { defineConfig } from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite@4.0.4/node_modules/vite/dist/node/index.js";
import Preview from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite-plugin-vue-component-preview@0.3.4_vite@4.0.4/node_modules/vite-plugin-vue-component-preview/out/index.js";
import Vue from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.0.4+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite-plugin-pages@0.28.0_vite@4.0.4/node_modules/vite-plugin-pages/dist/index.mjs";
import generateSitemap from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite-ssg-sitemap@0.4.3/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite-plugin-vue-layouts@0.7.0_oh6kquo6biweymmreht6aj34oy/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/unplugin-auto-import@0.12.1_@vueuse+core@9.11.0/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite-plugin-vue-markdown@0.22.2_vite@4.0.4/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import { VitePWA } from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite-plugin-pwa@0.14.1_vite@4.0.4/node_modules/vite-plugin-pwa/dist/index.mjs";
import VueI18n from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/@intlify+unplugin-vue-i18n@0.8.1_vue-i18n@9.2.2/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import Inspect from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite-plugin-inspect@0.7.14_vite@4.0.4/node_modules/vite-plugin-inspect/dist/index.mjs";
import Inspector from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/vite-plugin-vue-inspector@3.2.1_vite@4.0.4/node_modules/vite-plugin-vue-inspector/dist/index.mjs";
import LinkAttributes from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import Unocss from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/unocss@0.48.4_vite@4.0.4/node_modules/unocss/dist/vite.mjs";
import Shiki from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/markdown-it-shiki@0.7.2/node_modules/markdown-it-shiki/dist/index.mjs";
import VueMacros from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/unplugin-vue-macros@1.4.2_httr7wqcry5mq7lnplxmfdl6ve/node_modules/unplugin-vue-macros/dist/vite.mjs";
import { NaiveUiResolver } from "file:///D:/codeIsLife/MusicPlayer/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "D:\\codeIsLife\\MusicPlayer";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    Preview(),
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
          reactivityTransform: true
        })
      }
    }),
    Pages({
      extensions: ["vue", "md"]
    }),
    Layouts(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar"
          ]
        }
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores"
      ],
      vueTemplate: true
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
      resolvers: [NaiveUiResolver()]
    }),
    Unocss(),
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    Inspect(),
    Inspector({
      toggleButtonVisibility: "never"
    })
  ],
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"]
    }
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlSXNMaWZlXFxcXE11c2ljUGxheWVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlSXNMaWZlXFxcXE11c2ljUGxheWVyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlSXNMaWZlL011c2ljUGxheWVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgUHJldmlldyBmcm9tICd2aXRlLXBsdWdpbi12dWUtY29tcG9uZW50LXByZXZpZXcnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBnZW5lcmF0ZVNpdGVtYXAgZnJvbSAndml0ZS1zc2ctc2l0ZW1hcCdcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndml0ZS1wbHVnaW4tdnVlLW1hcmtkb3duJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCBWdWVJMThuIGZyb20gJ0BpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGUnXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuaW1wb3J0IEluc3BlY3RvciBmcm9tICd2aXRlLXBsdWdpbi12dWUtaW5zcGVjdG9yJ1xuaW1wb3J0IExpbmtBdHRyaWJ1dGVzIGZyb20gJ21hcmtkb3duLWl0LWxpbmstYXR0cmlidXRlcydcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgU2hpa2kgZnJvbSAnbWFya2Rvd24taXQtc2hpa2knXG5pbXBvcnQgVnVlTWFjcm9zIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYWNyb3Mvdml0ZSdcbmltcG9ydCB7IE5haXZlVWlSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcblxuICBwbHVnaW5zOiBbXG4gICAgUHJldmlldygpLFxuXG4gICAgVnVlTWFjcm9zKHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgdnVlOiBWdWUoe1xuICAgICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcbiAgICAgICAgICByZWFjdGl2aXR5VHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGFubm9lcnUvdml0ZS1wbHVnaW4tcGFnZXNcbiAgICBQYWdlcyh7XG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICBMYXlvdXRzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAgJ3Z1ZS9tYWNyb3MnLFxuICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFpdmUtdWknOiBbXG4gICAgICAgICAgICAndXNlRGlhbG9nJyxcbiAgICAgICAgICAgICd1c2VNZXNzYWdlJyxcbiAgICAgICAgICAgICd1c2VOb3RpZmljYXRpb24nLFxuICAgICAgICAgICAgJ3VzZUxvYWRpbmdCYXInLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgJ3NyYy9jb21wb3NhYmxlcycsXG4gICAgICAgICdzcmMvc3RvcmVzJyxcbiAgICAgIF0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gYWxsb3cgYXV0byBsb2FkIG1hcmtkb3duIGNvbXBvbmVudHMgdW5kZXIgYC4vc3JjL2NvbXBvbmVudHMvYFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICBkdHM6ICdzcmMvY29tcG9uZW50cy5kLnRzJyxcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vY3NzLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgVW5vY3NzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tdnVlLW1hcmtkb3duXG4gICAgLy8gRG9uJ3QgbmVlZCB0aGlzPyBUcnkgdml0ZXNzZS1saXRlOiBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZXNzZS1saXRlXG4gICAgTWFya2Rvd24oe1xuICAgICAgd3JhcHBlckNsYXNzZXM6ICdwcm9zZSBwcm9zZS1zbSBtLWF1dG8gdGV4dC1sZWZ0JyxcbiAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxuICAgICAgbWFya2Rvd25JdFNldHVwKG1kKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vcHJpc21qcy5jb20vXG4gICAgICAgIG1kLnVzZShTaGlraSwge1xuICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBsaWdodDogJ3ZpdGVzc2UtbGlnaHQnLFxuICAgICAgICAgICAgZGFyazogJ3ZpdGVzc2UtZGFyaycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgbWQudXNlKExpbmtBdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ3NhZmFyaS1waW5uZWQtdGFiLnN2ZyddLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1ZpdGVzc2UnLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVml0ZXNzZScsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXG4gICAgVnVlSTE4bih7XG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyldLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLWluc3BlY3RcbiAgICAvLyBWaXNpdCBodHRwOi8vbG9jYWxob3N0OjMzMzMvX19pbnNwZWN0LyB0byBzZWUgdGhlIGluc3BlY3RvclxuICAgIEluc3BlY3QoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJmYW5zcGx6L3ZpdGUtcGx1Z2luLXZ1ZS1pbnNwZWN0b3JcbiAgICBJbnNwZWN0b3Ioe1xuICAgICAgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eTogJ25ldmVyJyxcbiAgICB9KSxcbiAgXSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZXN0LWRldi92aXRlc3RcbiAgdGVzdDoge1xuICAgIGluY2x1ZGU6IFsndGVzdC8qKi8qLnRlc3QudHMnXSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBkZXBzOiB7XG4gICAgICBpbmxpbmU6IFsnQHZ1ZScsICdAdnVldXNlJywgJ3Z1ZS1kZW1pJ10sXG4gICAgfSxcbiAgfSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1zc2dcbiAgc3NnT3B0aW9uczoge1xuICAgIHNjcmlwdDogJ2FzeW5jJyxcbiAgICBmb3JtYXR0aW5nOiAnbWluaWZ5JyxcbiAgICBvbkZpbmlzaGVkKCkgeyBnZW5lcmF0ZVNpdGVtYXAoKSB9LFxuICB9LFxuXG4gIHNzcjoge1xuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cbiAgICBub0V4dGVybmFsOiBbJ3dvcmtib3gtd2luZG93JywgL3Z1ZS1pMThuL10sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUSxPQUFPLFVBQVU7QUFDcFIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdC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
