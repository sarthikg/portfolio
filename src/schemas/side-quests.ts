import { DEFAULT_ARTICLE_ALT, DEFAULT_ARTICLE_COVER } from "@data/defaults";
import { z, defineCollection } from "astro:content";

export const sideQuestSchema = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        src: image().default({ src: DEFAULT_ARTICLE_COVER }),
        alt: z.string().default(DEFAULT_ARTICLE_ALT),
      }),
    }),
});
