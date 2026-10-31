import { Routes, Route } from "react-router-dom";

import { DashboardPreview } from "../pages/DashboardPreview";
import { TypographyPreview } from "../pages/TypographyPreview";
import { ButtonPreview } from "../pages/ButtonPreview";
import { InputPreview } from "../pages/InputPreview";

export const PreviewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPreview />} />

      <Route path="/typography" element={<TypographyPreview />} />

      <Route path="/button" element={<ButtonPreview />} />
      <Route path="/input" element={<InputPreview />} />
    </Routes>
  );
};
