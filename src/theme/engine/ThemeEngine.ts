import type { ThemeConfig } from "../schema/Theme.types";
import { setCssVariables } from "./CssVariableGenerator";

export const applyTheme = (theme: ThemeConfig, mode: "light" | "dark") => {
  const palette = mode === "dark" ? theme.dark : theme.light;

  setCssVariables({
    "--rp-primary": palette.primary,

    "--rp-secondary": palette.secondary,

    "--rp-success": palette.success,

    "--rp-warning": palette.warning,

    "--rp-error": palette.error,

    "--rp-info": palette.info,

    "--rp-background": palette.background,

    "--rp-surface": palette.surface,

    "--rp-text-primary": palette.textPrimary,

    "--rp-text-secondary": palette.textSecondary,

    "--rp-border": palette.border,

    "--rp-font-family": theme.typography.fontFamily,

    "--rp-h1-font-size": theme.typography.h1.fontSize,

    "--rp-h1-line-height": theme.typography.h1.lineHeight,

    "--rp-h1-font-weight": String(theme.typography.h1.fontWeight),

    "--rp-h2-font-size": theme.typography.h2.fontSize,

    "--rp-h2-line-height": theme.typography.h2.lineHeight,

    "--rp-h2-font-weight": String(theme.typography.h2.fontWeight),

    "--rp-body1-font-size": theme.typography.body1.fontSize,

    "--rp-body1-line-height": theme.typography.body1.lineHeight,

    "--rp-body1-font-weight": String(theme.typography.body1.fontWeight),

    "--rp-body2-font-size": theme.typography.body2.fontSize,

    "--rp-body2-line-height": theme.typography.body2.lineHeight,

    "--rp-body2-font-weight": String(theme.typography.body2.fontWeight),

    "--rp-spacing-xs": theme.spacing.xs,

    "--rp-spacing-sm": theme.spacing.sm,

    "--rp-spacing-md": theme.spacing.md,

    "--rp-spacing-lg": theme.spacing.lg,

    "--rp-spacing-xl": theme.spacing.xl,

    "--rp-spacing-xxl": theme.spacing.xxl,

    "--rp-radius-sm": theme.radius.sm,

    "--rp-radius-md": theme.radius.md,

    "--rp-radius-lg": theme.radius.lg,

    "--rp-radius-xl": theme.radius.xl,

    "--rp-radius-full": theme.radius.full,

    "--rp-shadow-sm": theme.shadows.sm,

    "--rp-shadow-md": theme.shadows.md,

    "--rp-shadow-lg": theme.shadows.lg,
    // Button
    "--rp-button-xs-height": theme.button.xs.height,

    "--rp-button-xs-font-size": theme.button.xs.fontSize,

    "--rp-button-xs-padding-x": theme.button.xs.paddingX,

    "--rp-button-xs-padding-y": theme.button.xs.paddingY,
    "--rp-btn-primary-bg": theme.button.variants.primary.background,

    "--rp-btn-primary-hover-bg": theme.button.variants.primary.hoverBackground,

    "--rp-btn-primary-active-bg":
      theme.button.variants.primary.activeBackground,

    "--rp-btn-primary-color": theme.button.variants.primary.textColor,

    "--rp-btn-primary-border": theme.button.variants.primary.borderColor,

    "--rp-btn-primary-shadow": theme.button.variants.primary.boxShadow,
    "--rp-btn-warning-bg": theme.button.variants.warning.background,

    "--rp-btn-warning-hover-bg": theme.button.variants.warning.hoverBackground,

    "--rp-btn-warning-active-bg":
      theme.button.variants.warning.activeBackground,

    "--rp-btn-warning-color": theme.button.variants.warning.textColor,

    "--rp-btn-warning-border": theme.button.variants.warning.borderColor,

    "--rp-btn-warning-shadow": theme.button.variants.warning.boxShadow,
  });
};
