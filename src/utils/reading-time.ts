/**
 * Calculates the estimated reading time for a given text.
 *
 * @param {string} text - The text to calculate the reading time for.
 * @return {number} The estimated reading time in minutes.
 */
export function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
