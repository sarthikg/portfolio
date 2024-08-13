import { DEFAULT_ARTICLE_ALT, DEFAULT_ARTICLE_COVER } from "src/constants";
import { z, defineCollection } from "astro:content";

export const articleSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.object({
      src: z.string().default(DEFAULT_ARTICLE_COVER),
      alt: z.string().default(DEFAULT_ARTICLE_ALT),
    }),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    youtube: z.string().optional(),
  }),
});
