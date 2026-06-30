import { extractTextFromTiptap } from "./extractTextFromTiptap";

/**
 * Generates a short text description from Tiptap content
 *
 * @param {Object} content - Tiptap JSON content
 * @param {number} [maxLength=80] - Maximum length of the description
 *
 * @returns {string} Truncated plain text description
 *
 * @description
 * Extracts plain text from Tiptap content, normalizes whitespace,
 * and trims it to a specified maximum length. Adds ellipsis ("...")
 * if the content exceeds the limit.
 */
export function generateDescription(content, maxLength = 80) {
  const fullText = extractTextFromTiptap(content)
    .replace(/\s+/g, " ")
    .trim();

  if (!fullText) return "";

  return fullText.length > maxLength
    ? fullText.slice(0, maxLength) + "..."
    : fullText;
}