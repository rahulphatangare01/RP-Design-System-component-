import type { ThemeConfig } from "../../../theme/schema/Theme.types";

import type { InputSize } from "./Input.types";

export const getInputSize = (theme: ThemeConfig, size: InputSize) => {
  return theme.input[size];
};
