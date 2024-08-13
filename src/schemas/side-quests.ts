import { DEFAULT_ARTICLE_ALT, DEFAULT_ARTICLE_COVER } from "src/constants";
import { z, defineCollection } from "astro:content";

export const sideQuestSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string().default(DEFAULT_ARTICLE_COVER),
      alt: z.string().default(DEFAULT_ARTICLE_ALT),
    }),
  }),
});
