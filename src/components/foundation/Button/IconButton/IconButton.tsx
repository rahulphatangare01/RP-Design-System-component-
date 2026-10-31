// import { Button } from "../Button";

// import type { IconButtonProps } from "./IconButton.types";

// export const IconButton = ({
//   icon,
//   size = "md",
//   shape = "circle",
//   ariaLabel,
//   ...rest
// }: IconButtonProps) => {
//   return (
//     <Button
//       iconOnly
//       size={size}
//       rounded={shape === "circle"}
//       leftIcon={icon}
//       ariaLabel={ariaLabel}
//       {...rest}
//     />
//   );
// };
import { Button } from "../Button";

import type { IconButtonProps } from "./IconButton.types";

export const IconButton = ({
  icon,

  shape = "circle",

  ariaLabel,

  variant,

  ...buttonProps
}: IconButtonProps) => {
  return (
    <Button
      iconOnly
      rounded={shape === "circle"}
      leftIcon={icon}
      ariaLabel={ariaLabel}
      variant={variant}
      {...buttonProps}
    />
  );
};
