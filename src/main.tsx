import React from "react";
import ReactDOM from "react-dom/client";
import { CVProvider } from "./cv-reducer/hook.tsx";
import { App } from "./App.tsx";
import { CVPreview } from "./components/CVPreview.tsx";
import "./styles/reset.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CVProvider>
      <App />
      <CVPreview />
    </CVProvider>
  </React.StrictMode>
);
