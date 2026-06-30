import acceleratorsData from "@/data/acceleratorsData.jsx";

/**
 * Picks the latest featured accelerators for the Home Page and Mega Menu.
 * 
 * Strategy: Grab the 2 newest from "Data Science" and the 2 newest from 
 * "Data Engineering" to always return exactly 4 products with balanced 
 * category representation.
 */
export const getFeaturedAccelerators = (limit = 4) => {
  const perCategory = Math.ceil(limit / 2);
  
  // Reverse to scan newest-first (items at end of array are newest)
  const reversed = [...acceleratorsData].reverse();
  
  const dataScience = reversed
    .filter((item) => item.category === "Data Science")
    .slice(0, perCategory);
  
  const dataEngineering = reversed
    .filter((item) => item.category === "Data Engineering")
    .slice(0, perCategory);

  // Interleave: DS, DE, DS, DE for visual variety
  const featured = [];
  for (let i = 0; i < perCategory; i++) {
    if (dataScience[i]) featured.push(dataScience[i]);
    if (dataEngineering[i]) featured.push(dataEngineering[i]);
  }

  return featured.slice(0, limit);
};

/**
 * Returns a list of unique categories found in the data,
 * sorted by their most recent appearance.
 */
export const getDynamicCategories = (limit = 3) => {
  const rawCategories = [...acceleratorsData]
    .reverse()
    .map((acc) => acc.category);
  
  const uniqueTabs = ["All", ...new Set(rawCategories)];
  return uniqueTabs.slice(0, limit + 1); // +1 because of "All"
};
