import { z, defineCollection } from "astro:content";

export const pageInfoSchema = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().optional(),
      pageUrl: z.string(),
      imageUrl: image(),
    }),
});
