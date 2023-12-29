import { type CollectionEntry, getEntry } from "astro:content";

/**
 * Retrieves the page information for a given page.
 *
 * @param {string} page - The name of the page.
 * @return {Promise<CollectionEntry<"page-info">>} - A promise that resolves to the page information.
 */
export function getPageInfo(
  page: string,
): Promise<CollectionEntry<"page-info">> {
  return getEntry("page-info", page);
}
