import type { TypographyVariant } from "./Typography.types";

import type { ThemeConfig } from "../../../theme/schema/Theme.types";

import type { TypographyVariantToken } from "../../../theme/schema/ThemeTokens.types";

export const getTypographyToken = (
  theme: ThemeConfig,
  variant: TypographyVariant,
): TypographyVariantToken => {
  return theme.typography[variant];
};
