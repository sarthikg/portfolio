import { getCollection, type CollectionEntry } from "astro:content";

export async function getExperiences(): Promise<
  CollectionEntry<"experience">[]
> {
  const experiences = await getCollection("experience");
  // TODO: Sort the experiences by date & isPrimary
  return experiences;
}
