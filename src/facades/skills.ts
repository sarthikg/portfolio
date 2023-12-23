import skills from "@content/data/skills.json";
import type { Skill } from "@schema/skills";

/**
 * Retrieves the skills array.
 *
 * @return {Skill[]} The array of skills.
 */
export function getSkills(): Skill[] {
  return skills;
}
