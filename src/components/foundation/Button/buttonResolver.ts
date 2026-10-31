// import type { ThemeConfig } from "../../../theme/schema/Theme.types";

// import type { ButtonVariant } from "./Button.types";
// export const getButtonVariant = (
//   theme: ThemeConfig,
//   variant: ButtonVariant,
// ) => {
//   return theme.button.variants[variant];
// };
import type { ThemeConfig } from "../../../theme/schema/Theme.types";

import type { ButtonSize, ButtonVariant } from "./Button.types";

export const getButtonVariant = (
  theme: ThemeConfig,
  variant: ButtonVariant,
) => {
  return theme.button.variants[variant];
};

export const getButtonSize = (theme: ThemeConfig, size: ButtonSize) => {
  return theme.button[size];
};
