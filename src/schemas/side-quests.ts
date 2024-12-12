import { DEFAULT_ARTICLE_ALT, DEFAULT_ARTICLE_COVER } from "src/constants";
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export const sideQuestSchema = defineCollection({
  loader: glob({
    pattern: "**/*.{md, mdx}",
    base: "src/content/side-quest",
  }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      title: z.string(),
      description: z.string(),
      image: z.object({
        src: image().default({ src: DEFAULT_ARTICLE_COVER }),
        alt: z.string().default(DEFAULT_ARTICLE_ALT),
      }),
    }),
});
