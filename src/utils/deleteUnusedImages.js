import { supabase } from "@/lib/supabaseClient";

/**
 * Extracts all image URLs from Tiptap JSON content
 *
 * @param {Object} content - Tiptap JSON content object
 * @returns {Array<string>} List of extracted image URLs
 *
 * @description
 * Recursively traverses the Tiptap document structure
 * and collects all image node sources.
 */
function extractImageUrls(content) {
  const urls = [];

  function traverse(node) {
    if (!node) return;

    if (node.type === "image" && node.attrs?.src) {
      urls.push(node.attrs.src);
    }

    if (node.content) {
      node.content.forEach(traverse);
    }
  }

  traverse(content);

  return urls;
}

/**
 * Recursively lists all files inside a Supabase storage folder
 *
 * @param {string} folder - Root folder path
 * @returns {Promise<Array<string>>} List of file paths
 *
 * @description
 * Traverses all nested folders inside the given directory
 * and returns a flat list of file paths.
 */
async function listAllFiles(folder) {
  let allFiles = [];

  const { data, error } = await supabase.storage
    .from("blog-images")
    .list(folder);

  if (error) {
    console.error("Error listing folder:", error);
    return [];
  }

  for (const item of data) {
    const path = `${folder}/${item.name}`;

    if (item.id === null) {
      // Folder → recurse
      const nested = await listAllFiles(path);
      allFiles = [...allFiles, ...nested];
    } else {
      // File
      allFiles.push(path);
    }
  }

  return allFiles;
}

/**
 * Deletes unused images for a specific blog from Supabase storage
 *
 * @param {Object} params - Function parameters
 * @param {string} params.blogId - Unique blog identifier
 * @param {Object} params.content - Tiptap JSON content
 * @param {string} [params.coverImage] - Blog cover image URL
 *
 * @returns {Promise<void>} Resolves when cleanup is complete
 *
 * @description
 * This function:
 * 1. Collects all used image URLs (cover + content)
 * 2. Retrieves all stored images for the blog folder
 * 3. Converts file paths to public URLs
 * 4. Identifies unused images
 * 5. Deletes unused images from storage
 *
 * @throws Logs errors if listing or deletion fails
 */
export async function deleteUnusedImages({ blogId, content, coverImage }) {
  try {
    const rootFolder = `blog-${blogId}`;

    // 1. Collect used images
    const usedImages = [
      coverImage,
      ...extractImageUrls(content),
    ].filter(Boolean);

    const usedSet = new Set(usedImages);

    // 2. Get all files (recursive)
    const allPaths = await listAllFiles(rootFolder);

    // 3. Convert path → public URL
    const getPublicUrl = (path) =>
      supabase.storage.from("blog-images").getPublicUrl(path).data.publicUrl;

    // 4. Find unused files
    const unusedPaths = allPaths.filter((path) => {
      const url = getPublicUrl(path);
      return !usedSet.has(url);
    });

    // 5. Delete unused files
    if (unusedPaths.length > 0) {
      const { error } = await supabase.storage
      .from("blog-images")
      .remove(unusedPaths);
    }
  } catch (err) {
    console.error("Cleanup failed:", err);
  }
}