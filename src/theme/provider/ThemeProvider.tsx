// src/theme/provider/ThemeProvider.tsx

// import { type ReactNode, useEffect, useState } from "react";

// import { ThemeContext } from "./ThemeContext";

// import { defaultTheme } from "../schema/Theme.schema";

// import type { ThemeConfig, ThemeMode } from "../schema/Theme.types";

// import { applyTheme } from "../engine/ThemeEngine";

// import { resolveThemeMode } from "../engine/resolveTheme";

// interface Props {
//   children: ReactNode;

//   customTheme?: ThemeConfig;
// }

// export const ThemeProvider = ({ children, customTheme }: Props) => {
//   //   const [mode, setMode] = useState<ThemeMode>("light");
//   const [mode, setMode] = useState<ThemeMode>(() => {
//     const storedMode = localStorage.getItem("rp-theme-mode") as ThemeMode;

//     return storedMode || "light";
//   });

//   const [theme, setTheme] = useState<ThemeConfig>(customTheme || defaultTheme);

//   useEffect(() => {
//     const resolvedMode = resolveThemeMode(mode);

//     applyTheme(theme, resolvedMode as ThemeMode);

//     localStorage.setItem("rp-theme-mode", mode);
//   }, [mode, theme]);

//   const updateTheme = (newTheme: ThemeConfig) => {
//     setTheme(newTheme);
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         mode,
//         theme,
//         setMode,
//         updateTheme,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { type ReactNode, useEffect, useState } from "react";

import { ThemeContext } from "./ThemeContext";

import type { ThemeConfig, ThemeMode } from "../schema/Theme.types";

import { defaultTheme } from "../schema/Theme.schema";

import { applyTheme } from "../engine/ThemeEngine";

import { getSystemTheme } from "../engine/getSystemTheme";

interface ThemeProviderProps {
  children: ReactNode;

  customTheme?: ThemeConfig;
}

export const ThemeProvider = ({
  children,
  customTheme,
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem("rp-theme-mode") as ThemeMode;

    return savedMode || "light";
  });

  const [theme, setTheme] = useState<ThemeConfig>(customTheme || defaultTheme);

  useEffect(() => {
    const resolvedMode = mode === "system" ? getSystemTheme() : mode;

    applyTheme(theme, resolvedMode);

    localStorage.setItem("rp-theme-mode", mode);
  }, [theme, mode]);

  const updateTheme = (newTheme: ThemeConfig) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme,
        setMode,
        updateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
