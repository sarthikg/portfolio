import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const pageInfoSchema = defineCollection({
  loader: glob({
    pattern: "**/*.{md, mdx}",
    base: "src/content/page-info",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().optional(),
      pageUrl: z.string(),
      imageUrl: image(),
    }),
});
