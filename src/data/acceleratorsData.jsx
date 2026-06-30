/**
 * Accelerators Data Module
 * 
 * Imports product data from a clean JSON file and maps icon/image
 * string keys to actual React components and asset imports.
 * This separation keeps content editable without touching code.
 */
import * as Icons from "lucide-react";
import accDataImg from "@/assets/acc-data.png";
import accAiImg from "@/assets/acc-ai.png";
import accMlImg from "@/assets/acc-ml.png";
import dataScience from "./accelerators/dataScience.json";
import dataEngineering from "./accelerators/dataEngineering.json";

// Combine the raw data into a single array
const rawData = [...dataScience, ...dataEngineering];

// Maps the "icon" string in JSON → a Lucide React icon component
const iconMap = {
  database: <Icons.Database size={20} />,
  brain: <Icons.Brain size={20} />,
  cpu: <Icons.Cpu size={20} />,
  zap: <Icons.Zap size={20} />,
  shield: <Icons.Shield size={20} />,
  activity: <Icons.Activity size={20} />,
  globe: <Icons.Globe size={20} />,
  layout: <Icons.Layout size={20} />,
  search: <Icons.Search size={20} />,
  drift: <Icons.BarChart3 size={20} />,
  compute: <Icons.Cpu size={20} />,
  analytics: <Icons.BarChart size={20} />,
  sync: <Icons.RefreshCcw size={20} />,
  partition: <Icons.RefreshCw size={20} />,
  scaling: <Icons.Server size={20} />,
  security: <Icons.Shield size={20} />,
  checkpoint: <Icons.Activity size={20} />,
  schema: <Icons.Database size={20} />,
  "time-travel": <Icons.History size={20} />,
  governance: <Icons.Lock size={20} />,
  optimization: <Icons.Zap size={20} />,
  lineage: <Icons.Map size={20} />,
  alert: <Icons.AlertCircle size={20} />,
  auth: <Icons.UserCheck size={20} />,
  vector: <Icons.Zap size={20} />,
  lock: <Icons.Lock size={20} />,
};

// Maps the "imageKey" string in JSON → an imported image asset
const imageMap = {
  accData: accDataImg,
  accAi: accAiImg,
  accMl: accMlImg,
};

// Hydrate the raw JSON into fully renderable data objects
const accelerators = rawData.map((item) => ({
  ...item,
  icon: iconMap[item.icon] || <Icons.Settings size={20} />,
  image: imageMap[item.imageKey] || accDataImg,
}));

export default accelerators;
