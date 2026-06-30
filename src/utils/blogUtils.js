/**
 * Calculates estimated read time for given content
 * @param {string} content - The text content to analyze
 * @param {number} [wordsPerMinute=125] - Reading speed (words per minute)
 * @returns {{ words: number, minutes: number, text: string }} Read time details
 */
export function calculateReadTime(content, wordsPerMinute = 125) {
  const words = content
    .replace(/[^a-zA-Z\s]/g, "")
    .trim()
    .split(/\s+/).length;

  const minutes = words > 1 ? Math.ceil(words / wordsPerMinute) : 0;

  return {
    words,
    minutes,
    text: `${minutes} min read`,
  };
}

/**
 * Sorts blogs by published date (newest first)
 * @param {Array<Object>} blogs - Array of blog objects
 * @returns {Array<Object>} Sorted blogs array
 */
export function sortBlogsByDate(blogs) {
  return [...blogs].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
}

/**
 * Extracts unique blog categories
 * @param {Array<Object>} blogs - Array of blog objects
 * @returns {Array<string>} List of categories including "All"
 */
export function getCategories(blogs) {
  const categories = blogs
    .map((blog) => blog.categories?.name)
    .filter(Boolean);

  return ["All", ...new Set(categories)];
}

/**
 * Extracts unique tags from blogs
 * @param {Array<Object>} blogs - Array of blog objects
 * @returns {Array<string>} List of unique tags
 */
export function getTags(blogs) {
  const tags = blogs.flatMap((blog) => blog.tags || []);
  return [...new Set(tags)];
}

/**
 * Filters blogs by selected category
 * @param {Array<Object>} blogs - Array of blog objects
 * @param {string} category - Selected category name
 * @returns {Array<Object>} Filtered blogs
 */
export function filterByCategory(blogs, category) {
  if (!category || category === "All") return blogs;
  return blogs.filter((blog) => blog.categories?.name === category);
}

/**
 * Searches blogs by title or excerpt
 * @param {Array<Object>} blogs - Array of blog objects
 * @param {string} query - Search query string
 * @returns {Array<Object>} Filtered blogs matching query
 */
export function searchBlogs(blogs, query) {
  if (!query) return blogs;

  const lower = query.toLowerCase();

  return blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(lower) ||
      blog.excerpt?.toLowerCase().includes(lower)
  );
}

/**
 * Filters only published blogs
 * @param {Array<Object>} blogs - Array of blog objects
 * @returns {Array<Object>} Published blogs
 */
export function filterPublishedBlogs(blogs) {
  return blogs.filter((blog) => !blog.draft);
}

/**
 * Retrieves featured blogs
 * @param {Array<Object>} blogs - Array of blog objects
 * @returns {Array<Object>} Featured blogs
 */
export function getFeaturedBlogs(blogs) {
  return blogs.filter((blog) => blog.featured);
}

/**
 * Generates URL-friendly slug from title
 * @param {string} title - Blog title
 * @returns {string} Generated slug
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Generates readable text for read time label
 * @param {number} readTime - Read time in minutes
 * @returns {string} Formatted read time text
 */
export function generateReadTimeText(readTime) {
  if (readTime >= 2 ) {
    return "mins read"
  }
  else {
    return "min read"
  }
}