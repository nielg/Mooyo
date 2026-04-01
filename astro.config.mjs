import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nielg.github.io",
  base: "Mooyo",
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
