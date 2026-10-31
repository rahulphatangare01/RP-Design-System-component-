// import styles from "./ButtonGroup.module.scss";

// import type { ButtonGroupProps } from "./ButtonGroup.types";

// export const ButtonGroup = ({
//   children,
//   direction = "horizontal",

//   fullWidth,
// }: ButtonGroupProps) => {
//   return (
//     <div
//       className={`${styles.group}
//       ${styles[direction]}
//       ${fullWidth ? styles.fullWidth : ""}`}
//     >
//       {children}
//     </div>
//   );
// };
import { useMemo } from "react";

import styles from "./ButtonGroup.module.scss";

import type { ButtonGroupProps } from "./ButtonGroup.types";

export const ButtonGroup = ({
  children,

  direction = "horizontal",

  fullWidth = false,

  attached = false,

  wrap = true,

  gap = "8px",

  align = "start",

  className = "",

  style,
}: ButtonGroupProps) => {
  const groupStyles = useMemo(
    () => ({
      gap: attached ? "0px" : gap,

      ...style,
    }),
    [attached, gap, style],
  );

  const classes = [
    styles.group,

    styles[direction],

    styles[align],

    fullWidth && styles.fullWidth,

    attached && styles.attached,

    !wrap && styles.noWrap,

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={groupStyles}>
      {children}
    </div>
  );
};
