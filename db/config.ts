import { Article } from "@schema/database/article";
import { defineDb } from "astro:db";

export default defineDb({
  tables: {
    Article,
  },
});
