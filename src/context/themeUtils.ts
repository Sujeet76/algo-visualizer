// Move the 'useTheme' function to a separate file, such as 'themeUtils.ts' and export it from there.

import { ThemeProviderContext } from "@/context/theme-provider";
import { useContext } from "react";

// themeUtils.ts
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
