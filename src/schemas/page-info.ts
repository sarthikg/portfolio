import { z, defineCollection } from "astro:content";

export const pageInfoSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    image: z.string(),
  }),
});
