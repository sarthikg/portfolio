import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";

export const experienceSchema = defineCollection({
  type: "content",
  schema: z.object({
    designation: z.string(),
    company: z.string(),
    companyUrl: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    isPrimary: z.boolean().default(true),
  }),
});
