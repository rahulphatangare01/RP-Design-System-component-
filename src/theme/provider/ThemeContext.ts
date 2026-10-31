// // src/theme/provider/ThemeContext.ts

// import { createContext } from "react";
// import type { ThemeConfig, ThemeMode } from "../schema/Theme.types";

// export interface ThemeContextType {
//   mode: ThemeMode;

//   theme: ThemeConfig;

//   setMode: (mode: ThemeMode) => void;

//   updateTheme: (theme: ThemeConfig) => void;
// }

// export const ThemeContext = createContext<ThemeContextType | null>(null);

import { createContext } from "react";

import type { ThemeConfig, ThemeMode } from "../schema/Theme.types";

export interface ThemeContextType {
  mode: ThemeMode;

  theme: ThemeConfig;

  setMode: (mode: ThemeMode) => void;

  updateTheme: (theme: ThemeConfig) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
