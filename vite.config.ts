import { svelte } from "@sveltejs/vite-plugin-svelte";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig, type UserConfig } from "vite";

// https://vite.dev/config/
const _default_1: UserConfig = defineConfig({
  plugins: [svelte()],
  experimental: {
    enableNativePlugin: true,
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(">= 0.2% and not dead and fully supports es6")),
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});

export default _default_1;
