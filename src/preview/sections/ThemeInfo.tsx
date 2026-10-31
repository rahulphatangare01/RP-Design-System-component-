import { Typography } from "../../components/foundation/Typography";

import { useTheme } from "../../theme/hooks/useTheme";

export const ThemeInfo = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Typography variant="h4">Theme</Typography>

      <Typography>
        Brand:
        {theme.brandName}
      </Typography>

      <Typography>
        Font:
        {theme.typography.fontFamily}
      </Typography>
    </div>
  );
};
