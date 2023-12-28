import navbarOptions from "@content/data/navbar.json";
import type { NavbarOption } from "@schema/navbar";

/**
 * Retrieves the navbar options.
 *
 * @return {NavbarOption[]} The navbar options.
 */
export function getNavbarOptions(): NavbarOption[] {
  return navbarOptions as NavbarOption[];
}
