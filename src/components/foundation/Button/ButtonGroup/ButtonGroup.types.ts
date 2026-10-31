// import type { ReactNode } from "react";

// export interface ButtonGroupProps {
//   children: ReactNode;

//   direction?: "horizontal" | "vertical";

//   fullWidth?: boolean;
// }
import type { CSSProperties, ReactNode } from "react";

export type ButtonGroupDirection = "horizontal" | "vertical";

export type ButtonGroupAlign = "start" | "center" | "end" | "stretch";

export interface ButtonGroupProps {
  children: ReactNode;

  direction?: ButtonGroupDirection;

  fullWidth?: boolean;

  attached?: boolean;

  wrap?: boolean;

  gap?: string;

  align?: ButtonGroupAlign;

  className?: string;

  style?: CSSProperties;
}
