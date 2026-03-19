import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  define: {
    global: 'globalThis',
  },
  ssr: {
    noExternal: [
        "@rescui/button",
        "@rescui/card",
        "@rescui/tab-list",
        "@rescui/typography",
        "@rescui/ui-contexts",
        "@rescui/icons",
        "@rescui/colors",
    ],
    external: ["@jetbrains/kotlin-web-site-ui", "prop-types", "classnames"],
},
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ["app/styles"],
      },
    },
  },
});