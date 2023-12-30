import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sarthikg.com/",
  output: "hybrid",
  trailingSlash: "always",
  adapter: vercel(),
  integrations: [sitemap()],
});
