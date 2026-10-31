import type { ThemeConfig } from "../../../theme/schema/Theme.types";

import type { ButtonSize } from "./Button.types";

export const getIconSize = (theme: ThemeConfig, size: ButtonSize) => {
  return theme.button.icon[size];
};
