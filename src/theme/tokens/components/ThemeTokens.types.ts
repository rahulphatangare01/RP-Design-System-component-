import type { ButtonAnimationToken } from "../../schema/ThemeTokens.types";

export interface ButtonSizeToken {
  height: string;

  paddingX: string;

  paddingY: string;

  fontSize: string;
}
export interface ButtonIconTokens {
  gap: string;

  xs: string;

  sm: string;

  md: string;

  lg: string;

  xl: string;
}
export interface ButtonTokens {
  defaultVariant: string;

  defaultSize: string;

  borderRadius: string;

  animation: ButtonAnimationToken;

  icon: ButtonIconTokens;
  xs: ButtonSizeToken;

  sm: ButtonSizeToken;

  md: ButtonSizeToken;

  lg: ButtonSizeToken;

  xl: ButtonSizeToken;

  variants: ButtonVariants;
}
export interface ButtonVariantToken {
  background: string;

  hoverBackground: string;

  activeBackground: string;

  textColor: string;

  borderColor: string;

  boxShadow: string;
  // icon: string;
}
export interface ButtonVariants {
  primary: ButtonVariantToken;

  secondary: ButtonVariantToken;

  success: ButtonVariantToken;

  warning: ButtonVariantToken;

  danger: ButtonVariantToken;

  outline: ButtonVariantToken;

  ghost: ButtonVariantToken;
}
