// // export type ActionType = "add" | "edit" | "delete" | "download" | "export";
// import type { ButtonVariant } from "../Button.types";

// export type ActionType = "add" | "edit" | "delete" | "download" | "export";

// export interface ActionButtonProps {
//   action: ActionType;

//   variant?: ButtonVariant;

//   children?: React.ReactNode;
// }
import type { ReactNode } from "react";

import type { ButtonProps } from "../Button.types";

export type ActionType = "add" | "edit" | "delete" | "download" | "export";

export interface ActionButtonProps extends Omit<ButtonProps, "leftIcon"> {
  action: ActionType;

  children?: ReactNode;
}
