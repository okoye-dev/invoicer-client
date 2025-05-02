import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./app.tsx";
import { ThemeProvider } from "@/shared/context/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </StrictMode>
);
