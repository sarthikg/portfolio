/**
 * Formats a given date into a string representation.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date string.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
  });
}

/**
 * Formats the given date with the day included and returns it as a string.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date with the day included.
 */
export function formatDateWithDay(date: Date): string {
  return date
    .toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    .replaceAll("-", " ");
}

/**
 * Calculates the duration between two dates in years and months.
 *
 * @param {Date} startDate - The starting date of the duration.
 * @param {Date} [endDate=new Date()] - The ending date of the duration. Defaults to the current date.
 * @return {string} The duration between the start and end dates in the format "Xyr Ymos".
 */
export function getDuration(startDate: Date, endDate: Date): string {
  const totalMonths =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (months && years) {
    return `${years}yr ${months}mos`;
  }
  if (months && !years) {
    return `${months}mos`;
  }
  if (years && !months) {
    return `${years}yr`;
  }
  return `Just started 😊`;
}
