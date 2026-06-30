import { supabase } from "@/lib/supabaseClient";
/**
 * Creates a new blog in the database
 *
 * @param {Object} blog - Blog object to insert
 * @returns {Promise<Object>} Created blog record
 *
 * @throws Will throw an error if insertion fails
 */
export async function createBlog(blog) {

  const { data, error } = await supabase.from("blogs")
    .insert([blog])
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Fetches all published blogs with categories and tags
 *
 * @returns {Promise<Array<Object>>} List of transformed blog objects
 *
 * @description
 * Retrieves blogs with related categories and tags,
 * filters only published blogs, and flattens tag relations.
 *
 * @throws Will throw an error if fetch fails
 */
export async function getBlogs() {

  const { data, error } = await supabase.from("blogs")
    .select(`
      *,
      categories (id, name,slug),
      blog_tags (
        tags (id, name, display_name)
      )
    `)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;

  const transformed = data.map(blog => ({
    ...blog,
    tags: blog.blog_tags?.map(bt => bt.tags) || []
  }));

  return transformed;
}

/**
 * Fetches a single blog by its slug
 *
 * @param {string} slug - Blog slug
 * @returns {Promise<Object>} Blog object with category and tags
 *
 * @throws Will throw an error if fetch fails or blog not found
 */
export async function getBlogBySlug(slug) {

  const { data, error } = await supabase
    .from("blogs")
    .select(`
      *,
      categories (id, name, slug),
      blog_tags (
        tags (id, name, display_name)
      )
    `)
    .eq("slug", slug)
    .single();

  if (error) throw error;

  const transformed = {
    ...data,
    tags: data.blog_tags?.map(bt => bt.tags) || []
  };

  return transformed;
}

/**
 * Retrieves all categories
 *
 * @returns {Promise<Array<Object>>} List of categories
 *
 * @throws Will throw an error if fetch fails
 */
export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) throw error;

  return data || [];
}

/**
 * Retrieves an existing category or creates a new one
 *
 * @param {string} name - Category name
 * @returns {Promise<Object>} Category record
 *
 * @description
 * Formats the name, generates a slug, and performs an upsert
 * to avoid duplicates based on slug.
 *
 * @throws Will throw an error if operation fails
 */
export async function getOrCreateCategory(name) {
  const formattedName = capitalizeWords(name);
  const slug = formattedName.toLowerCase().replace(/\s+/g, "-");

  const { data, error } = await supabase
    .from("categories")
    .upsert(
      { name: formattedName, slug },
      { onConflict: "slug" }
    )
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Retrieves an existing tag or creates a new one
 *
 * @param {string} name - Tag name
 * @returns {Promise<Object>} Tag record
 *
 * @description
 * Normalizes and formats tag name, then performs upsert
 * to prevent duplicates based on normalized name.
 *
 * @throws Will throw an error if operation fails
 */
export async function getOrCreateTag(name) {
  const formatted = capitalizeWords(name);
  const normalized = formatted.toLowerCase().replace(/\s+/g, "-");

  const { data, error } = await supabase
    .from("tags")
    .upsert({
      name: normalized,
      display_name: formatted
    }, {
      onConflict: "name"
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Attaches tags to a blog by creating relations
 *
 * @param {string} blogId - Blog ID
 * @param {Array<string>} tags - List of tag names
 *
 * @returns {Promise<void>}
 *
 * @description
 * Ensures all tags exist, then creates entries in the blog_tags table
 * to associate them with the blog.
 */
export async function attachTagsToBlog(blogId, tags) {
  const tagRecords = await Promise.all(
    tags.map(tag => getOrCreateTag(tag))
  );

  const relations = tagRecords.map(tag => ({
    blog_id: blogId,
    tag_id: tag.id
  }));

  await supabase.from("blog_tags").insert(relations);
}

/**
 * Capitalizes each word in a string
 *
 * @param {string} str - Input string
 * @returns {string} Capitalized string
 *
 * @description
 * Trims input, converts to lowercase, and capitalizes
 * the first letter of each word.
 */
export function capitalizeWords(str) {
  return str.trim()
    .toLowerCase()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}