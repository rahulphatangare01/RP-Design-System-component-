// import type { CSSProperties } from "react";

// import type { ButtonHoverEffect } from "../../../theme/schema/ThemeTokens.types";

// export const getHoverStyles = (effect: ButtonHoverEffect): CSSProperties => {
//   switch (effect) {
//     case "lift":
//       return {
//         transform: "translateY(-2px)",
//       };

//     case "scale":
//       return {
//         transform: "scale(1.03)",
//       };

//     case "glow":
//       return {
//         boxShadow: "0 0 12px rgba(59,130,246,.45)",
//       };

//     case "shadow":
//       return {
//         boxShadow: "0 8px 20px rgba(0,0,0,.18)",
//       };

//     default:
//       return {};
//   }
// };
import type { CSSProperties } from "react";

import type { ButtonHoverEffect } from "./Button.types";

export const getHoverStyles = (effect: ButtonHoverEffect): CSSProperties => {
  switch (effect) {
    case "lift":
      return {
        transform: "translateY(-4px)",
      };

    case "scale":
      return {
        transform: "scale(1.05)",
      };

    case "glow":
      return {
        boxShadow: "0 0 20px rgba(37,99,235,.45)",
      };

    case "shadow":
      return {
        boxShadow: "0 12px 24px rgba(0,0,0,.18)",
      };

    case "liftShadow":
      return {
        transform: "translateY(-4px)",

        boxShadow: "0 12px 24px rgba(0,0,0,.18)",
      };

    case "borderGlow":
      return {
        boxShadow: "0 0 0 3px rgba(37,99,235,.15)",
      };

    case "press":
      return {
        transform: "scale(0.97)",
      };

    default:
      return {};
  }
};
