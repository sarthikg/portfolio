import { READ_ARTICLE_KEY } from "src/constants";

/**
 * Increment the read count of an article.
 * @param slug - The slug of the article.
 */
export async function incrementArticleReadCount(
  slug: string,
): Promise<Response> {
  // If article is already read by user, skip incrementation
  const readArticles = localStorage.getItem(READ_ARTICLE_KEY);
  let readArticleList: string[] = [];
  if (readArticles) {
    readArticleList = readArticles.split(", ");
  }
  if (readArticleList.includes(slug)) {
    return;
  }
  // Increment the read count of article
  const response = await fetch("/api/article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ article: slug }),
  });
  return response;
}
