import { useState, useMemo } from "react";
import acceleratorsData from "@/data/acceleratorsData.jsx";
import {
  getFeaturedAccelerators,
  getDynamicCategories,
} from "@/utils/acceleratorUtils";
import { useDebounce } from "@/hooks/useDebounce";

/**
 * Custom hook to manage the state and filtering logic for the Accelerators preview.
 */
export const useAcceleratorFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const debouncedSearch = useDebounce(searchQuery, 300);

  // 1. Get the dynamic tab labels
  const displayCategories = useMemo(() => getDynamicCategories(3), []);

  // 2. Perform the actual filtering
  const filteredItems = useMemo(() => {
    const searchFiltered = acceleratorsData.filter(
      (acc) =>
        acc.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        acc.category.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );

    if (activeCategory === "All") {
      // Use the 2+2 featured logic when showing "All"
      // But account for active search query
      if (debouncedSearch) {
        // When searching, show all matching results (up to 4)
        return searchFiltered.reverse().slice(0, 4);
      }
      return getFeaturedAccelerators(4);
    } else {
      // Show specific category items
      return searchFiltered
        .filter((acc) => acc.category === activeCategory)
        .reverse()
        .slice(0, 4);
    }
  }, [debouncedSearch, activeCategory]);

  return {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    displayCategories,
    filteredItems,
  };
};
