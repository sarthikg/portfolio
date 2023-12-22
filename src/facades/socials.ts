import socials from "@content/data/socials.json";
import type { Social } from "@schema/contact";

/**
 * Retrieves the socials array.
 *
 * @return {Social[]} The array of socials.
 */
export function getSocials(): Social[] {
  return socials;
}
