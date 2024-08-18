import { READ_ARTICLE_KEY } from "src/constants";

/**
 * Store the current article as read article in local storage
 * @param articleSlug - slug of the article to be added
 */
export function storeArticleAsRead(articleSlug: string): void {
  const readArticles = localStorage.getItem(READ_ARTICLE_KEY);

  let readArticleList: string[] = [];
  if (readArticles) {
    readArticleList = readArticles.split(", ");
  }

  if (!readArticleList.includes(articleSlug)) {
    readArticleList.push(articleSlug);
  }

  localStorage.setItem(READ_ARTICLE_KEY, readArticleList.join(", "));
}
