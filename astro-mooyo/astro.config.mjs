import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mooyo.be",

  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap(),
    sanity({
      projectId: "2iltd6hz",
      dataset: "production",
      useCdn: false,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@assets": "/src/assets",
        "@src": "/src",
      },
    },
  },
});
