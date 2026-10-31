import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "ghost"
  | "outline";
export type ButtonHoverEffect =
  | "none"
  | "lift"
  | "scale"
  | "glow"
  | "shadow"
  | "liftShadow"
  | "borderGlow"
  | "press";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fontWeight?: string;
  loading?: boolean;
  iconOnly?: boolean;
  iconSize?: string;
  fullWidth?: boolean;
  hoverEffect?: ButtonHoverEffect;
  rounded?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;

  // Height/ width
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;

  // Accessibility

  ariaLabel?: string;
}
