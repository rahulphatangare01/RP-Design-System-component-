import type { ThemeConfig } from "./Theme.types";

export const defaultTheme: ThemeConfig = {
  brandName: "RP Inventory",

  // Component
  typography: {
    fontFamily: "Inter",

    display: {
      fontSize: "64px",
      lineHeight: "72px",
      fontWeight: 700,
    },

    h1: {
      fontSize: "48px",
      lineHeight: "56px",
      fontWeight: 700,
    },

    h2: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: 700,
    },

    h3: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 600,
    },

    h4: {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: 600,
    },

    h5: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 600,
    },

    h6: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 600,
    },

    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },

    body2: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    },

    caption: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 400,
    },

    label: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
    },
  },

  // Common
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "999px",
  },

  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 8px rgba(0,0,0,0.08)",
    lg: "0 8px 16px rgba(0,0,0,0.12)",
  },

  light: {
    primary: "#2563EB",
    secondary: "#7C3AED",

    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#06B6D4",

    background: "#FFFFFF",
    surface: "#F8FAFC",

    textPrimary: "#111827",
    textSecondary: "#6B7280",

    border: "#E5E7EB",
  },

  dark: {
    primary: "#60A5FA",
    secondary: "#A78BFA",

    success: "#4ADE80",
    warning: "#FBBF24",
    error: "#F87171",
    info: "#22D3EE",

    background: "#111827",
    surface: "#1F2937",

    textPrimary: "#FFFFFF",
    textSecondary: "#D1D5DB",

    border: "#374151",
  },

  button: {
    defaultVariant: "primary",

    defaultSize: "md",

    borderRadius: "10px",

    animation: {
      hoverEffect: "lift",
      duration: "0.25s",
      timingFunction: "ease",
    },

    xs: {
      height: "28px",
      paddingX: "10px",
      paddingY: "4px",
      fontSize: "12px",
      // fontWeight: 500,
    },

    sm: {
      height: "36px",
      paddingX: "14px",
      paddingY: "6px",
      fontSize: "14px",
      // fontWeight: 500,
    },

    md: {
      height: "44px",
      paddingX: "18px",
      paddingY: "10px",
      fontSize: "16px",
      // fontWeight: 600,
    },

    lg: {
      height: "52px",
      paddingX: "24px",
      paddingY: "12px",
      fontSize: "18px",
      // fontWeight: 600,
    },

    xl: {
      height: "60px",
      paddingX: "28px",
      paddingY: "14px",
      fontSize: "20px",
      // fontWeight: 700,
    },

    variants: {
      primary: {
        background: "#2563EB",
        hoverBackground: "#1D4ED8",
        activeBackground: "#1E40AF",
        textColor: "#FFFFFF",
        borderColor: "#2563EB",
        boxShadow: "0 2px 8px rgba(37,99,235,.25)",
      },

      secondary: {
        // background: "#7C3AED",
        // hoverBackground: "#6D28D9",
        // activeBackground: "#5B21B6",
        // textColor: "#FFFFFF",
        // borderColor: "#7C3AED",
        // boxShadow: "0 2px 8px rgba(124,58,237,.25)",
        background: "#7C3AED",
        hoverBackground: "#6D28D9",
        activeBackground: "#5B21B6",
        textColor: "#FFFFFF",
        borderColor: "#7C3AED",
        boxShadow: "0 2px 8px rgba(124,58,237,.25)",
      },

      success: {
        background: "#22C55E",
        hoverBackground: "#16A34A",
        activeBackground: "#15803D",
        textColor: "#FFFFFF",
        borderColor: "#22C55E",
        boxShadow: "0 2px 8px rgba(34,197,94,.25)",
      },

      warning: {
        background: "#F59E0B",
        hoverBackground: "#D97706",
        activeBackground: "#B45309",
        textColor: "#FFFFFF",
        borderColor: "#F59E0B",
        boxShadow: "0 2px 8px rgba(245,158,11,.25)",
      },

      danger: {
        background: "#EF4444",
        hoverBackground: "#DC2626",
        activeBackground: "#B91C1C",
        textColor: "#FFFFFF",
        borderColor: "#EF4444",
        boxShadow: "0 2px 8px rgba(239,68,68,.25)",
      },

      outline: {
        background: "transparent",
        hoverBackground: "#F8FAFC",
        activeBackground: "#E2E8F0",
        textColor: "#2563EB",
        borderColor: "#2563EB",
        boxShadow: "none",
      },

      ghost: {
        background: "transparent",
        hoverBackground: "#F1F5F9",
        activeBackground: "#E2E8F0",
        textColor: "#2563EB",
        borderColor: "transparent",
        boxShadow: "none",
      },
    },
    icon: {
      gap: "8px",

      xs: "12px",

      sm: "14px",

      md: "16px",

      lg: "18px",

      xl: "20px",
    },
  },
  input: {
    defaultSize: "md",

    defaultVariant: "outlined",

    borderRadius: "8px",

    xs: {
      height: "32px",
      fontSize: "12px",
      paddingX: "10px",
      paddingY: "6px",
    },

    sm: {
      height: "36px",
      fontSize: "13px",
      paddingX: "12px",
      paddingY: "8px",
    },

    md: {
      height: "40px",
      fontSize: "14px",
      paddingX: "14px",
      paddingY: "10px",
    },

    lg: {
      height: "44px",
      fontSize: "15px",
      paddingX: "16px",
      paddingY: "12px",
    },

    xl: {
      height: "48px",
      fontSize: "16px",
      paddingX: "18px",
      paddingY: "14px",
    },

    variants: {
      outlined: {
        background: "transparent",

        borderColor: "var(--rp-border)",

        textColor: "var(--rp-text-primary)",

        placeholderColor: "var(--rp-text-secondary)",

        hoverBorderColor: "var(--rp-primary)",

        focusBorderColor: "var(--rp-primary)",
      },

      filled: {
        background: "var(--rp-surface)",

        borderColor: "transparent",

        textColor: "var(--rp-text-primary)",

        placeholderColor: "var(--rp-text-secondary)",

        hoverBorderColor: "var(--rp-primary)",

        focusBorderColor: "var(--rp-primary)",
      },

      flushed: {
        background: "transparent",

        borderColor: "transparent",

        textColor: "var(--rp-text-primary)",

        placeholderColor: "var(--rp-text-secondary)",

        hoverBorderColor: "var(--rp-primary)",

        focusBorderColor: "var(--rp-primary)",
      },
    },
    validation: {
      success: {
        borderColor: "#22C55E",

        background: "transparent",

        textColor: "#22C55E",

        helperTextColor: "#22C55E",
      },

      warning: {
        borderColor: "#F59E0B",

        background: "transparent",

        textColor: "#F59E0B",

        helperTextColor: "#F59E0B",
      },

      error: {
        borderColor: "#EF4444",

        background: "transparent",

        textColor: "#EF4444",

        helperTextColor: "#EF4444",
      },
    },
    icon: {
      gap: "10px",

      size: "18px",
    },
  },
};
