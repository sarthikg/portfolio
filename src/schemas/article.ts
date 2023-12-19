import { DEFAULT_ARTICLE_ALT, DEFAULT_ARTICLE_COVER } from "@data/defaults";
import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";

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
  }),
});
