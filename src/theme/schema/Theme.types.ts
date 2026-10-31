export type ThemeMode = "light" | "dark" | "system";

export const toggleTheme = (current: ThemeMode): ThemeMode => {
  return current === "light" ? "dark" : "light";
};
import type { ButtonTokens } from "../tokens/components/ThemeTokens.types";

import type {
  TypographyTokens,
  SpacingTokens,
  RadiusTokens,
  ShadowTokens,
  InputTokens,
} from "./ThemeTokens.types";

export interface ColorPalette {
  primary: string;
  secondary: string;

  success: string;
  warning: string;
  error: string;
  info: string;

  background: string;
  surface: string;

  textPrimary: string;
  textSecondary: string;

  border: string;
}

export interface ThemeConfig {
  brandName: string;
  typography: TypographyTokens;
  button: ButtonTokens;
  spacing: SpacingTokens;
  input: InputTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
  light: ColorPalette;
  dark: ColorPalette;
}
