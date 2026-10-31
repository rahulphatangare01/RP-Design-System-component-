import { Typography } from "../../components/foundation/Typography";

import { PreviewLayout } from "../layout/PreviewLayout";

export const TypographyPreview = () => {
  return (
    <PreviewLayout>
      <Typography variant="display">Display</Typography>

      <Typography variant="h1">H1</Typography>

      <Typography variant="h2">H2</Typography>

      <Typography variant="h3">H3</Typography>

      <Typography variant="body1">Body1</Typography>

      <Typography variant="body2">Body2</Typography>
    </PreviewLayout>
  );
};
