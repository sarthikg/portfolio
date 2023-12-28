import { z, defineCollection } from "astro:content";

export const pageInfoSchema = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});
