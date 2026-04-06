import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nielg.github.io",

  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [sitemap()],
});
