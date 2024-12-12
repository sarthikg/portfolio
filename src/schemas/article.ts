import { DEFAULT_ARTICLE_ALT, DEFAULT_ARTICLE_COVER } from "src/constants";
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export const articleSchema = defineCollection({
  loader: glob({
    pattern: "**/*.{md, mdx}",
    base: "src/content/article",
  }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: z.object({
        src: image().default({ src: DEFAULT_ARTICLE_COVER }),
        alt: z.string().default(DEFAULT_ARTICLE_ALT),
      }),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      youtube: z.string().optional(),
    }),
});
