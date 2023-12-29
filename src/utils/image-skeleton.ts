/**
 * Adds a skeleton loader to all images matching the given selector.
 *
 * @param {string} selector - The CSS selector to select the images.
 * @param {string} className - The class name to add to the images while the loader is active.
 * @return {void} This function does not return anything.
 */
export function addSkeletonLoader(selector: string, className: string): void {
  const images = document.querySelectorAll(selector);
  console.log(images);
  images.forEach((image: HTMLImageElement) => {
    console.log(image.complete);
    if (!image.complete) {
      image.classList.add(className);
      image.onload = () => image.classList.remove(className);
    }
  });
}
