const categoryMap = {
  "Data Science":       { bg: "rgba(139, 92, 246, 0.1)",  text: "#7c3aed" },
  "Data Engineering":   { bg: "rgba(16, 185, 129, 0.1)",  text: "#059669" },
  "All":                { bg: "rgba(6, 182, 124, 0.1)",   text: "#06B67C" },
};

export const getCategoryStyle = (category) => {
  if (!category) return { bg: "#f1f5f9", text: "#64748b" };

  if (categoryMap[category]) return categoryMap[category];

  // fallback for any future categories
  const colors = [
    { bg: "rgba(14, 165, 233, 0.1)",  text: "#0284c7" },
    { bg: "rgba(168, 85, 247, 0.1)",  text: "#9333ea" },
    { bg: "rgba(20, 184, 166, 0.1)",  text: "#0d9488" },
    { bg: "rgba(101, 163, 13, 0.1)",  text: "#65a30d" },
  ];

  let hash = 0;
  const str = String(category);
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};
