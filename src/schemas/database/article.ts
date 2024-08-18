import { column, defineTable } from "astro:db";

export const Article = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    viewCount: column.number({ default: 0 }),
  },
});
