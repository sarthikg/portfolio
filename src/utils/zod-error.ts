import type { z } from "astro/zod";

export function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      return `${issue.path.join(".")}: ${issue.message}`;
    })
    .join("\n");
}
