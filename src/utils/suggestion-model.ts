import { getAllPublishedArticles } from "@facade/article";
import type { CollectionEntry } from "astro:content";
import { READ_ARTICLE_KEY } from "src/constants";

export async function getSuggestedArticles(
  forArticle: CollectionEntry<"article">,
): Promise<CollectionEntry<"article">[]> {
  const articles = await getAllPublishedArticles();
  const articleWithScores = await Promise.all(
    articles
      // Filter out the current article
      .filter((article) => article.slug !== forArticle.slug)
      .map(async (article) => ({
        ...article,

        // Prioritize articles with more views
        views:
          (await getArticleViews(article.slug)) / (await getMaxArticleViews()),

        // Deprioritize articles already read by the user
        isRead: getArticleIsRead(article.slug),

        // Prioritize articles with similar tags as the current article
        similarTagCount:
          getArticleSimilarTagCount(forArticle.data.tags, article.data.tags) /
          forArticle.data.tags.length,
      }))
      // Calculate the suggestion score
      .map(async (article) => ({
        ...(await article),
        suggestionScore: getSuggestionScore(
          (await article).views,
          (await article).isRead,
          (await article).similarTagCount,
        ),
      })),
  );
  return articleWithScores
    .sort((a, b) => b.suggestionScore - a.suggestionScore)
    .slice(0, 4);
}

async function getMaxArticleViews(): Promise<number> {
  const response = await fetch("/api/article");
  const result = await response.json();
  return result as number;
}

async function getArticleViews(articleSlug: string): Promise<number> {
  const searchParams = new URLSearchParams({ article: articleSlug });
  const url = `/api/article?${searchParams}`;
  const response = await fetch(url);
  const result = await response.json();
  return result as number;
}

function getArticleIsRead(articleSlug: string): boolean {
  const readArticles = localStorage.getItem(READ_ARTICLE_KEY);

  let readArticleList: string[] = [];
  if (readArticles) {
    readArticleList = readArticles.split(", ");
  }

  return readArticleList.includes(articleSlug);
}

function getArticleSimilarTagCount(
  forArticleTags: string[],
  currentArticleTags: string[],
): number {
  let similarArticleCount = 0;
  for (const tag of forArticleTags) {
    if (currentArticleTags.includes(tag)) {
      similarArticleCount++;
    }
  }
  return similarArticleCount;
}

function getSuggestionScore(
  views: number,
  isRead: boolean,
  similarTagCount: number,
): number {
  return views + (isRead ? 0 : 1) + similarTagCount;
}
