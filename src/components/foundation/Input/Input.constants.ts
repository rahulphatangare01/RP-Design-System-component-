import type { InputSizeToken } from "../../../theme/schema/ThemeTokens.types";

export interface InputVariantToken {
  background: string;

  borderColor: string;

  textColor: string;

  placeholderColor: string;

  hoverBorderColor: string;

  focusBorderColor: string;

  errorBorderColor: string;

  successBorderColor: string;
}
export interface InputTokens {
  defaultSize: string;

  defaultVariant: string;

  borderRadius: string;

  xs: InputSizeToken;
  sm: InputSizeToken;
  md: InputSizeToken;
  lg: InputSizeToken;
  xl: InputSizeToken;

  variants: {
    outlined: InputVariantToken;
    filled: InputVariantToken;
    flushed: InputVariantToken;
  };
}
