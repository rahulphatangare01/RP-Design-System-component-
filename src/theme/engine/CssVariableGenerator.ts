// export const setCssVariable = (variable: string, value: string) => {
//   document.documentElement.style.setProperty(variable, value);
// };

// export const removeCssVariable = (variable: string) => {
//   document.documentElement.style.removeProperty(variable);
// };
export const setCssVariables = (variables: Record<string, string>) => {
  const root = document.documentElement;

  Object.entries(variables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};
