import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://sarthikg.com",
  output: "hybrid",
  trailingSlash: "never",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  integrations: [sitemap(), react(), db()],
});
