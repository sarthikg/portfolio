import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Retrieves experiences from the collection.
 *
 * @return {Promise<CollectionEntry<"experience">[]>} An array of experiences from the collection.
 */
export async function getExperiences(): Promise<
  CollectionEntry<"experience">[]
> {
  const experiences = await getCollection("experience");
  experiences.sort((a, b) => {
    const endDateA = (a.data.endDate || new Date()).getTime();
    const endDateB = (b.data.endDate || new Date()).getTime();

    if (endDateA > endDateB) {
      return -1;
    } else if (endDateA === endDateB) {
      if (a.data.isPrimary && !b.data.isPrimary) {
        return -1;
      }
    }
  });

  return experiences;
}
