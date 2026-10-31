// import React from "react";

// import styles from "./Typography.module.scss";

// import type { TypographyProps } from "./Typography.types";

// import { ELEMENT_MAP } from "./Typography.constants";

// export const Typography = ({
//   variant = "body1",

//   weight = "regular",

//   align = "left",

//   truncate = false,

//   color,

//   children,

//   className = "",

//   style,

//   ...rest
// }: TypographyProps) => {
//   const Component = ELEMENT_MAP[variant] as React.ElementType;

//   return (
//     <Component
//       className={`
//         ${styles.typography}
//         ${styles[variant]}
//         ${styles[weight]}
//         ${styles[align]}
//         ${truncate ? styles.truncate : ""}
//         ${className}
//       `}
//       style={{
//         color,
//         ...style,
//       }}
//       {...rest}
//     >
//       {children}
//     </Component>
//   );
// };

import styles from "./Typography.module.scss";

import { useTheme } from "../../../theme/hooks/useTheme";

import { ELEMENT_MAP } from "./Typography.constants";

import type { TypographyProps } from "./Typography.types";

import { getTypographyToken } from "./typographyResolver";

export const Typography = ({
  variant = "body1",

  color,

  backgroundColor,

  fontSize,

  lineHeight,

  fontWeight,

  fontFamily,

  letterSpacing,

  textTransform,

  textDecoration,

  align = "left",

  truncate = false,

  className = "",

  style,

  children,

  ...rest
}: TypographyProps) => {
  const { theme } = useTheme();

  const token = getTypographyToken(theme, variant);

  // const Component =
  //   ELEMENT_MAP[variant];
  const Component = ELEMENT_MAP[variant] as React.ElementType;
  return (
    <Component
      className={`
        ${styles.typography}
        ${truncate ? styles.truncate : ""}
        ${className}
      `}
      style={{
        color: color ?? "var(--rp-text-primary)",

        backgroundColor,

        fontSize: fontSize ?? token.fontSize,

        lineHeight: lineHeight ?? token.lineHeight,

        fontWeight: fontWeight ?? token.fontWeight,

        fontFamily: fontFamily ?? theme.typography.fontFamily,

        letterSpacing,

        textTransform,

        textDecoration,

        textAlign: align,

        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
