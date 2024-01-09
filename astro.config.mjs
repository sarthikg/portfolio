import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sarthikg.com/",
  output: "hybrid",
  trailingSlash: "always",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  integrations: [sitemap()],
});
