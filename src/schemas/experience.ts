import { z, defineCollection } from "astro:content";

export const experienceSchema = defineCollection({
  type: "content",
  schema: z.object({
    titles: z.array(
      z.object({
        title: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
      }),
    ),
    company: z.string(),
    companyUrl: z.string(),
    location: z.string(),
    isPrimary: z.boolean().default(true),
  }),
});
