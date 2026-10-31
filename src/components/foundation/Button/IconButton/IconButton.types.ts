// import type { ReactNode } from "react";

// export type IconButtonSize = "sm" | "md" | "lg";

// export type IconButtonShape = "circle" | "square";

// export interface IconButtonProps {
//   icon: ReactNode;

//   size?: IconButtonSize;

//   shape?: IconButtonShape;

//   disabled?: boolean;

//   ariaLabel: string;

//   onClick?: () => void;
// }
import type { ReactNode } from "react";

import type { ButtonProps } from "../Button.types";

export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonShape = "circle" | "square";

export interface IconButtonProps extends Omit<
  ButtonProps,
  "children" | "leftIcon"
> {
  icon: ReactNode;

  shape?: IconButtonShape;

  ariaLabel: string;
}
