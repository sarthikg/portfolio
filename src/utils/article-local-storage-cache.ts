import { READ_ARTICLE_KEY } from "src/constants";

/**
 * Store the current article as read article in local storage
 * @param slug - Slug of the article to be added
 */
export function storeArticleAsRead(slug: string): void {
  const readArticles = localStorage.getItem(READ_ARTICLE_KEY);

  let readArticleList: string[] = [];
  if (readArticles) {
    readArticleList = readArticles.split(", ");
  }

  if (!readArticleList.includes(slug)) {
    readArticleList.push(slug);
  }

  localStorage.setItem(READ_ARTICLE_KEY, readArticleList.join(", "));
}
