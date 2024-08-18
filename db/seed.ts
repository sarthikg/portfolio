import { getAllPublishedArticles } from "@facade/article";
import { Article, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await seedArticles();
}

async function seedArticles() {
  const articles = await getAllPublishedArticles();
  await db.insert(Article).values(
    articles.map((article) => ({
      id: article.slug,
      viewCount: 0,
    })),
  );
}
