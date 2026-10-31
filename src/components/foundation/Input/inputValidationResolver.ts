import type { ThemeConfig } from "../../../theme/schema/Theme.types";

import type { InputState } from "./Input.types";

export const getValidationState = (theme: ThemeConfig, state: InputState) => {
  if (state === "default") {
    return null;
  }

  return theme.input.validation[state];
};
