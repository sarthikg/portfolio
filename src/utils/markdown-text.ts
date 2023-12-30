import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";

/**
 * Extracts text content from a Markdown string.
 *
 * @param {string} markdown - The Markdown string to extract text from.
 * @return {string} The extracted text content.
 */
export function extractTextFromMarkdown(markdown: string): string {
  const processor = unified().use(remarkParse).use(remarkStringify);
  const tree = processor.parse(markdown);
  return getTextFromNode(tree);
}

/**
 * Retrieves the text content from a given node in a tree structure.
 *
 * @param {any} node - The node object representing a part of the tree.
 * @return {string} The concatenated text content from the given node and its children.
 */
function getTextFromNode(node): string {
  const textContent = [];
  if (node.type === "text") {
    textContent.push(node.value);
  } else if (node.children) {
    node.children.forEach((childNode) => {
      textContent.push(getTextFromNode(childNode));
    });
  }
  return textContent
    .join(" ")
    .trim()
    .replaceAll(" . ", ". ")
    .replaceAll(" , ", ", ");
}
