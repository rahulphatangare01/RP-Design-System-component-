// import type { ReactNode } from "react";

// import { Plus, Pencil, Trash2, Download, Upload } from "lucide-react";

// import { Button } from "../Button";

// import type { ActionType } from "./ActionButton.types";

// interface Props {
//   action: ActionType;

//   children?: ReactNode;
// }

// type ButtonVariant = React.ComponentProps<typeof Button>["variant"];

// interface ActionConfig {
//   icon: ReactNode;

//   variant: ButtonVariant;
// }

// export const ActionButton = ({ action, children }: Props) => {
// //   const config: Record<ActionType, ActionConfig> = {
// //     add: {
// //       icon: <Plus size={18} strokeWidth={2} />,

// //       variant: "success",
// //     },

// //     edit: {
// //       icon: <Pencil size={18} strokeWidth={2} />,

// //       variant: "warning",
// //     },

// //     delete: {
// //       icon: <Trash2 size={18} strokeWidth={2} />,

// //       variant: "danger",
// //     },

// //     download: {
// //       icon: <Download size={18} strokeWidth={2} />,

// //       variant: "primary",
// //     },

// //     export: {
// //       icon: <Upload size={18} strokeWidth={2} />,

// //       variant: "secondary",
// //     },
// //   };
// const defaultVariants = {
//   add: "success",

//   edit: "warning",

//   delete: "danger",

//   download: "primary",

//   export: "secondary",
// };
// const buttonVariant =
//   variant ??
//   defaultVariants[
//     action
//   ];
// //   const current = config[action];

//   return (
//     <Button  variant={
//     buttonVariant
//   }
//   leftIcon={
//     current.icon
//   }>
//       {children}
//     </Button>
//   );
// };
import type { ReactNode } from "react";

import { Plus, Pencil, Trash2, Download, Upload } from "lucide-react";

import { Button } from "../Button";

import type { ActionButtonProps, ActionType } from "./ActionButton.types";

type ButtonVariant = React.ComponentProps<typeof Button>["variant"];

interface ActionConfig {
  icon: ReactNode;
}

const actionConfig: Record<ActionType, ActionConfig> = {
  add: {
    icon: <Plus size={18} strokeWidth={2} />,
  },

  edit: {
    icon: <Pencil size={18} strokeWidth={2} />,
  },

  delete: {
    icon: <Trash2 size={18} strokeWidth={2} />,
  },

  download: {
    icon: <Download size={18} strokeWidth={2} />,
  },

  export: {
    icon: <Upload size={18} strokeWidth={2} />,
  },
};

const defaultVariants: Record<ActionType, ButtonVariant> = {
  add: "success",

  edit: "warning",

  delete: "danger",

  download: "primary",

  export: "secondary",
};

export const ActionButton = ({
  action,

  variant,

  children,

  ...buttonProps
}: ActionButtonProps) => {
  const current = actionConfig[action];

  const buttonVariant = variant ?? defaultVariants[action];

  return (
    <Button variant={buttonVariant} leftIcon={current.icon} {...buttonProps}>
      {children}
    </Button>
  );
};
