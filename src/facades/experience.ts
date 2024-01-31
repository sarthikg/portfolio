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
    const endDateA = getMostRecentEndDate(a).getTime();
    const endDateB = getMostRecentEndDate(b).getTime();

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

/**
 * Get most recent end-date for the experience
 * @param experience - Experience object
 * @returns - Date of th most recent end-date
 */
function getMostRecentEndDate(experience: CollectionEntry<"experience">): Date {
  return experience.data.titles
    .map((title) => title.endDate || new Date())
    .reduce((a, b) => (a.getTime() > b.getTime() ? a : b));
}
