// new

//  Typography
export interface TypographyVariantToken {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
}

// Button
export type ButtonHoverEffect = "none" | "lift" | "scale" | "glow" | "shadow";

export interface ButtonAnimationToken {
  hoverEffect: ButtonHoverEffect;

  duration: string;

  timingFunction: string;
}

// Input
export interface InputSizeToken {
  height: string;

  fontSize: string;

  paddingX: string;

  paddingY: string;
}
export interface InputVariantToken {
  background: string;

  borderColor: string;

  textColor: string;

  placeholderColor: string;

  hoverBorderColor: string;

  focusBorderColor: string;
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
  icon: InputIconTokens;

  variants: {
    outlined: InputVariantToken;

    filled: InputVariantToken;

    flushed: InputVariantToken;
  };
  validation: {
    success: InputValidationToken;

    warning: InputValidationToken;

    error: InputValidationToken;
  };
}
export interface InputIconTokens {
  gap: string;

  size: string;
}
export interface InputValidationToken {
  borderColor: string;

  background: string;

  textColor: string;

  helperTextColor: string;
}

export interface TypographyTokens {
  fontFamily: string;

  display: TypographyVariantToken;

  h1: TypographyVariantToken;
  h2: TypographyVariantToken;
  h3: TypographyVariantToken;
  h4: TypographyVariantToken;
  h5: TypographyVariantToken;
  h6: TypographyVariantToken;

  body1: TypographyVariantToken;
  body2: TypographyVariantToken;

  caption: TypographyVariantToken;

  label: TypographyVariantToken;
}

export interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}
export interface RadiusTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}
export interface ShadowTokens {
  sm: string;
  md: string;
  lg: string;
}
