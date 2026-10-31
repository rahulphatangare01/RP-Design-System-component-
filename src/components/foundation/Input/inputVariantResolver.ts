import type { ThemeConfig } from "../../../theme/schema/Theme.types";

import type { InputVariant } from "./Input.types";

export const getInputVariant = (theme: ThemeConfig, variant: InputVariant) => {
  return theme.input.variants[variant];
};
