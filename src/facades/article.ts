import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Retrieves all published articles from the collection.
 * @return {Promise<CollectionEntry<"article">[]>} A promise that resolves to an array of published articles.
 */
export function getAllPublishedArticles(): Promise<
  CollectionEntry<"article">[]
> {
  return getCollection(
    "article",
    ({ data }: CollectionEntry<"article">) => !data.draft,
  );
}

/**
 * Retrieves all featured articles from a collection.
 * @return {Promise<CollectionEntry<"article">[]>} A promise that resolves to an array of collection entries.
 */
export function getAllFeaturedArticles(): Promise<
  CollectionEntry<"article">[]
> {
  return getCollection(
    "article",
    ({ data }: CollectionEntry<"article">) => !data.draft && data.featured,
  );
}

/**
 * Retrieves all articles with a specific tag.
 * @param {string} tag - The tag to filter articles by.
 * @return {Promise<CollectionEntry<"article">[]>} A promise that resolves to an array of article entries.
 */
export function getAllArticlesWithTag(
  tag: string,
): Promise<CollectionEntry<"article">[]> {
  return getCollection(
    "article",
    ({ data }: CollectionEntry<"article">) =>
      !data.draft && data.tags.includes(tag),
  );
}
