// src/theme/engine/resolveTheme.ts

import type { ThemeMode } from "../schema/Theme.types";
import { getSystemTheme } from "./getSystemTheme";

export const resolveThemeMode = (mode: ThemeMode) => {
  if (mode === "system") {
    return getSystemTheme();
  }

  return mode;
};
