import { forwardRef, useMemo, useState, type ReactNode } from "react";

import styles from "./Button.module.scss";

import type { ButtonProps } from "./Button.types";

import { useTheme } from "../../../theme/hooks/useTheme";

import { getButtonSize, getButtonVariant } from "./buttonResolver";

import { getIconSize } from "./buttonIconResolver";

import { getHoverStyles } from "./buttonHoverResolver";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",

      size = "md",

      hoverEffect = "none",

      loading = false,

      disabled = false,

      fullWidth = false,

      rounded = false,

      iconOnly = false,

      iconSize,

      leftIcon,

      rightIcon,

      className = "",

      children,
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,

      ariaLabel,
      style,

      ...rest
    },
    ref,
  ) => {
    const { theme } = useTheme();

    const [isHovered, setIsHovered] = useState(false);

    const [isPressed, setIsPressed] = useState(false);

    const variantToken = getButtonVariant(theme, variant);

    const sizeToken = getButtonSize(theme, size);

    const resolvedIconSize = iconSize ?? getIconSize(theme, size);

    const hoverStyles = isHovered ? getHoverStyles(hoverEffect) : {};

    const background = isPressed
      ? variantToken.activeBackground
      : isHovered
        ? variantToken.hoverBackground
        : variantToken.background;

    const buttonStyles = useMemo(
      () => ({
        background,
        width: width ?? (iconOnly ? sizeToken.height : undefined),

        height: height ?? sizeToken.height,

        minWidth,

        maxWidth,

        minHeight,

        maxHeight,
        color: variantToken.textColor,

        border: `1px solid ${variantToken.borderColor}`,

        boxShadow: variantToken.boxShadow,

        // height: sizeToken.height,

        // width: iconOnly ? sizeToken.height : undefined,

        padding: iconOnly ? "0" : `${sizeToken.paddingY} ${sizeToken.paddingX}`,

        gap: iconOnly ? "0px" : theme.button.icon.gap,

        fontSize: sizeToken.fontSize,

        // fontWeight: sizeToken.fontWeight,

        fontFamily: theme.typography.fontFamily,

        borderRadius: rounded ? "999px" : theme.button.borderRadius,

        transition: `all ${theme.button.animation.duration} ${theme.button.animation.timingFunction}`,
        ...hoverStyles,

        ...style,
      }),
      [
        background,
        hoverStyles,
        iconOnly,
        rounded,
        sizeToken,
        style,
        theme,
        variantToken,
      ],
    );

    const renderIcon = (icon: ReactNode) => (
      <span
        className={styles.icon}
        style={{
          width: resolvedIconSize,

          height: resolvedIconSize,

          fontSize: resolvedIconSize,
        }}
      >
        {icon}
      </span>
    );

    const classes = [
      styles.button,

      fullWidth && styles.fullWidth,

      iconOnly && styles.iconOnly,

      disabled && styles.disabled,

      loading && styles.loading,

      className,
    ]
      .filter(Boolean)
      .join(" ");
    if (iconOnly && !ariaLabel) {
      console.warn("IconOnly button requires ariaLabel.");
    }
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={classes}
        aria-label={ariaLabel}
        aria-busy={loading}
        style={buttonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);

          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        {...rest}
      >
        {loading ? (
          <span className={styles.spinner} />
        ) : (
          <>
            {leftIcon && renderIcon(leftIcon)}

            {!iconOnly && children}

            {rightIcon && renderIcon(rightIcon)}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
