import { getCollection, type CollectionEntry } from "astro:content";

export async function getSideQuests(): Promise<
  CollectionEntry<"side-quest">[]
> {
  return getCollection("side-quest");
}
