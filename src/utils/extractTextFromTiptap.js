/**
 * Extracts plain text content from a Tiptap JSON node
 *
 * @param {Object} node - Tiptap node object
 * @param {string} [node.type] - Node type (e.g., "text", "paragraph", etc.)
 * @param {string} [node.text] - Text content (for text nodes)
 * @param {Array<Object>} [node.content] - Child nodes
 *
 * @returns {string} Concatenated plain text extracted from the node tree
 *
 * @description
 * Recursively traverses a Tiptap document structure and extracts
 * all text content, ignoring formatting and non-text nodes.
 */
export function extractTextFromTiptap(node) {
  if (!node) return "";

  let text = "";

  if (node.type === "text") {
    return node.text;
  }

  if (node.content && Array.isArray(node.content)) {
    for (const child of node.content) {
      text += extractTextFromTiptap(child) + " ";
    }
  }

  return text;
}