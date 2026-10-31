import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/index.scss";
// import App from "./App.tsx";
import { ThemeProvider } from "./theme/provider/ThemeProvider";
import { AppPreview } from "./preview/AppPreview.tsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      <BrowserRouter>
        <AppPreview />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
