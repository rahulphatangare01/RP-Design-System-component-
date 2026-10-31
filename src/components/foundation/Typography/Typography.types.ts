import React from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "label";

export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export type TypographyAlign = "left" | "center" | "right";

// export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
//   variant?: TypographyVariant;

//   weight?: TypographyWeight;

//   align?: TypographyAlign;

//   color?: string;

//   truncate?: boolean;

//   children: React.ReactNode;
// }
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;

  color?: string;

  backgroundColor?: string;

  fontSize?: string;

  lineHeight?: string;

  fontWeight?: number;

  fontFamily?: string;

  letterSpacing?: string;

  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";

  textDecoration?: "none" | "underline" | "line-through";

  align?: "left" | "center" | "right";

  truncate?: boolean;

  children: React.ReactNode;
}
