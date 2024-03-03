import { VisualizerProviderProps } from "@/types";
import { createContext, useContext } from "react";

export const VisualizerContext = createContext<
  VisualizerProviderProps | undefined
>(undefined);

export const useSortVisualizer = () => {
  const context = useContext(VisualizerContext);

  if (context === undefined)
    throw new Error("useVisualizer must be used within a VisualizerProvider");

  return context;
};
