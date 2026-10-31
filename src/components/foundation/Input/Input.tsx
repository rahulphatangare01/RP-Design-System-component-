// import { forwardRef, useMemo } from "react";

// import styles from "./Input.module.scss";
// import { getValidationState } from "./inputValidationResolver";
// import type { InputProps } from "./Input.types";

// import { useTheme } from "../../../theme/hooks/useTheme";

// import { getInputSize } from "./inputSizeResolver";

// import { getInputVariant } from "./inputVariantResolver";
// import { usePasswordToggle } from "../../../theme/hooks/usePasswordToggle";

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       label,

//       variant = "outlined",

//       size = "md",

//       fullWidth,

//       helperText,

//       style,
//       state = "default",

//       required = false,
//       leftIcon,

//       rightIcon,

//       clearable = false,

//       showPasswordToggle = false,
//       errorMessage,

//       successMessage,

//       warningMessage,

//       ...rest
//     },
//     ref,
//   ) => {
//     const { theme } = useTheme();

//     const sizeToken = getInputSize(theme, size);

//     const variantToken = getInputVariant(theme, variant);
//     const validationToken = getValidationState(theme, state);
//     const { visible, toggle } = usePasswordToggle();
//     const inputType = showPasswordToggle
//       ? visible
//         ? "text"
//         : "password"
//       : rest.type;
//     const inputStyles = useMemo(
//       () => ({
//         height: sizeToken.height,

//         fontSize: sizeToken.fontSize,

//         padding: `${sizeToken.paddingY} ${sizeToken.paddingX}`,

//         borderRadius: theme.input.borderRadius,

//         border:
//           variant === "flushed"
//             ? "none"
//             : `1px solid ${
//                 validationToken?.borderColor ?? variantToken.borderColor
//               }`,
//         borderBottom:
//           variant === "flushed"
//             ? `1px solid ${
//                 validationToken?.borderColor ?? variantToken.borderColor
//               }`
//             : undefined,

//         background: variantToken.background,

//         color: variantToken.textColor,

//         fontFamily: theme.typography.fontFamily,

//         ...style,
//       }),
//       [sizeToken, variantToken, variant, theme, style],
//     );
//     const inputClasses = [
//       styles.input,

//       leftIcon && styles.withLeftIcon,

//       (rightIcon || clearable || showPasswordToggle) && styles.withRightIcon,
//     ]
//       .filter(Boolean)
//       .join(" ");
//     return (
//       <div
//         className={`${styles.container}
//           ${fullWidth ? styles.fullWidth : ""}`}
//       >
//         {label && (
//           <label className={styles.label}>
//             {label}

//             {required && <span className={styles.required}>*</span>}
//           </label>
//         )}

//         <input
//           ref={ref}
//           className={styles.input}
//           style={inputStyles}
//           {...rest}
//         />

//         {errorMessage && (
//           <span
//             className={styles.helperText}
//             style={{
//               color: theme.input.validation.error.helperTextColor,
//             }}
//           >
//             {errorMessage}
//           </span>
//         )}

//         {warningMessage && (
//           <span
//             className={styles.helperText}
//             style={{
//               color: theme.input.validation.warning.helperTextColor,
//             }}
//           >
//             {warningMessage}
//           </span>
//         )}

//         {successMessage && (
//           <span
//             className={styles.helperText}
//             style={{
//               color: theme.input.validation.success.helperTextColor,
//             }}
//           >
//             {successMessage}
//           </span>
//         )}

//         {!errorMessage && !warningMessage && !successMessage && helperText && (
//           <span className={styles.helperText}>{helperText}</span>
//         )}
//       </div>
//     );
//   },
// );

// Input.displayName = "Input";
import { forwardRef, useMemo } from "react";

import { Eye, EyeOff, X } from "lucide-react";

import styles from "./Input.module.scss";

import type { InputProps } from "./Input.types";

import { useTheme } from "../../../theme/hooks/useTheme";

import { getInputSize } from "./inputSizeResolver";

import { getInputVariant } from "./inputVariantResolver";

import { getValidationState } from "./inputValidationResolver";

import { usePasswordToggle } from "../../../theme/hooks/usePasswordToggle";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,

      variant = "outlined",

      size = "md",

      fullWidth,

      helperText,

      style,

      state = "default",

      required = false,

      errorMessage,

      successMessage,

      warningMessage,

      leftIcon,

      rightIcon,

      clearable = false,

      showPasswordToggle = false,

      ...rest
    },
    ref,
  ) => {
    const { theme } = useTheme();

    const sizeToken = getInputSize(theme, size);

    const variantToken = getInputVariant(theme, variant);

    const validationToken = getValidationState(theme, state);

    const { visible, toggle } = usePasswordToggle();

    const inputType = showPasswordToggle
      ? visible
        ? "text"
        : "password"
      : rest.type;

    const inputStyles = useMemo(
      () => ({
        height: sizeToken.height,

        fontSize: sizeToken.fontSize,

        padding: `${sizeToken.paddingY} ${sizeToken.paddingX}`,

        borderRadius: theme.input.borderRadius,

        border:
          variant === "flushed"
            ? "none"
            : `1px solid ${
                validationToken?.borderColor ?? variantToken.borderColor
              }`,

        borderBottom:
          variant === "flushed"
            ? `1px solid ${
                validationToken?.borderColor ?? variantToken.borderColor
              }`
            : undefined,

        background: validationToken?.background ?? variantToken.background,

        color: validationToken?.textColor ?? variantToken.textColor,

        fontFamily: theme.typography.fontFamily,

        ...style,
      }),
      [sizeToken, variantToken, validationToken, variant, theme, style],
    );

    const inputClasses = [
      styles.input,

      leftIcon && styles.withLeftIcon,

      (rightIcon || clearable || showPasswordToggle) && styles.withRightIcon,
    ]
      .filter(Boolean)
      .join(" ");

    const hasValue = Boolean(rest.value);

    return (
      <div
        className={`${styles.container}
        ${fullWidth ? styles.fullWidth : ""}`}
      >
        {label && (
          <label className={styles.label}>
            {label}

            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={styles.inputWrapper}>
          {leftIcon && (
            <span
              className={`${styles.icon}
              ${styles.leftIcon}`}
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            className={inputClasses}
            style={inputStyles}
            type={inputType}
            {...rest}
          />

          {showPasswordToggle && (
            <span
              className={`${styles.icon}
              ${styles.rightIcon}`}
              onClick={toggle}
            >
              {visible ? <EyeOff size={16} /> : <Eye size={16} />}
            </span>
          )}

          {!showPasswordToggle && clearable && hasValue && (
            <span
              className={`${styles.icon}
                ${styles.rightIcon}`}
              onClick={() => {
                const syntheticEvent = {
                  target: {
                    value: "",
                  },
                } as React.ChangeEvent<HTMLInputElement>;

                rest.onChange?.(syntheticEvent);
              }}
            >
              <X size={16} />
            </span>
          )}

          {!showPasswordToggle && !clearable && rightIcon && (
            <span
              className={`${styles.icon}
                ${styles.rightIcon}`}
            >
              {rightIcon}
            </span>
          )}
        </div>

        {errorMessage && (
          <span
            className={styles.helperText}
            style={{
              color: theme.input.validation.error.helperTextColor,
            }}
          >
            {errorMessage}
          </span>
        )}

        {warningMessage && (
          <span
            className={styles.helperText}
            style={{
              color: theme.input.validation.warning.helperTextColor,
            }}
          >
            {warningMessage}
          </span>
        )}

        {successMessage && (
          <span
            className={styles.helperText}
            style={{
              color: theme.input.validation.success.helperTextColor,
            }}
          >
            {successMessage}
          </span>
        )}

        {!errorMessage && !warningMessage && !successMessage && helperText && (
          <span className={styles.helperText}>{helperText}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
