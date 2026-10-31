import type { InputHTMLAttributes } from "react";
import type { ReactNode } from "react";
export type InputVariant = "outlined" | "filled" | "flushed";
export type InputState = "default" | "success" | "warning" | "error";
export type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;

  variant?: InputVariant;

  size?: InputSize;

  fullWidth?: boolean;

  helperText?: string;

  state?: InputState;

  required?: boolean;

  errorMessage?: string;

  successMessage?: string;

  warningMessage?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  clearable?: boolean;

  showPasswordToggle?: boolean;
}
