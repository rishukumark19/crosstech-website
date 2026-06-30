import { supabase } from "@/lib/supabaseClient";

/**
 * Cleans up unused images from Supabase storage by comparing
 * stored files with images referenced in blog data.
 *
 * @param {Array<Object>} blogs - Array of blog objects
 * @param {string} [blogs[].cover_image] - Cover image URL of the blog
 * @param {string} [blogs[].content] - JSON stringified blog content (Tiptap format)
 *
 * @returns {Promise<void>} Resolves when cleanup process completes
 *
 * @description
 * This function performs the following steps:
 * 1. Extracts all used image URLs from blog cover images and content
 * 2. Recursively traverses the Supabase storage bucket to collect all files
 * 3. Compares stored files against used URLs to identify unused images
 * 4. Deletes unused images from the storage bucket
 *
 * @throws Will log errors if storage listing or deletion fails
 */
export async function cleanupImages(blogs) {
  try {
    const bucket = "blog-images";

    // 1. Collect used image URLs
    const usedUrls = new Set();

    blogs.forEach((blog) => {
      if (blog.cover_image) {
        usedUrls.add(blog.cover_image);
      }

      try {
        const content = JSON.parse(blog.content || "{}");

        content?.content?.forEach((node) => {
          if (node.type === "image" && node.attrs?.src) {
            usedUrls.add(node.attrs.src);
          }
        });
      } catch {}
    });

    // 2. Recursive file collector
    const allFiles = [];

    async function walk(path = "") {
      const { data, error } = await supabase.storage
        .from(bucket)
        .list(path, { limit: 100 });

      if (error) {
        console.error("List error:", error);
        return;
      }

      for (const item of data || []) {
        const fullPath = path ? `${path}/${item.name}` : item.name;

        if (item.metadata) {
          // file
          allFiles.push(fullPath);
        } else {
          // folder → go deeper
          await walk(fullPath);
        }
      }
    }

    await walk();

    // 3. Build full URLs
    const baseUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${bucket}/`;

    const unused = allFiles.filter((filePath) => {
      const fullUrl = baseUrl + filePath;
      return !usedUrls.has(fullUrl);
    });

    // 4. Delete unused
    if (unused.length > 0) {
      const { error } = await supabase.storage
        .from(bucket)
        .remove(unused);

      if (error) {
        console.error("Delete error:", error);
      } else {
        console.log("Deleted unused images:", unused.length);
      }
    }

  } catch (err) {
    console.error("Cleanup failed:", err);
  }
}