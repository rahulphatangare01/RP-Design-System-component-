import { Button } from "../../components/foundation/Button";

import { useTheme } from "../../theme/hooks/useTheme";

export const ThemeSwitcher = () => {
  const { mode, setMode } = useTheme();

  const handleToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Button fullWidth onClick={handleToggle}>
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};
